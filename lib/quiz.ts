export type Difficulty = "easy" | "medium" | "hard";
export type Topic = "methods" | "prompting" | "verification" | "responsible";
export type Answer = string | string[] | Record<string, string>;

export type Option = { id: string; text: string; correct?: boolean };
export type Question = {
  id: string;
  number: number;
  source: string;
  type: string;
  prompt: string;
  images: string[];
  difficulty: Difficulty;
  topic: Topic;
  explanation: string;
  interaction:
    | { kind: "single"; options: Option[] }
    | { kind: "multiple"; options: Option[] }
    | { kind: "matrix"; rows: Array<{ id: string; text: string; options: Option[] }> }
    | { kind: "matching"; rows: Array<{ id: string; text: string; answerId: string }>; options: Option[] }
    | { kind: "sequence"; items: Array<Option & { order: number }> };
};

export type Manifest = {
  version: number;
  title: string;
  total: number;
  counts: Record<Difficulty, number>;
  topicCounts: Record<Topic, { total: number; counts: Record<Difficulty, number> }>;
  chunks: Array<{ id: string; topic: Topic; difficulty: Difficulty; count: number; file: string }>;
};

export type Attempt = {
  id: string;
  date: string;
  mode: "practice" | "exam";
  difficulty: Difficulty | "all";
  topic?: Topic | "all";
  total: number;
  correct: number;
  percent: number;
  duration: number;
  wrongIds: string[];
  pointsPerQuestion?: number;
  estimatedScore?: number;
};

export const EXAM_QUESTION_COUNT = 50;
export const EXAM_POINTS_PER_QUESTION = 20;
export const EXAM_MAX_SCORE = 1000;
export const EXAM_PASS_SCORE = 700;

export type Progress = Record<string, { seen: number; correct: number; lastAt: string }>;
export type Learned = Record<string, { at: string; correct: boolean }>;

export type ActiveSession = {
  version: 1;
  mode: "practice" | "exam";
  difficulty: Difficulty | "all";
  topic?: Topic | "all";
  count: number;
  chunkFiles: string[];
  questionIds: string[];
  answers: Record<string, Answer>;
  checked: Record<string, boolean>;
  index: number;
  elapsed: number;
};

export const STORAGE = {
  attempts: "certgenai:v1:attempts",
  progress: "certgenai:v1:progress",
  learned: "certgenai:v1:learned",
  theory: "certgenai:v1:theory-progress",
  active: "certgenai:v1:active-attempt",
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
  if (typeof answer === "string") return Boolean(answer);
  if (Array.isArray(answer)) return answer.length > 0;
  if (!answer) return false;
  const needed = question.interaction.kind === "sequence" ? question.interaction.items.length : "rows" in question.interaction ? question.interaction.rows.length : 1;
  return Object.keys(answer).length === needed && Object.values(answer).every(Boolean);
}

export function isCorrect(question: Question, answer: Answer | undefined) {
  if (!isAnswered(question, answer)) return false;
  const interaction = question.interaction;
  if (interaction.kind === "single") return answer === interaction.options.find((item) => item.correct)?.id;
  if (interaction.kind === "multiple") {
    const expected = interaction.options.filter((item) => item.correct).map((item) => item.id).sort();
    return JSON.stringify([...(answer as string[])].sort()) === JSON.stringify(expected);
  }
  if (interaction.kind === "matrix") {
    const response = answer as Record<string, string>;
    return interaction.rows.every((row) => response[row.id] === row.options.find((item) => item.correct)?.id);
  }
  if (interaction.kind === "matching") {
    const response = answer as Record<string, string>;
    return interaction.rows.every((row) => response[row.id] === row.answerId);
  }
  if (interaction.kind === "sequence") {
    const response = answer as Record<string, string>;
    return interaction.items.every((item) => Number(response[item.id]) === item.order);
  }
  return false;
}

export function correctAnswerText(question: Question) {
  const interaction = question.interaction;
  if (interaction.kind === "single" || interaction.kind === "multiple") return interaction.options.filter((item) => item.correct).map((item) => item.text).join("; ");
  if (interaction.kind === "matrix") return interaction.rows.map((row) => `${row.text}: ${row.options.find((item) => item.correct)?.text}`).join(" • ");
  if (interaction.kind === "matching") return interaction.rows.map((row) => `${row.text}: ${interaction.options.find((item) => item.id === row.answerId)?.text}`).join(" • ");
  return interaction.kind === "sequence" ? interaction.items.map((item) => `${item.order}. ${item.text}`).join(" • ") : "";
}

export const difficultyLabel: Record<Difficulty | "all", string> = {
  all: "Tổng hợp",
  easy: "Dễ",
  medium: "Trung bình",
  hard: "Khó",
};

export const topicLabel: Record<Topic | "all", string> = {
  all: "Tất cả nội dung",
  methods: "Phương pháp AI tạo sinh",
  prompting: "Kỹ thuật tạo câu lệnh",
  verification: "Tinh chỉnh và xác minh",
  responsible: "Đạo đức, xã hội và pháp lý",
};
