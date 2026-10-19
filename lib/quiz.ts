import { computeAnswerSignatureSync } from '@/lib/crypto';

// Phân loại nội dung dùng chung với Worker — khai báo ở shared/domain.ts.
// Giữ lại chỗ xuất này để mọi màn hình vẫn nhập từ '@/lib/quiz' như trước.
export {
  difficultyLabel,
  isTopic,
  TOPICS,
  topicLabel,
  type Difficulty,
  type Topic,
} from '@/shared/domain';
import type { Difficulty, Topic } from '@/shared/domain';

export type Answer = string | string[] | Record<string, string>;

export type Option = { id: string; text: string; correct?: boolean };
export type AnswerReview = {
  status:
    | 'accepted-iig'
    | 'consistent'
    | 'qualified'
    | 'corrected'
    | 'ambiguous'
    | 'invalid';
  label: string;
  conclusion: string;
  validatedAnswer: Answer | null;
  officialAnswerText: string;
  references: Array<{ title: string; url: string }>;
};
export type Question = {
  id: string;
  number: number;
  source: string;
  type: string;
  prompt: string;
  images: string[];
  difficulty: Difficulty;
  topic: Topic;
  explanation?: string;
  interaction:
    | { kind: 'single'; options: Option[] }
    | { kind: 'multiple'; options: Option[] }
    | {
        kind: 'matrix';
        rows: Array<{ id: string; text: string; options: Option[] }>;
      }
    | {
        kind: 'matching';
        rows: Array<{ id: string; text: string; answerId?: string }>;
        options: Option[];
      }
    | { kind: 'sequence'; items: Array<Option & { order?: number }> };
  answerSignature?: string;
};

export type Manifest = {
  version: number;
  title: string;
  total: number;
  counts: Record<Difficulty, number>;
  topicCounts: Record<
    Topic,
    { total: number; counts: Record<Difficulty, number> }
  >;
  chunks: Array<{
    id: string;
    topic: Topic;
    difficulty: Difficulty;
    count: number;
    file: string;
  }>;
  isEncrypted?: boolean;
  encryptedAt?: string;
};

export type Attempt = {
  id: string;
  date: string;
  mode: 'practice' | 'exam';
  difficulty: Difficulty | 'all';
  topic?: Topic | 'all';
  total: number;
  correct: number;
  percent: number;
  duration: number;
  wrongIds: string[];
  partialIds?: string[];
  questionCredits?: Record<string, number>;
  questionIds?: string[];
  unansweredIds?: string[];
  hasPaper?: boolean;
  pointsPerQuestion?: number;
  estimatedScore?: number;
  strikes?: number;
};

export const EXAM_QUESTION_COUNT = 45;
export const EXAM_DURATION_SECONDS = 50 * 60; // 50 phút = 3000 giây
export const EXAM_MAX_SCORE = 1000;
export const EXAM_PASS_SCORE = 700;
export const EXAM_POINTS_PER_QUESTION = Number(
  (EXAM_MAX_SCORE / EXAM_QUESTION_COUNT).toFixed(2),
);

export type Progress = Record<
  string,
  { seen: number; correct: number; lastAt: string }
>;
export type Learned = Record<string, { at: string; correct: boolean }>;

export type ActiveSession = {
  version: 1;
  mode: 'practice' | 'exam';
  difficulty: Difficulty | 'all';
  topic?: Topic | 'all';
  count: number;
  chunkFiles: string[];
  questionIds: string[];
  answers: Record<string, Answer>;
  checked: Record<string, boolean>;
  index: number;
  elapsed: number;
  reviewFlags?: Record<string, boolean>;
  strikes?: number;
};

export const STORAGE = {
  attempts: 'certgenai:v1:attempts',
  progress: 'certgenai:v1:progress',
  learned: 'certgenai:v1:learned',
  theory: 'certgenai:v1:theory-progress',
  active: 'certgenai:v1:active-attempt',
};

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index--) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

export function isAnswered(question: Question, answer: Answer | undefined) {
  if (typeof answer === 'string') return Boolean(answer);
  if (Array.isArray(answer)) return answer.length > 0;
  if (!answer) return false;
  const needed =
    question.interaction.kind === 'sequence'
      ? question.interaction.items.length
      : 'rows' in question.interaction
        ? question.interaction.rows.length
        : 1;
  return (
    Object.keys(answer).length === needed &&
    Object.values(answer).every(Boolean)
  );
}

export function calculateQuestionCredit(
  question: Question,
  userAnswer: Answer | undefined,
  savedKey?: { correctAnswer?: Answer } | null,
): number {
  if (userAnswer === undefined || userAnswer === null) return 0;

  // Zero-Cleartext fast path: if the whole answer signature matches, it is 100% correct.
  if (question.answerSignature) {
    const computedSig = computeAnswerSignatureSync(question.id, userAnswer);
    if (computedSig === question.answerSignature) return 1;
  }

  const correctRef = savedKey?.correctAnswer;
  const interaction = question.interaction;

  if (interaction.kind === 'single') {
    if (typeof userAnswer !== 'string' || !userAnswer) return 0;
    if (correctRef && typeof correctRef === 'string') {
      return userAnswer === correctRef ? 1 : 0;
    }
    const correctOpt = interaction.options.find((item) => item.correct);
    return correctOpt && userAnswer === correctOpt.id ? 1 : 0;
  }

  if (interaction.kind === 'multiple') {
    if (!Array.isArray(userAnswer) || userAnswer.length === 0) return 0;
    let expectedIds: string[] = [];
    if (correctRef && Array.isArray(correctRef)) {
      expectedIds = correctRef;
    } else {
      expectedIds = interaction.options
        .filter((item) => item.correct)
        .map((item) => item.id);
    }
    if (expectedIds.length === 0) return 0;

    const uniqueSelected = Array.from(new Set(userAnswer));
    const expectedSet = new Set(expectedIds);
    let correctCount = 0;
    let wrongCount = 0;
    for (const id of uniqueSelected) {
      if (expectedSet.has(id)) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
    const score = Math.max(0, (correctCount - wrongCount) / expectedIds.length);
    return Math.round(score * 100) / 100;
  }

  if (interaction.kind === 'matrix') {
    const response = (
      typeof userAnswer === 'object' && !Array.isArray(userAnswer)
        ? userAnswer
        : {}
    ) as Record<string, string>;
    const rows = interaction.rows;
    if (!rows || rows.length === 0) return 0;

    let correctRows = 0;
    if (
      correctRef &&
      typeof correctRef === 'object' &&
      !Array.isArray(correctRef)
    ) {
      const refMap = correctRef as Record<string, string>;
      for (const row of rows) {
        if (response[row.id] && response[row.id] === refMap[row.id]) {
          correctRows++;
        }
      }
    } else {
      for (const row of rows) {
        const correctOpt = row.options.find((item) => item.correct);
        if (correctOpt && response[row.id] === correctOpt.id) {
          correctRows++;
        }
      }
    }
    return Math.round((correctRows / rows.length) * 100) / 100;
  }

  if (interaction.kind === 'matching') {
    const response = (
      typeof userAnswer === 'object' && !Array.isArray(userAnswer)
        ? userAnswer
        : {}
    ) as Record<string, string>;
    const rows = interaction.rows;
    if (!rows || rows.length === 0) return 0;

    let correctRows = 0;
    if (
      correctRef &&
      typeof correctRef === 'object' &&
      !Array.isArray(correctRef)
    ) {
      const refMap = correctRef as Record<string, string>;
      for (const row of rows) {
        if (response[row.id] && response[row.id] === refMap[row.id]) {
          correctRows++;
        }
      }
    } else {
      for (const row of rows) {
        if (row.answerId && response[row.id] === row.answerId) {
          correctRows++;
        }
      }
    }
    return Math.round((correctRows / rows.length) * 100) / 100;
  }

  if (interaction.kind === 'sequence') {
    const response = (
      typeof userAnswer === 'object' && !Array.isArray(userAnswer)
        ? userAnswer
        : {}
    ) as Record<string, string>;
    const items = interaction.items;
    if (!items || items.length === 0) return 0;

    let correctItems = 0;
    if (
      correctRef &&
      typeof correctRef === 'object' &&
      !Array.isArray(correctRef)
    ) {
      const refMap = correctRef as Record<string, string>;
      for (const item of items) {
        if (
          response[item.id] &&
          String(response[item.id]) === String(refMap[item.id])
        ) {
          correctItems++;
        }
      }
    } else {
      for (const item of items) {
        if (item.order != null && Number(response[item.id]) === item.order) {
          correctItems++;
        }
      }
    }
    return Math.round((correctItems / items.length) * 100) / 100;
  }

  return 0;
}

export function isCorrect(
  question: Question,
  answer: Answer | undefined,
  savedKey?: { correctAnswer?: Answer } | null,
): boolean {
  if (!isAnswered(question, answer)) return false;

  // Zero-Cleartext Cryptographic Verification
  if (question.answerSignature) {
    const computedSig = computeAnswerSignatureSync(question.id, answer);
    if (computedSig === question.answerSignature) return true;
    if (savedKey?.correctAnswer) {
      return calculateQuestionCredit(question, answer, savedKey) === 1;
    }
    return false;
  }

  return calculateQuestionCredit(question, answer, savedKey) === 1;
}

export function correctAnswerText(
  question: Question,
  decryptedSummary?: string,
): string {
  if (decryptedSummary) return decryptedSummary;
  const interaction = question.interaction;
  if (interaction.kind === 'single' || interaction.kind === 'multiple') {
    const correctOptions = interaction.options.filter((item) => item.correct);
    if (correctOptions.length)
      return correctOptions.map((item) => item.text).join('; ');
  }
  if (interaction.kind === 'matrix') {
    const rowsWithCorrect = interaction.rows.filter((r) =>
      r.options.some((o) => o.correct),
    );
    if (rowsWithCorrect.length) {
      return rowsWithCorrect
        .map(
          (row) =>
            `${row.text}: ${row.options.find((item) => item.correct)?.text}`,
        )
        .join(' • ');
    }
  }
  if (interaction.kind === 'matching') {
    const validRows = interaction.rows.filter((r) => r.answerId);
    if (validRows.length) {
      return validRows
        .map(
          (row) =>
            `${row.text}: ${interaction.options.find((item) => item.id === row.answerId)?.text}`,
        )
        .join(' • ');
    }
  }
  if (interaction.kind === 'sequence') {
    const ordered = interaction.items.filter((i) => i.order != null);
    if (ordered.length) {
      return ordered.map((item) => `${item.order}. ${item.text}`).join(' • ');
    }
  }
  return '';
}
