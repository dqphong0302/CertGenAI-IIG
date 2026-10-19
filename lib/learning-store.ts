import type {
  Answer,
  AnswerReview,
  Attempt,
  Learned,
  Question,
} from '@/lib/quiz';

export type SavedKey = {
  correctAnswer: Answer;
  summaryText: string;
  explanation: string;
  review?: AnswerReview;
};
export type SavedPaper = {
  version: 1;
  attempt: Attempt;
  questions: Question[];
  answers: Record<string, Answer>;
  keys: Record<string, SavedKey>;
};

const DATABASE = 'certgenai-learning';
const STORE = 'papers';
function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE, 1);
    request.onupgradeneeded = () =>
      request.result.createObjectStore(STORE, { keyPath: 'attempt.id' });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    request.onblocked = () =>
      reject(
        new Error(
          'Kho bài làm đang được dùng ở tab khác. Hãy đóng tab cũ rồi thử lại.',
        ),
      );
  });
}
export async function readPapers(): Promise<SavedPaper[]> {
  const db = await openDatabase();
  try {
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly');
      const request = tx.objectStore(STORE).getAll();
      tx.oncomplete = () => resolve(request.result as SavedPaper[]);
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  } finally {
    db.close();
  }
}
// Keep complete papers in IndexedDB: repeating question explanations quickly exceeds localStorage's quota.
export async function writePapers(
  papers: SavedPaper[],
  replace = false,
): Promise<void> {
  const db = await openDatabase();
  try {
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      const store = tx.objectStore(STORE);
      if (replace) store.clear();
      for (const paper of papers) store.put(paper);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  } finally {
    db.close();
  }
}
export function mergeAttempts(
  legacy: Attempt[],
  papers: SavedPaper[],
): Attempt[] {
  const byId = new Map(legacy.map((a) => [a.id, a]));
  for (const p of papers) byId.set(p.attempt.id, p.attempt);
  return [...byId.values()].sort((a, b) => b.date.localeCompare(a.date));
}
// Latest completed response wins. Old summary-only attempts can still add known wrong IDs.
export function mistakeIds(
  attempts: Attempt[],
  learned: Learned = {},
): string[] {
  const latest = new Map<string, { at: string; wrong: boolean }>();
  for (const attempt of [...attempts].sort((a, b) =>
    a.date.localeCompare(b.date),
  )) {
    const wrong = new Set(attempt.wrongIds);
    for (const id of attempt.questionIds ?? attempt.wrongIds)
      latest.set(id, { at: attempt.date, wrong: wrong.has(id) });
  }
  for (const [id, entry] of Object.entries(learned)) {
    if (!latest.has(id) || entry.at > latest.get(id)!.at)
      latest.set(id, { at: entry.at, wrong: !entry.correct });
  }
  return [...latest].filter(([, entry]) => entry.wrong).map(([id]) => id);
}

export function answerText(question: Question, answer?: Answer): string {
  if (answer === undefined) return 'Chưa trả lời';
  const i = question.interaction;
  if (i.kind === 'single' || i.kind === 'multiple') {
    const ids =
      typeof answer === 'string'
        ? [answer]
        : Array.isArray(answer)
          ? answer
          : [];
    return (
      i.options
        .filter((o) => ids.includes(o.id))
        .map(
          (o) => `${String.fromCharCode(65 + i.options.indexOf(o))}. ${o.text}`,
        )
        .join('; ') || 'Chưa chọn đáp án'
    );
  }
  const response =
    typeof answer === 'object' && !Array.isArray(answer) ? answer : {};
  if (i.kind === 'sequence')
    return [...i.items]
      .map((o) => `${response[o.id] || '?'}. ${o.text}`)
      .join('\n');
  return i.rows
    .map((r) => {
      const options =
        'options' in r ? r.options : i.kind === 'matching' ? i.options : [];
      return `${r.text} → ${options.find((o) => o.id === response[r.id])?.text || 'Chưa chọn'}`;
    })
    .join('\n');
}

export function isSavedPaper(value: unknown): value is SavedPaper {
  if (!value || typeof value !== 'object') return false;
  const p = value as SavedPaper;
  if (
    p.version !== 1 ||
    !isAttempt(p.attempt) ||
    !Array.isArray(p.questions) ||
    !record(p.answers) ||
    !record(p.keys)
  )
    return false;
  if (Object.values(p.answers).some((a) => !isAnswer(a))) return false;
  const option = (o: unknown) =>
    record(o) && typeof o.id === 'string' && typeof o.text === 'string';
  return (
    p.questions.length === p.attempt.total &&
    new Set(p.questions.map((q) => q?.id)).size === p.questions.length &&
    p.questions.every((q) => {
      if (
        !q ||
        typeof q.id !== 'string' ||
        typeof q.prompt !== 'string' ||
        !Number.isInteger(q.number) ||
        !['methods', 'prompting', 'verification', 'responsible'].includes(
          q.topic,
        ) ||
        !Array.isArray(q.images) ||
        !q.images.every((s) => typeof s === 'string')
      )
        return false;
      const i = q.interaction;
      if (!record(i)) return false;
      const rows = (v: unknown) => Array.isArray(v) && v.every(option);
      if (i.kind === 'single' || i.kind === 'multiple') {
        if (!rows(i.options)) return false;
      } else if (i.kind === 'sequence') {
        if (!rows(i.items)) return false;
      } else if (i.kind === 'matching') {
        if (!rows(i.rows) || !rows(i.options)) return false;
      } else if (i.kind === 'matrix') {
        if (!rows(i.rows) || !i.rows.every((r) => rows(r.options)))
          return false;
      } else return false;
      const k = p.keys[q.id];
      return (
        record(k) &&
        isAnswer(k.correctAnswer) &&
        typeof k.summaryText === 'string' &&
        typeof k.explanation === 'string'
      );
    })
  );
}

function record(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
function isAnswer(value: unknown): value is Answer {
  return (
    typeof value === 'string' ||
    (Array.isArray(value)
      ? value.every((v) => typeof v === 'string')
      : record(value) &&
        Object.values(value).every((v) => typeof v === 'string'))
  );
}
export function isAttempt(value: unknown): value is Attempt {
  if (!record(value)) return false;
  if (
    typeof value.mode !== 'string' ||
    typeof value.total !== 'number' ||
    typeof value.correct !== 'number' ||
    typeof value.percent !== 'number' ||
    typeof value.duration !== 'number'
  )
    return false;
  const ids = (v: unknown) =>
    Array.isArray(v) && v.every((id) => typeof id === 'string');
  return (
    typeof value.id === 'string' &&
    typeof value.date === 'string' &&
    Number.isFinite(Date.parse(value.date)) &&
    ['practice', 'exam'].includes(value.mode) &&
    Number.isInteger(value.total) &&
    value.total > 0 &&
    Number.isFinite(value.correct) &&
    value.correct >= 0 &&
    value.correct <= value.total &&
    Number.isFinite(value.percent) &&
    Number.isFinite(value.duration) &&
    ids(value.wrongIds) &&
    (value.partialIds === undefined || ids(value.partialIds)) &&
    (value.questionCredits === undefined || record(value.questionCredits)) &&
    (value.questionIds === undefined || ids(value.questionIds)) &&
    (value.unansweredIds === undefined || ids(value.unansweredIds))
  );
}
