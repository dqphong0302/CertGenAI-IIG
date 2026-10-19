import type { Topic } from '@/shared/domain';

/**
 * Vị trí hiện tại trong khóa học. Một union duy nhất cho cả bảy loại nội dung
 * để mục lục, thanh tiến độ và phần hiển thị luôn nói về cùng một chỗ.
 */
export type LearningLocation =
  | { kind: 'lecture'; slideId: string }
  | { kind: 'concept'; topic: Topic; index: number }
  | { kind: 'lesson'; lessonId: string }
  | { kind: 'cram' }
  | { kind: 'traps' }
  | { kind: 'bank' }
  | { kind: 'references' };

export type LearningSectionId = LearningLocation['kind'];

export const SECTION_ORDER: LearningSectionId[] = [
  'lecture',
  'concept',
  'lesson',
  'cram',
  'traps',
  'bank',
  'references',
];

export const sectionLabel: Record<LearningSectionId, string> = {
  lecture: 'Bài giảng có tiếng',
  concept: 'Khái niệm cốt lõi',
  lesson: 'Bài học chuyên sâu',
  cram: 'Ôn nhanh trước thi',
  traps: 'Câu dễ nhầm',
  bank: 'Ngân hàng câu hỏi',
  references: 'Tài liệu tham khảo',
};

export const sectionHint: Record<LearningSectionId, string> = {
  lecture: '85 slide, nghe hoặc đọc',
  concept: '4 nhóm, có câu tự kiểm tra',
  lesson: '19 bài theo 4 domain',
  cram: 'Một trang ghi nhớ',
  traps: 'Khóa IIG khác tài liệu gốc',
  bank: 'Tra cả 164 câu kèm giải thích',
  references: 'Giáo trình và bài tập gốc',
};

/** So sánh vị trí để biết mục nào trong mục lục đang mở. */
export function sameLocation(a: LearningLocation, b: LearningLocation) {
  if (a.kind !== b.kind) return false;
  if (a.kind === 'lecture' && b.kind === 'lecture') {
    return a.slideId === b.slideId;
  }
  if (a.kind === 'concept' && b.kind === 'concept') {
    return a.topic === b.topic && a.index === b.index;
  }
  if (a.kind === 'lesson' && b.kind === 'lesson') {
    return a.lessonId === b.lessonId;
  }
  return true;
}

/**
 * Màu nhận diện bốn phần/domain. Dùng chung một bảng để mục lục, nhãn phần và
 * viền slide không lệch màu nhau.
 */
export const partAccent = [
  {
    text: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500',
    soft: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
  },
  {
    text: 'text-sky-600 dark:text-sky-400',
    bg: 'bg-sky-500',
    soft: 'bg-sky-500/10',
    border: 'border-sky-500/30',
  },
  {
    text: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-500',
    soft: 'bg-amber-500/10',
    border: 'border-amber-500/30',
  },
  {
    text: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-500',
    soft: 'bg-rose-500/10',
    border: 'border-rose-500/30',
  },
] as const;

export function accentOf(partNumber: number) {
  return partAccent[(partNumber - 1) % partAccent.length];
}

export const topicOrder: Topic[] = [
  'methods',
  'prompting',
  'verification',
  'responsible',
];
