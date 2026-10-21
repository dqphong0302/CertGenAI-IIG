'use client';

import { useCallback, useMemo, useState } from 'react';
import {
  GraduationCap,
  PanelLeftClose,
  PanelLeftOpen,
  Play,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Topic } from '@/shared/domain';
import type { CourseOutline } from '@/shared/learning';
import { fetchCourseOutline } from '@/lib/api/client';
import { useResource } from '@/lib/api/use-resource';
import {
  conceptVisitedCount,
  percent,
  withConceptSlideSeen,
  withLectureSlideDone,
  withLectureSlideSeen,
  withLessonRead,
  type LearningProgress,
} from '@/lib/learning-progress';
import {
  QuestionReview,
  type ReviewKeybook,
} from '@/components/quiz/question-review';
import type { Manifest } from '@/lib/quiz';
import { CourseOutline as CourseOutlineNav } from '@/components/learning/course-outline';
import { ConceptStage } from '@/components/learning/concept-stage';
import { CramStage } from '@/components/learning/cram-stage';
import { LectureReader } from '@/components/learning/lecture-reader';
import { LessonStage } from '@/components/learning/lesson-stage';
import { ReferenceStage } from '@/components/learning/reference-stage';
import { TrapStage } from '@/components/learning/trap-stage';
import {
  sectionLabel,
  type LearningLocation,
  type LearningSectionId,
} from '@/components/learning/location';
import {
  StageError,
  StageHeading,
  StageSkeleton,
} from '@/components/shared/section-parts';

/**
 * Phần học tập hợp nhất.
 *
 * Trước đây bảy mục nội dung là bảy tab rời nhau, mỗi tab tự quản tiến độ và
 * tự tìm kiếm trong phạm vi của mình. Ở đây chỉ còn một mục lục cho cả khóa,
 * một vị trí hiện tại (`LearningLocation`) và một thanh tiến độ, nên người học
 * luôn biết mình đang ở đâu và học tiếp từ đâu.
 */
export function LearningHub({
  manifest,
  keybook,
  progress,
  onProgress,
  jumpRequest,
  onPracticeQuestionNumbers,
  onPracticeTopic,
  onStartTrapPractice,
  onStartExam,
}: {
  manifest: Manifest;
  keybook: ReviewKeybook | null;
  progress: LearningProgress;
  onProgress: (next: LearningProgress) => void;
  /**
   * Yêu cầu mở một mục cụ thể từ bên ngoài (nút ở trang chủ, màn hình kết
   * quả). `nonce` tăng mỗi lần bấm để cùng một mục vẫn mở lại được sau khi
   * người học đã đi chỗ khác.
   */
  jumpRequest?: { section: LearningSectionId; nonce: number };
  onPracticeQuestionNumbers?: (
    questionNumbers: number[],
    lessonTitle: string,
  ) => void;
  onPracticeTopic: (topic: Topic) => void;
  onStartTrapPractice?: () => void;
  onStartExam: () => void;
}) {
  const outline = useResource('outline', () => fetchCourseOutline());
  // Màn rộng đủ chỗ cho mục lục ở cột bên; màn hẹp thì mục lục nằm đè lên
  // slide, nên gập sẵn để vào trang là thấy ngay nội dung đang học.
  const [outlineOpen, setOutlineOpen] = useState(
    () => typeof window === 'undefined' || window.innerWidth >= 1024,
  );

  /**
   * Vị trí hiện tại.
   *
   * Mặc định là chỗ người học dừng lại lần trước, hoặc mục mà màn hình khác
   * gọi tới. Khi họ tự điều hướng, lựa chọn đó được gắn với `nonce` của yêu
   * cầu đang hiệu lực: trang chủ bấm mở một mục là `nonce` tăng, lựa chọn cũ
   * hết hiệu lực và mục được yêu cầu mở ra — không cần effect nào đồng bộ.
   */
  const requestNonce = jumpRequest?.nonce ?? 0;
  const [picked, setPicked] = useState<{
    nonce: number;
    value: LearningLocation;
  } | null>(null);

  const location: LearningLocation | null = !outline.data
    ? null
    : picked?.nonce === requestNonce
      ? picked.value
      : locationForSection(
          jumpRequest?.section ?? 'lecture',
          outline.data,
          progress,
        );

  const navigate = useCallback(
    (next: LearningLocation) => {
      setPicked({ nonce: requestNonce, value: next });
      if (next.kind === 'lecture') {
        onProgress(withLectureSlideSeen(progress, next.slideId));
      } else if (next.kind === 'concept') {
        onProgress(withConceptSlideSeen(progress, next.topic, next.index));
      }
      // Trên màn hẹp, mục lục chiếm hết chỗ: chọn xong thì gập lại và đưa
      // người học xuống thẳng nội dung.
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        setOutlineOpen(false);
        document
          .getElementById('learning-stage')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [onProgress, progress, requestNonce],
  );

  const stats = useMemo(() => {
    if (!outline.data) return null;
    const lecture = progress.lecture.completed.length;
    const concept = conceptVisitedCount(progress);
    const lesson = progress.lesson.read.length;
    const done = lecture + concept + lesson;
    const total =
      outline.data.lecture.totalSlides +
      outline.data.concept.total +
      outline.data.lessons.entries.length;
    return {
      lecture,
      concept,
      lesson,
      done,
      total,
      overall: percent(done, total),
    };
  }, [outline.data, progress]);

  if (outline.error) {
    return (
      <div className="py-6">
        <StageError message={outline.error} onRetry={outline.reload} />
      </div>
    );
  }
  if (!outline.data || !location || !stats) {
    return (
      <div className="py-4">
        <StageSkeleton lines={7} />
      </div>
    );
  }

  const course = outline.data;

  if (location.kind === 'lecture') {
    return (
      <LectureReader
        course={course}
        slideId={location.slideId}
        progress={progress}
        onNavigate={navigate}
        onComplete={(slideId, done) =>
          onProgress(withLectureSlideDone(progress, slideId, done))
        }
        onPractice={onPracticeQuestionNumbers}
      />
    );
  }

  return (
    <div className="space-y-5">
      <header className="flex flex-col gap-4 border-b border-border/70 pb-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3.5">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <GraduationCap size={22} />
          </span>
          <div>
            <h2 className="text-[19px] leading-tight font-extrabold tracking-tight text-foreground">
              Lộ trình tự học
            </h2>
            <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">
              {course.lecture.totalSlides} bài giảng · {course.concept.total}{' '}
              slide khái niệm · {course.lessons.entries.length} bài chuyên sâu ·
              cập nhật {course.concept.updated}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="min-w-[160px] flex-1 lg:flex-none">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                Đã học
              </span>
              <span className="text-sm font-extrabold text-primary tabular-nums">
                {stats.done}/{stats.total}
              </span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-500"
                style={{ width: `${stats.overall}%` }}
              />
            </div>
          </div>

          {progress.lecture.last && (
            <Button
              size="sm"
              variant="outline"
              className="shrink-0 gap-1.5 font-semibold"
              onClick={() =>
                navigate({
                  kind: 'lecture',
                  slideId: progress.lecture.last as string,
                })
              }
            >
              <Play size={14} />
              Học tiếp
            </Button>
          )}

          <Button
            size="sm"
            variant="ghost"
            className="shrink-0 gap-1.5 font-semibold text-muted-foreground"
            aria-expanded={outlineOpen}
            aria-controls="learning-outline"
            onClick={() => setOutlineOpen((value) => !value)}
          >
            {outlineOpen ? (
              <PanelLeftClose size={15} />
            ) : (
              <PanelLeftOpen size={15} />
            )}
            <span className="hidden sm:inline">
              {outlineOpen ? 'Ẩn mục lục' : 'Mục lục'}
            </span>
          </Button>
        </div>
      </header>

      <div
        className={cn(
          'grid items-start gap-5',
          outlineOpen ? 'lg:grid-cols-[17rem_minmax(0,1fr)]' : 'grid-cols-1',
        )}
      >
        {outlineOpen && (
          <aside
            id="learning-outline"
            className="flex max-h-[24rem] flex-col rounded-2xl border border-border bg-card/70 p-3 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)]"
          >
            <CourseOutlineNav
              outline={course}
              location={location}
              progress={progress}
              onNavigate={navigate}
            />
          </aside>
        )}

        <div id="learning-stage" className="min-w-0 scroll-mt-24">
          {location.kind === 'concept' && (
            <ConceptStage
              key={`${location.topic}:${location.index}`}
              outline={course}
              topic={location.topic}
              index={location.index}
              visited={progress.concept[location.topic]?.visited ?? []}
              onNavigate={(next) => navigate({ kind: 'concept', ...next })}
              onPractice={onPracticeTopic}
            />
          )}

          {location.kind === 'lesson' && (
            <LessonStage
              outline={course}
              lessonId={location.lessonId}
              read={progress.lesson.read.includes(location.lessonId)}
              onNavigate={(lessonId) => navigate({ kind: 'lesson', lessonId })}
              onMarkRead={(lessonId) =>
                onProgress(withLessonRead(progress, lessonId))
              }
              onPractice={onPracticeQuestionNumbers}
            />
          )}

          {location.kind === 'cram' && (
            <CramStage
              onStartPractice={() => onPracticeTopic('methods')}
              onStartExam={onStartExam}
            />
          )}

          {location.kind === 'traps' && (
            <TrapStage onStartTrapPractice={onStartTrapPractice} />
          )}

          {location.kind === 'references' && <ReferenceStage />}

          {location.kind === 'bank' && (
            <section className="space-y-5" aria-labelledby="bank-title">
              <StageHeading
                id="bank-title"
                eyebrow={`${manifest.total} câu · khóa IIG`}
                eyebrowClassName="text-primary"
                title={sectionLabel.bank}
                lead="Tra từng câu kèm đáp án và giải thích. Dùng để kiểm tra lại một câu cụ thể sau khi làm bài."
              />
              <QuestionReview manifest={manifest} keybook={keybook} />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

/** Mục nào thì mở ở đâu: ưu tiên chỗ người học đang dở trong mục đó. */
function locationForSection(
  section: LearningSectionId,
  course: CourseOutline,
  progress: LearningProgress,
): LearningLocation {
  if (section === 'lecture') {
    const slideId =
      progress.lecture.last ?? course.lecture.slides[0]?.id ?? 'slide-01';
    return { kind: 'lecture', slideId };
  }
  if (section === 'concept') {
    const first = course.concept.topics[0];
    const topic = first?.topic ?? 'methods';
    return {
      kind: 'concept',
      topic,
      index: progress.concept[topic]?.last ?? 0,
    };
  }
  if (section === 'lesson') {
    const lessonId =
      progress.lesson.last ?? course.lessons.entries[0]?.id ?? '';
    return { kind: 'lesson', lessonId };
  }
  return { kind: section };
}
