import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const SEED_PARTS = ['GenAI', 'Quiz', '2026', 'ZeroTrust', 'IIG', 'CertSec'];
const APP_SALT = 'iig-genai-cert-quiz-salt-v2';

function getAppSecret() {
  return SEED_PARTS.join('::') + '@' + APP_SALT;
}

function deriveKeyNode(secret, salt = APP_SALT) {
  return crypto.pbkdf2Sync(secret, salt, 100000, 32, 'sha256');
}

function encryptPayloadNode(data, secret = getAppSecret()) {
  const jsonStr = typeof data === 'string' ? data : JSON.stringify(data);
  const key = deriveKeyNode(secret);
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const encrypted = Buffer.concat([
    cipher.update(jsonStr, 'utf8'),
    cipher.final(),
  ]);
  const tag = cipher.getAuthTag();

  const combined = Buffer.concat([iv, encrypted, tag]);
  return combined.toString('base64');
}

function canonicalizeAnswer(answer) {
  if (typeof answer === 'string') return answer.trim();
  if (Array.isArray(answer)) {
    return [...answer]
      .map((item) => String(item).trim())
      .sort()
      .join('|');
  }
  if (typeof answer === 'object' && answer !== null) {
    const entries = Object.entries(answer)
      .map(([k, v]) => `${k}:${String(v).trim()}`)
      .sort();
    return entries.join(';');
  }
  return '';
}

function computeAnswerSignature(questionId, answer) {
  const canonical = canonicalizeAnswer(answer);
  const rawInput = `q:${questionId}::ans:${canonical}::salt:${APP_SALT}`;
  return crypto.createHash('sha256').update(rawInput, 'utf8').digest('hex');
}

const dataDir = path.resolve('public/data');
const chunksDir = path.join(dataDir, 'chunks');
const manifestPath = path.join(dataDir, 'manifest.json');
// Canonical sources stay outside public and are read on EVERY build.
const sourceDir = path.resolve('data/source/chunks');

if (!fs.existsSync(manifestPath)) {
  console.error('Manifest not found at:', manifestPath);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
let totalQuestionsProcessed = 0;
// Preflight the entire bank before writing any chunk or keybook.
const ids = new Set();
const sources = new Map();
for (const chunk of manifest.chunks) {
  const questions = JSON.parse(
    fs.readFileSync(path.join(sourceDir, `${chunk.id}.json`), 'utf8'),
  );
  if (questions.length !== chunk.count)
    throw new Error(`Count mismatch: ${chunk.id}`);
  for (const q of questions) {
    if (ids.has(q.id)) throw new Error(`Duplicate question: ${q.id}`);
    if (!q.explanation?.trim()) throw new Error(`Missing explanation: ${q.id}`);
    ids.add(q.id);
  }
  sources.set(chunk.id, questions);
}
if (ids.size !== manifest.total) throw new Error('Manifest total mismatch');
console.log(`Rebuilding ${ids.size} questions from canonical sources...`);
const examKeyBook = {};
const pending = [];

for (const chunkInfo of manifest.chunks) {
  const baseId = chunkInfo.id;
  const encFilename = `${baseId}.enc`;
  const encPath = path.join(chunksDir, encFilename);

  const rawQuestions = sources.get(baseId);
  const secureQuestions = [];

  for (const q of rawQuestions) {
    let correctAnswer = null;
    let summaryText = '';

    const interactionKind = q.interaction.kind;
    const cleanInteraction = { ...q.interaction };
    const checkOptions = (options) => {
      if (options.filter((o) => o.correct).length !== 1) {
        throw new Error(`Expected one practice key: ${q.id}`);
      }
    };

    if (interactionKind === 'single') {
      checkOptions(q.interaction.options);
      const correctOpt = q.interaction.options.find((o) => o.correct);
      correctAnswer = correctOpt ? correctOpt.id : '';
      summaryText = correctOpt ? correctOpt.text : '';
      cleanInteraction.options = q.interaction.options.map((o) => ({
        id: o.id,
        text: o.text,
      }));
    } else if (interactionKind === 'multiple') {
      const correctOpts = q.interaction.options.filter((o) => o.correct);
      if (!correctOpts.length) throw new Error(`Missing practice key: ${q.id}`);
      correctAnswer = correctOpts.map((o) => o.id);
      summaryText = correctOpts.map((o) => o.text).join('; ');
      cleanInteraction.options = q.interaction.options.map((o) => ({
        id: o.id,
        text: o.text,
      }));
    } else if (interactionKind === 'matrix') {
      const resp = {};
      const summaries = [];
      cleanInteraction.rows = q.interaction.rows.map((row) => {
        checkOptions(row.options);
        const correctOpt = row.options.find((o) => o.correct);
        if (correctOpt) {
          resp[row.id] = correctOpt.id;
          summaries.push(`${row.text}: ${correctOpt.text}`);
        }
        return {
          id: row.id,
          text: row.text,
          options: row.options.map((o) => ({ id: o.id, text: o.text })),
        };
      });
      correctAnswer = resp;
      summaryText = summaries.join(' • ');
    } else if (interactionKind === 'matching') {
      const resp = {};
      const summaries = [];
      for (const row of q.interaction.rows) {
        if (!q.interaction.options.some((o) => o.id === row.answerId)) {
          throw new Error(`Invalid matching key: ${q.id}`);
        }
        resp[row.id] = row.answerId;
        const opt = q.interaction.options.find((o) => o.id === row.answerId);
        summaries.push(`${row.text}: ${opt ? opt.text : ''}`);
      }
      correctAnswer = resp;
      summaryText = summaries.join(' • ');
      cleanInteraction.rows = q.interaction.rows.map((row) => ({
        id: row.id,
        text: row.text,
      }));
    } else if (interactionKind === 'sequence') {
      const orders = q.interaction.items
        .map((item) => item.order)
        .sort((a, b) => a - b);
      if (!orders.every((order, index) => order === index + 1))
        throw new Error(`Invalid sequence: ${q.id}`);
      const resp = {};
      for (const item of q.interaction.items) {
        resp[item.id] = String(item.order);
      }
      correctAnswer = resp;
      summaryText = q.interaction.items
        .map((item) => `${item.order}. ${item.text}`)
        .join(' • ');
      cleanInteraction.items = q.interaction.items.map((item) => ({
        id: item.id,
        text: item.text,
      }));
    } else {
      throw new Error(
        `Câu hỏi ${q.id}: kiểu tương tác không hỗ trợ "${interactionKind}". ` +
          `Bổ sung xử lý cho kiểu này trước khi mã hoá, nếu không đáp án sẽ bị sinh sai.`,
      );
    }

    const answerSig = computeAnswerSignature(q.id, correctAnswer);

    examKeyBook[q.id] = {
      correctAnswer,
      summaryText,
      explanation: q.explanation || '',
      review: q.review,
    };

    secureQuestions.push({
      id: q.id,
      number: q.number,
      source: q.source,
      type: q.type,
      prompt: q.prompt,
      images: q.images,
      difficulty: q.difficulty,
      topic: q.topic,
      interaction: cleanInteraction,
      answerSignature: answerSig,
    });

    totalQuestionsProcessed++;
  }

  // Encrypt the entire chunk payload
  const encChunkPayload = encryptPayloadNode(secureQuestions);
  pending.push([encPath, encChunkPayload]);

  // Update manifest chunk file pointer
  chunkInfo.file = `/data/chunks/${encFilename}`;
}

// Save encrypted Exam Keybook
const encryptedKeybookPayload = encryptPayloadNode(examKeyBook);
fs.mkdirSync(chunksDir, { recursive: true });
for (const [filename, payload] of pending)
  fs.writeFileSync(filename, payload, 'utf8');
fs.writeFileSync(
  path.join(dataDir, 'keybook.enc'),
  encryptedKeybookPayload,
  'utf8',
);

// Save manifest
manifest.isEncrypted = true;
manifest.encryptedAt = new Date().toISOString();
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

console.log(
  `Successfully encrypted ${totalQuestionsProcessed} questions across ${manifest.chunks.length} chunks!`,
);
console.log(`Saved encrypted keybook to public/data/keybook.enc`);
console.log(`Updated manifest to public/data/manifest.json`);
console.log(`Preserved canonical sources in data/source/chunks/`);
