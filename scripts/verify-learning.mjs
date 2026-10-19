import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

// Exercise the same pure functions used by history/review, without browser mocks.
const js = ts.transpileModule(readFileSync('lib/learning-store.ts', 'utf8'), {
  compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
  },
}).outputText;
const { mistakeIds, mergeAttempts, answerText, isSavedPaper, isAttempt } =
  await import(
    `data:text/javascript;base64,${Buffer.from(js).toString('base64')}`
  );
const attempt = (id, day, ids, wrong) => ({
  id,
  date: `2026-10-${day}T00:00:00Z`,
  mode: 'practice',
  difficulty: 'all',
  total: ids.length,
  correct: ids.length - wrong.length,
  percent: 0,
  duration: 10,
  questionIds: ids,
  wrongIds: wrong,
});
const first = attempt('first', '15', ['a', 'b', 'c'], ['a', 'b']);
const second = attempt('second', '16', ['a', 'c'], []);
assert.deepEqual(
  mistakeIds([second, first]),
  ['b'],
  'A correct later attempt clears a previous mistake, without clearing unseen questions',
);
assert.deepEqual(
  mistakeIds([first], { a: { at: '2026-10-16T00:00:00Z', correct: true } }),
  ['b'],
);
assert.deepEqual(
  mistakeIds([second, first], {
    a: { at: '2026-10-17T00:00:00Z', correct: false },
  }).sort(),
  ['a', 'b'],
);
assert.deepEqual(
  mistakeIds([{ ...first, questionIds: undefined }]),
  ['a', 'b'],
  'Legacy summary-only history remains supported',
);
const q = {
  id: 'a',
  number: 1,
  topic: 'methods',
  prompt: 'Test',
  images: [],
  interaction: {
    kind: 'single',
    options: [
      { id: 'yes', text: 'Yes' },
      { id: 'no', text: 'No' },
    ],
  },
};
const paper = {
  version: 1,
  attempt: attempt('paper', '17', ['a'], []),
  questions: [q],
  answers: { a: 'yes' },
  keys: {
    a: { correctAnswer: 'yes', summaryText: 'Yes', explanation: 'Explanation' },
  },
};
assert.equal(isSavedPaper(paper), true);
assert.equal(
  isSavedPaper(JSON.parse(JSON.stringify(paper))),
  true,
  'Full paper round-trips through JSON backups',
);
assert.equal(
  isSavedPaper({
    ...paper,
    questions: [{ ...q, interaction: { kind: 'unknown' } }],
  }),
  false,
);
assert.equal(isSavedPaper({ ...paper, keys: {} }), false);
assert.equal(isSavedPaper({ ...paper, answers: { a: null } }), false);
assert.equal(isAttempt({ ...first, total: -1 }), false);
assert.equal(isAttempt({ ...first, date: 'bad date' }), false);
assert.equal(
  isAttempt({
    ...first,
    total: 45,
    correct: 41.25,
    partialIds: ['a'],
    questionCredits: { a: 0.75 },
  }),
  true,
  'Partial credit attempts with fractional correct pass isAttempt validation',
);
assert.equal(mergeAttempts([paper.attempt, first], [paper]).length, 2);
assert.equal(mergeAttempts([first], [paper])[0].id, 'paper');
assert.equal(answerText(q, 'yes'), 'A. Yes');
assert.equal(answerText(q), 'Chưa trả lời');
assert.equal(
  answerText({ ...q, interaction: { ...q.interaction, kind: 'multiple' } }, [
    'yes',
    'no',
  ]),
  'A. Yes; B. No',
);
assert.equal(
  answerText(
    {
      ...q,
      interaction: {
        kind: 'matrix',
        rows: [{ id: 'r', text: 'Row', options: q.interaction.options }],
      },
    },
    { r: 'no' },
  ),
  'Row → No',
);
assert.equal(
  answerText(
    {
      ...q,
      interaction: {
        kind: 'matching',
        rows: [{ id: 'r', text: 'Row' }],
        options: q.interaction.options,
      },
    },
    { r: 'yes' },
  ),
  'Row → Yes',
);
assert.equal(
  answerText(
    { ...q, interaction: { kind: 'sequence', items: q.interaction.options } },
    { yes: '2', no: '1' },
  ),
  '2. Yes\n1. No',
);
if (process.argv[2]) {
  const backup = JSON.parse(readFileSync(process.argv[2], 'utf8'));
  assert.equal(backup.version, 2);
  assert.ok(backup.papers.length > 0);
  assert.ok(
    backup.papers.every(isSavedPaper),
    'Actual browser-exported papers pass import validation',
  );
  assert.ok(backup.attempts.every(isAttempt));
}
console.log(
  'Learning history, mistake lifecycle, answer rendering and backup validation: passed',
);
