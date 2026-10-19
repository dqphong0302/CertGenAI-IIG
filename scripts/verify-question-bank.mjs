import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';

// Exercise the actual browser decrypt/hash/grading functions against published files.
const moduleUrl = (source) =>
  `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`;
const compile = (source) =>
  ts.transpileModule(source, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ES2022,
    },
  }).outputText;
// Node không hiểu alias `@/`, nên nạp từng tệp nguồn rồi thay specifier
// `@/...` bằng data URL của tệp đã biên dịch (đệ quy theo chuỗi phụ thuộc).
// Chỉ bắt specifier thật sau `from`: một đường dẫn `@/...` nằm trong chú thích
// không phải là phụ thuộc.
const SPECIFIER = /\bfrom\s+['"]@\/([\w./-]+)['"]/g;
const compiledModules = new Map();
const loadModule = async (specifier) => {
  const cached = compiledModules.get(specifier);
  if (cached) return cached;

  let source = await fs.readFile(`${specifier}.ts`, 'utf8');
  for (const dependency of new Set(
    [...source.matchAll(SPECIFIER)].map((match) => match[1]),
  )) {
    const url = await loadModule(dependency);
    source = source.replaceAll(`@/${dependency}'`, `${url}'`);
    source = source.replaceAll(`@/${dependency}"`, `${url}"`);
  }

  const url = moduleUrl(compile(source));
  compiledModules.set(specifier, url);
  return url;
};

const { decryptPayload } = await import(await loadModule('lib/crypto'));
const { isCorrect } = await import(await loadModule('lib/quiz'));
const readJson = async (file) => JSON.parse(await fs.readFile(file, 'utf8'));
const before = await readJson('data/review/before-2026-10-17.json');
const manifest = await readJson('public/data/manifest.json');
const keybook = await decryptPayload(
  await fs.readFile('public/data/keybook.enc', 'utf8'),
);
const stripAnswers = (value) => {
  if (Array.isArray(value)) return value.map(stripAnswers);
  if (value && typeof value === 'object')
    return Object.fromEntries(
      Object.entries(value)
        .filter(
          ([key]) =>
            ![
              'correct',
              'answerId',
              'order',
              'explanation',
              'review',
              'answerSignature',
            ].includes(key),
        )
        .map(([key, item]) => [key, stripAnswers(item)]),
    );
  return value;
};
function expectedAnswer(q) {
  const i = q.interaction;
  if (i.kind === 'single') return i.options.find((o) => o.correct).id;
  if (i.kind === 'multiple')
    return i.options.filter((o) => o.correct).map((o) => o.id);
  if (i.kind === 'matrix')
    return Object.fromEntries(
      i.rows.map((r) => [r.id, r.options.find((o) => o.correct).id]),
    );
  if (i.kind === 'matching')
    return Object.fromEntries(i.rows.map((r) => [r.id, r.answerId]));
  return Object.fromEntries(i.items.map((o) => [o.id, String(o.order)]));
}
const originals = new Map(before.map((q) => [q.id, q]));
const current = [];
const changed = [];
const counts = {};
for (const chunk of manifest.chunks) {
  const canonical = await readJson(`data/source/chunks/${chunk.id}.json`);
  const served = await decryptPayload(
    await fs.readFile(path.join('public', chunk.file), 'utf8'),
  );
  assert.equal(served.length, chunk.count);
  for (const [index, q] of canonical.entries()) {
    current.push(q);
    const publicQuestion = served[index];
    assert.deepEqual(
      stripAnswers(q),
      stripAnswers(originals.get(q.id)),
      `Question wording changed: ${q.number}`,
    );
    assert.deepEqual(
      stripAnswers(publicQuestion),
      stripAnswers(q),
      `Served wording mismatch: ${q.number}`,
    );
    const expected = expectedAnswer(q);
    assert.deepEqual(keybook[q.id].correctAnswer, expected);
    assert.equal(keybook[q.id].explanation, q.explanation);
    assert.deepEqual(keybook[q.id].review, q.review);
    assert(q.explanation.length > 100 && q.review.references.length > 0);
    assert(
      isCorrect(publicQuestion, expected),
      `Published key rejected: ${q.number}`,
    );
    assert(!isCorrect(publicQuestion, undefined));
    // Mutate a complete response so every interaction type exercises rejection.
    const wrong = structuredClone(expected);
    let wrongAnswer;
    if (typeof wrong === 'string') wrongAnswer = '__not_an_option__';
    else if (Array.isArray(wrong))
      wrongAnswer = [...wrong, '__not_an_option__'];
    else {
      wrong[Object.keys(wrong)[0]] = '__not_an_option__';
      wrongAnswer = wrong;
    }
    assert(
      !isCorrect(publicQuestion, wrongAnswer),
      `Wrong response accepted: ${q.number}`,
    );
    assert.equal(q.review.status, 'accepted-iig');
    assert.equal(q.review.gradingBasis, 'iig-key');
    assert.deepEqual(q.review.validatedAnswer, expected);
    if (
      JSON.stringify(expectedAnswer(originals.get(q.id))) !==
      JSON.stringify(expected)
    )
      changed.push(q.number);
    counts[q.review.status] = (counts[q.review.status] ?? 0) + 1;
  }
}
assert.equal(current.length, 164);
assert.equal(new Set(current.map((q) => q.id)).size, manifest.total);
assert.equal(Object.keys(keybook).length, manifest.total);
assert.deepEqual(
  changed.sort((a, b) => a - b),
  [],
);
const q89 = current.find((q) => q.number === 89);
assert.equal(q89.interaction.rows[1].options.find((o) => o.correct).text, 'No');
const q126 = current.find((q) => q.number === 126);
assert.deepEqual(
  q126.interaction.rows.map((r) => r.options.find((o) => o.correct).text),
  ['No', 'Yes', 'No'],
);
console.log(
  JSON.stringify(
    {
      total: current.length,
      immutableWording: true,
      changedKeys: changed,
      counts,
      publishedDecryptAndGrading: 'passed',
    },
    null,
    2,
  ),
);
