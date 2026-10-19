import { TOPICS, type Topic } from '@/shared/domain';

/**
 * Tiến độ học tập trên thiết bị, gộp cả ba loại nội dung có thể "đã học":
 * slide bài giảng, slide khái niệm và bài học chuyên sâu.
 *
 * Trước đây chỉ có tiến độ khái niệm (`certgenai:v1:theory-progress`). Bản
 * này giữ nguyên dữ liệu cũ qua `migrate()` nên người học không mất tiến độ.
 */

export const LEARNING_PROGRESS_KEY = 'certgenai:v1:learning-progress';
export const LEGACY_THEORY_KEY = 'certgenai:v1:theory-progress';

export type ConceptProgress = Partial<
  Record<Topic, { visited: number[]; last: number }>
>;

export type LearningProgress = {
  version: 2;
  lecture: { completed: string[]; last?: string };
  concept: ConceptProgress;
  lesson: { read: string[]; last?: string };
};

export function emptyLearningProgress(): LearningProgress {
  return {
    version: 2,
    lecture: { completed: [] },
    concept: {},
    lesson: { read: [] },
  };
}

function sanitizeConcept(value: unknown): ConceptProgress {
  if (typeof value !== 'object' || value === null) return {};
  const source = value as Record<string, unknown>;
  const result: ConceptProgress = {};
  for (const topic of TOPICS) {
    const entry = source[topic];
    if (typeof entry !== 'object' || entry === null) continue;
    const { visited, last } = entry as { visited?: unknown; last?: unknown };
    result[topic] = {
      visited: Array.isArray(visited)
        ? [...new Set(visited.filter((item) => typeof item === 'number'))].sort(
            (a, b) => a - b,
          )
        : [],
      last: typeof last === 'number' ? last : 0,
    };
  }
  return result;
}

function sanitizeIds(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((item): item is string => typeof item === 'string'))];
}

/** Nhận cả bản v2, bản tiến độ khái niệm cũ và dữ liệu rác. */
export function migrateLearningProgress(value: unknown): LearningProgress {
  if (typeof value !== 'object' || value === null) return emptyLearningProgress();
  const source = value as Record<string, unknown>;

  // Bản v2 có đủ ba nhánh; bản cũ là map topic → { visited, last }.
  const isV2 = 'concept' in source || 'lecture' in source || 'lesson' in source;
  if (!isV2) {
    return { ...emptyLearningProgress(), concept: sanitizeConcept(source) };
  }

  const lecture = (source.lecture ?? {}) as Record<string, unknown>;
  const lesson = (source.lesson ?? {}) as Record<string, unknown>;
  return {
    version: 2,
    lecture: {
      completed: sanitizeIds(lecture.completed),
      last: typeof lecture.last === 'string' ? lecture.last : undefined,
    },
    concept: sanitizeConcept(source.concept),
    lesson: {
      read: sanitizeIds(lesson.read),
      last: typeof lesson.last === 'string' ? lesson.last : undefined,
    },
  };
}

export function readLearningProgress(): LearningProgress {
  if (typeof window === 'undefined') return emptyLearningProgress();
  try {
    const stored = localStorage.getItem(LEARNING_PROGRESS_KEY);
    if (stored) return migrateLearningProgress(JSON.parse(stored));

    const legacy = localStorage.getItem(LEGACY_THEORY_KEY);
    if (legacy) return migrateLearningProgress(JSON.parse(legacy));
  } catch {
    // Dữ liệu hỏng thì bắt đầu lại từ đầu thay vì làm sập màn hình học.
  }
  return emptyLearningProgress();
}

export function writeLearningProgress(progress: LearningProgress) {
  try {
    localStorage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // Trình duyệt chặn lưu (chế độ riêng tư, hết dung lượng) — tiến độ chỉ
    // sống trong phiên này. Không phải lỗi đáng chặn việc học.
  }
}

/* ── Cập nhật từng loại nội dung ─────────────────────────────────── */

export function withLectureSlideSeen(
  progress: LearningProgress,
  slideId: string,
): LearningProgress {
  if (progress.lecture.last === slideId) return progress;
  return { ...progress, lecture: { ...progress.lecture, last: slideId } };
}

export function withLectureSlideDone(
  progress: LearningProgress,
  slideId: string,
  done = true,
): LearningProgress {
  const completed = new Set(progress.lecture.completed);
  if (done) completed.add(slideId);
  else completed.delete(slideId);
  return {
    ...progress,
    lecture: { ...progress.lecture, completed: [...completed], last: slideId },
  };
}

export function withConceptSlideSeen(
  progress: LearningProgress,
  topic: Topic,
  index: number,
): LearningProgress {
  const previous = progress.concept[topic] ?? { visited: [], last: 0 };
  if (previous.last === index && previous.visited.includes(index)) {
    return progress;
  }
  return {
    ...progress,
    concept: {
      ...progress.concept,
      [topic]: {
        last: index,
        visited: [...new Set([...previous.visited, index])].sort(
          (a, b) => a - b,
        ),
      },
    },
  };
}

export function withLessonRead(
  progress: LearningProgress,
  lessonId: string,
): LearningProgress {
  const read = new Set(progress.lesson.read);
  read.add(lessonId);
  return { ...progress, lesson: { read: [...read], last: lessonId } };
}

/* ── Số liệu dẫn xuất ────────────────────────────────────────────── */

export function conceptVisitedCount(progress: LearningProgress): number {
  return TOPICS.reduce(
    (sum, topic) => sum + (progress.concept[topic]?.visited.length ?? 0),
    0,
  );
}

export function percent(done: number, total: number): number {
  if (total <= 0) return 0;
  return Math.min(100, Math.round((done / total) * 100));
}
