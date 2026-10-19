// Hợp đồng dữ liệu của `/api/learning/*`.
// Worker đọc các kiểu này từ server/content/*, SPA đọc lại cùng file để
// mọi thay đổi hình dạng dữ liệu đều báo lỗi ở cả hai phía khi typecheck.

import type { Topic } from '@/shared/domain';

/* ── Bài giảng 85 slide (có audio) ───────────────────────────────── */

export interface LectureFrameworkItem {
  label: string;
  desc: string;
}

export interface LectureFrameworkBox {
  title: string;
  items: LectureFrameworkItem[];
}

export interface LectureSlide {
  id: string;
  partNumber: number;
  partTitle: string;
  slideNumber: number;
  title: string;
  subtitle: string;
  keyPoints: string[];
  frameworkBox: LectureFrameworkBox;
  examTrap: string;
  lectureScript: string;
  audioSrc: string;
  durationSeconds: number;
  relatedQuestions: number[];
}

export interface LecturePart {
  number: number;
  title: string;
  shortName: string;
  range: string;
  slidesCount: number;
  color: string;
}

/** Mục một slide trong mục lục — đủ để vẽ sidebar, không kéo cả lời giảng. */
export interface LectureOutlineEntry {
  id: string;
  slideNumber: number;
  partNumber: number;
  title: string;
  subtitle: string;
  durationSeconds: number;
  relatedQuestionCount: number;
}

export interface LectureOutline {
  parts: LecturePart[];
  slides: LectureOutlineEntry[];
  totalSlides: number;
  totalDurationSeconds: number;
}

/* ── Mục lục toàn khóa ───────────────────────────────────────────── */

export interface ConceptOutlineEntry {
  topic: Topic;
  description: string;
  slides: Array<{ index: number; title: string; label: string }>;
}

export interface LessonOutlineEntry {
  id: string;
  number: number;
  domainNumber: 1 | 2 | 3 | 4;
  title: string;
  duration: string;
  examWeight: 'Cao' | 'Rất cao' | 'Trung bình';
}

/**
 * Một payload nhỏ dựng được toàn bộ mục lục bên trái. Nội dung chi tiết của
 * từng slide/bài học lấy riêng khi người học mở đến, nhờ vậy mở phần học
 * không phải tải gần 10.000 dòng dữ liệu.
 */
export interface CourseOutline {
  lecture: LectureOutline;
  concept: {
    updated: string;
    total: number;
    topics: ConceptOutlineEntry[];
  };
  lessons: {
    domains: CurriculumDomain[];
    entries: LessonOutlineEntry[];
  };
  counts: {
    traps: number;
    references: number;
    cramSections: number;
  };
}

/* ── Khái niệm (4 nhóm nội dung) ─────────────────────────────────── */

export type TheorySource = { title: string; url: string; note: string };

export type TheorySlide = {
  title: string;
  label: string;
  summary: string;
  bullets: string[];
  sources: TheorySource[];
  examNote?: string;
  example?: { title: string; content: string };
  terms?: Array<{ term: string; definition: string }>;
  pitfalls?: string[];
  check?: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  };
  takeaway: string;
};

export type TheoryModule = { description: string; slides: TheorySlide[] };

export interface TheoryBundle {
  updated: string;
  total: number;
  modules: Record<Topic, TheoryModule>;
}

/* ── Bài học chuyên sâu (19 bài theo 4 domain) ───────────────────── */

export interface PedagogicalMatrixItem {
  criterion: string;
  weight: string;
  note: string;
}

export interface PedagogicalFramework {
  name: string;
  description: string;
  steps?: string[];
  matrix?: PedagogicalMatrixItem[];
}

export interface KeyTerm {
  term: string;
  meaning: string;
}

export interface CurriculumLesson {
  id: string;
  number: number;
  domainNumber: 1 | 2 | 3 | 4;
  domainName: string;
  title: string;
  duration: string;
  examWeight: 'Cao' | 'Rất cao' | 'Trung bình';
  pearsonObjectives: string[];
  summary: string;
  keyKnowledge: string[];
  commonPitfalls: string[];
  distractorTraps: string[];
  examTips: string[];
  keyTerms: KeyTerm[];
  prompts: {
    basic: string[];
    advanced: string[];
    avoid: string[];
  };
  pedagogicalFramework?: PedagogicalFramework;
  relatedQuestionNumbers: number[];
}

export interface CurriculumDomain {
  number: number;
  name: string;
  shortName: string;
  color: string;
  lessonRange: string;
  description: string;
}

export interface CurriculumBundle {
  domains: CurriculumDomain[];
  lessons: CurriculumLesson[];
}

/* ── Câu dễ nhầm ─────────────────────────────────────────────────── */

export interface TrapQuestion {
  number: number;
  id: string;
  title: string;
  prompt: string;
  optionsSummary: string;
  iigAnswer: string;
  realAnswer: string;
  category: 'corrected' | 'logic_error' | 'translation_error' | 'syllabus_bias';
  categoryLabel: string;
  badgeVariant: 'destructive' | 'warning' | 'info' | 'purple';
  explanation: string;
  examTip: string;
  sourceRef: string;
}

export interface TrapBundle {
  questionIds: string[];
  questions: TrapQuestion[];
}

/* ── Tài liệu tham khảo ──────────────────────────────────────────── */

export type ReferenceMaterial = {
  id: string;
  title: string;
  description: string;
  filename: string;
  url: string;
  format: 'PDF' | 'DOCX';
  pages?: number;
  topics: Topic[];
  reading: Array<{ title: string; page?: number; note: string }>;
};

/* ── Ôn nhanh (bản ghi nhớ một trang) ────────────────────────────── */

export interface CramSection {
  id: string;
  title: string;
  points: string[];
  source: string;
  href: string;
}

export interface CramSheet {
  updated: string;
  sections: CramSection[];
  extraReferences: Array<{ label: string; url: string }>;
}

/* ── Tìm kiếm toàn khóa ──────────────────────────────────────────── */

export type SearchKind = 'lecture' | 'concept' | 'lesson' | 'trap';

export interface SearchHit {
  kind: SearchKind;
  /** Khóa điều hướng: slide id, `${topic}:${index}`, lesson id hoặc question id. */
  ref: string;
  title: string;
  snippet: string;
  /** Nhãn ngữ cảnh hiển thị cạnh tiêu đề (tên phần, tên domain…). */
  context: string;
}

export interface SearchResponse {
  query: string;
  total: number;
  hits: SearchHit[];
}

/* ── Tổng quan khóa học (số liệu cho trang chủ học tập) ──────────── */

export interface LearningSummary {
  lectureSlides: number;
  lectureDurationSeconds: number;
  conceptSlides: number;
  lessons: number;
  traps: number;
  references: number;
  theoryUpdated: string;
}
