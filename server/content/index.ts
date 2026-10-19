/**
 * Lớp truy xuất nội dung học tập.
 *
 * Các tệp cạnh file này là nguồn chuẩn dạng TypeScript (85 slide bài giảng,
 * 4 nhóm khái niệm, 19 bài học, 16 câu dễ nhầm, 4 tài liệu tham khảo). Route
 * chỉ gọi hàm ở đây, không nhập trực tiếp từ các tệp dữ liệu — nhờ vậy phần
 * dẫn xuất (mục lục, số liệu tổng quan, chỉ mục tìm kiếm) được tính một lần
 * cho mỗi isolate và route giữ nguyên hình dạng phản hồi khi dữ liệu đổi.
 */

import { TOPICS, type Topic } from '@/shared/domain';
import { foldText } from '@/shared/text';
import type {
  CourseOutline,
  CramSheet,
  CurriculumBundle,
  CurriculumLesson,
  LearningSummary,
  LectureOutline,
  LectureSlide,
  ReferenceMaterial,
  SearchHit,
  TheoryBundle,
  TheoryModule,
  TrapBundle,
} from '@/shared/learning';
import { LECTURE_PARTS, LECTURE_SLIDES } from '@/server/content/lecture';
import {
  THEORY_MODULES,
  THEORY_TOTAL,
  THEORY_UPDATED,
} from '@/server/content/theory';
import {
  CURRICULUM_LESSONS,
  DOMAINS_INFO,
} from '@/server/content/curriculum';
import { TRAP_QUESTION_IDS, TRAP_QUESTIONS } from '@/server/content/traps';
import { REFERENCE_MATERIALS } from '@/server/content/references';
import {
  CRAM_EXTRA_REFERENCES,
  CRAM_SECTIONS,
} from '@/server/content/cram';

/** Nhớ kết quả cho cả isolate: nội dung tĩnh, tính lại mỗi request là vô ích. */
function once<T>(compute: () => T): () => T {
  let cached: { value: T } | undefined;
  return () => {
    cached ??= { value: compute() };
    return cached.value;
  };
}

/* ── Bài giảng ───────────────────────────────────────────────────── */

export const lectureOutline = once<LectureOutline>(() => ({
  parts: LECTURE_PARTS,
  slides: LECTURE_SLIDES.map((slide) => ({
    id: slide.id,
    slideNumber: slide.slideNumber,
    partNumber: slide.partNumber,
    title: slide.title,
    subtitle: slide.subtitle,
    durationSeconds: slide.durationSeconds,
    relatedQuestionCount: slide.relatedQuestions.length,
  })),
  totalSlides: LECTURE_SLIDES.length,
  totalDurationSeconds: Math.round(
    LECTURE_SLIDES.reduce((sum, slide) => sum + slide.durationSeconds, 0),
  ),
}));

/** Mục lục toàn khóa: đủ dựng thanh điều hướng, không mang nội dung chi tiết. */
export const courseOutline = once<CourseOutline>(() => ({
  lecture: lectureOutline(),
  concept: {
    updated: THEORY_UPDATED,
    total: THEORY_TOTAL,
    topics: TOPICS.map((topic) => ({
      topic,
      description: THEORY_MODULES[topic].description,
      slides: THEORY_MODULES[topic].slides.map((slide, index) => ({
        index,
        title: slide.title,
        label: slide.label,
      })),
    })),
  },
  lessons: {
    domains: DOMAINS_INFO,
    entries: CURRICULUM_LESSONS.map((lesson) => ({
      id: lesson.id,
      number: lesson.number,
      domainNumber: lesson.domainNumber,
      title: lesson.title,
      duration: lesson.duration,
      examWeight: lesson.examWeight,
    })),
  },
  counts: {
    traps: TRAP_QUESTIONS.length,
    references: REFERENCE_MATERIALS.length,
    cramSections: CRAM_SECTIONS.length,
  },
}));

export function lectureSlides(partNumber?: number): LectureSlide[] {
  if (partNumber === undefined) return LECTURE_SLIDES;
  return LECTURE_SLIDES.filter((slide) => slide.partNumber === partNumber);
}

export function lectureSlide(id: string): LectureSlide | undefined {
  return LECTURE_SLIDES.find((slide) => slide.id === id);
}

/* ── Khái niệm ───────────────────────────────────────────────────── */

export function theoryBundle(): TheoryBundle {
  return {
    updated: THEORY_UPDATED,
    total: THEORY_TOTAL,
    modules: THEORY_MODULES,
  };
}

export function theoryModule(topic: Topic): TheoryModule {
  return THEORY_MODULES[topic];
}

/* ── Bài học chuyên sâu ──────────────────────────────────────────── */

export function curriculumBundle(): CurriculumBundle {
  return { domains: DOMAINS_INFO, lessons: CURRICULUM_LESSONS };
}

export function curriculumLesson(id: string): CurriculumLesson | undefined {
  return CURRICULUM_LESSONS.find((lesson) => lesson.id === id);
}

/* ── Câu dễ nhầm · tài liệu ──────────────────────────────────────── */

export function trapBundle(): TrapBundle {
  return { questionIds: TRAP_QUESTION_IDS, questions: TRAP_QUESTIONS };
}

export function referenceMaterials(): ReferenceMaterial[] {
  return REFERENCE_MATERIALS;
}

export function cramSheet(): CramSheet {
  return {
    updated: THEORY_UPDATED,
    sections: CRAM_SECTIONS,
    extraReferences: CRAM_EXTRA_REFERENCES,
  };
}

/* ── Tổng quan ───────────────────────────────────────────────────── */

export const learningSummary = once<LearningSummary>(() => ({
  lectureSlides: LECTURE_SLIDES.length,
  lectureDurationSeconds: lectureOutline().totalDurationSeconds,
  conceptSlides: THEORY_TOTAL,
  lessons: CURRICULUM_LESSONS.length,
  traps: TRAP_QUESTIONS.length,
  references: REFERENCE_MATERIALS.length,
  theoryUpdated: THEORY_UPDATED,
}));

/* ── Tìm kiếm toàn khóa ──────────────────────────────────────────── */

type IndexedDocument = SearchHit & { haystack: string };

const searchIndex = once<IndexedDocument[]>(() => {
  const documents: IndexedDocument[] = [];

  for (const slide of LECTURE_SLIDES) {
    const body = [
      slide.subtitle,
      ...slide.keyPoints,
      slide.frameworkBox.title,
      ...slide.frameworkBox.items.flatMap((item) => [item.label, item.desc]),
      slide.examTrap,
      slide.lectureScript,
    ].join(' ');
    documents.push({
      kind: 'lecture',
      ref: slide.id,
      title: `Slide ${slide.slideNumber}: ${slide.title}`,
      snippet: slide.subtitle,
      context: `Phần ${slide.partNumber}`,
      haystack: foldText(`${slide.title} ${body}`),
    });
  }

  for (const topic of TOPICS) {
    THEORY_MODULES[topic].slides.forEach((slide, index) => {
      const body = [
        slide.summary,
        ...slide.bullets,
        slide.takeaway,
        ...(slide.terms?.flatMap((term) => [term.term, term.definition]) ?? []),
        ...(slide.pitfalls ?? []),
        slide.example?.content ?? '',
        slide.examNote ?? '',
      ].join(' ');
      documents.push({
        kind: 'concept',
        ref: `${topic}:${index}`,
        title: slide.title,
        snippet: slide.summary,
        context: slide.label,
        haystack: foldText(`${slide.title} ${body}`),
      });
    });
  }

  for (const lesson of CURRICULUM_LESSONS) {
    const body = [
      lesson.summary,
      ...lesson.keyKnowledge,
      ...lesson.examTips,
      ...lesson.commonPitfalls,
      ...lesson.distractorTraps,
      ...lesson.keyTerms.flatMap((term) => [term.term, term.meaning]),
    ].join(' ');
    documents.push({
      kind: 'lesson',
      ref: lesson.id,
      title: `Bài ${lesson.number}: ${lesson.title}`,
      snippet: lesson.summary,
      context: lesson.domainName,
      haystack: foldText(`${lesson.title} ${body}`),
    });
  }

  for (const trap of TRAP_QUESTIONS) {
    documents.push({
      kind: 'trap',
      ref: trap.id,
      title: `Câu ${trap.number}: ${trap.title}`,
      snippet: trap.examTip,
      context: trap.categoryLabel,
      haystack: foldText(
        `${trap.title} ${trap.prompt} ${trap.explanation} ${trap.examTip}`,
      ),
    });
  }

  return documents;
});

/** Khớp chuỗi con không dấu trên ~200 tài liệu — rẻ hơn mọi chỉ mục cầu kỳ. */
export function searchLearning(
  query: string,
  limit: number,
): { total: number; hits: SearchHit[] } {
  const needle = foldText(query.trim());
  if (needle.length < 2) return { total: 0, hits: [] };

  const matched = searchIndex().filter((document) =>
    document.haystack.includes(needle),
  );

  return {
    total: matched.length,
    hits: matched.slice(0, limit).map(({ haystack: _haystack, ...hit }) => hit),
  };
}
