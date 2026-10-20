'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Circle,
  Clock3,
  ListChecks,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { CourseOutline } from '@/shared/learning';
import { fetchLectureSlide } from '@/lib/api/client';
import { prefetchResource, useResource } from '@/lib/api/use-resource';
import { AudioPlayer } from '@/components/learning/audio-player';
import { accentOf } from '@/components/learning/location';
import {
  SlideCanvas,
  SlideDefinitions,
  SlidePoints,
  useBeats,
  useSlideKeys,
  type Beat,
} from '@/components/learning/slide-canvas';
import { StageError, StageSkeleton } from '@/components/learning/stage-parts';

const slideKey = (id: string) => `lecture:${id}`;

export function LectureStage({
  outline,
  slideId,
  completed,
  onNavigate,
  onToggleComplete,
  onPractice,
  reading = false,
}: {
  reading?: boolean;
  outline: CourseOutline;
  slideId: string;
  completed: boolean;
  onNavigate: (slideId: string) => void;
  onToggleComplete: (slideId: string, done: boolean) => void;
  onPractice?: (questionNumbers: number[], lessonTitle: string) => void;
}) {
  const [autoPlayNext, setAutoPlayNext] = useState(true);
  const [showScript, setShowScript] = useState(false);

  const entries = outline.lecture.slides;
  const position = entries.findIndex((entry) => entry.id === slideId);
  const previousId = position > 0 ? entries[position - 1].id : undefined;
  const nextId =
    position >= 0 && position < entries.length - 1
      ? entries[position + 1].id
      : undefined;

  const slide = useResource(slideKey(slideId), () =>
    fetchLectureSlide(slideId),
  );

  // Tải sẵn bài kế tiếp: nghe xong là chuyển ngay, không chờ mạng.
  useEffect(() => {
    if (nextId) {
      prefetchResource(slideKey(nextId), () => fetchLectureSlide(nextId));
    }
  }, [nextId]);

  const goPrev = useCallback(() => {
    if (previousId) onNavigate(previousId);
  }, [previousId, onNavigate]);

  const goNext = useCallback(() => {
    if (nextId) onNavigate(nextId);
  }, [nextId, onNavigate]);

  const current = slide.data;

  /**
   * Nhịp giảng của một bài: nêu ý chính, cho thấy nó dùng vào đâu, rồi chỉ
   * chỗ người học hay mất điểm. Đúng thứ tự một người dạy sẽ nói.
   */
  const beats = useMemo<Beat[]>(() => {
    if (!current) return [];
    return [
      {
        id: 'points',
        label: 'Ý chính',
        content: <SlidePoints points={current.keyPoints} />,
      },
      {
        id: 'apply',
        label: current.frameworkBox.title,
        cta: 'Ví dụ áp dụng',
        content: (
          <SlideDefinitions
            tone="info"
            items={current.frameworkBox.items.map((item) => ({
              label: item.label,
              value: item.desc,
            }))}
          />
        ),
      },
      {
        id: 'trap',
        label: 'Dễ nhầm khi thi',
        content: (
          <p className="flex items-start gap-2.5 rounded-xl border border-destructive/25 bg-destructive/[0.06] p-3.5 text-[14.5px] leading-relaxed text-foreground/85 text-pretty">
            <AlertTriangle
              size={16}
              className="mt-0.5 shrink-0 text-destructive"
            />
            {current.examTrap}
          </p>
        ),
      },
    ];
  }, [current]);

  const controls = useBeats(slideId, beats);
  const { atEnd, revealNext, revealAll, setShowAll } = controls;

  useEffect(() => {
    setShowAll(reading);
  }, [reading, setShowAll]);

  // → mở nhịp tiếp theo, hết nhịp thì sang bài sau.
  useSlideKeys({
    onAdvance: useCallback(() => {
      if (!atEnd) revealNext();
      else goNext();
    }, [atEnd, revealNext, goNext]),
    onBack: goPrev,
  });

  const handleEnded = useCallback(() => {
    onToggleComplete(slideId, true);
    if (autoPlayNext && nextId) onNavigate(nextId);
  }, [autoPlayNext, nextId, onNavigate, onToggleComplete, slideId]);

  // Nghe lời giảng thì cả slide phải hiện: người học đang nghe, không bấm.
  const handlePlay = useCallback(() => revealAll(), [revealAll]);

  if (slide.error) {
    return <StageError message={slide.error} onRetry={slide.reload} />;
  }
  if (!current) return <StageSkeleton />;

  const part = outline.lecture.parts.find(
    (item) => item.number === current.partNumber,
  );
  const accent = accentOf(current.partNumber);
  const relatedCount = current.relatedQuestions.length;

  return (
    <article className="lecture-stage space-y-4">
      <SlideCanvas
        position={current.slideNumber}
        total={outline.lecture.totalSlides}
        eyebrow={`Phần ${current.partNumber} · ${part?.shortName ?? current.partTitle}`}
        eyebrowClassName={accent.text}
        accentClassName={accent.bg}
        meta={
          <span className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground tabular-nums">
            <Clock3 size={12} />
            {Math.round(current.durationSeconds)} giây
          </span>
        }
        title={current.title}
        lead={current.subtitle}
        controls={controls}
        footer={
          <AudioPlayer
            src={current.audioSrc}
            fallbackDuration={current.durationSeconds}
            autoPlayNext={autoPlayNext}
            onAutoPlayNextChange={setAutoPlayNext}
            onPlay={handlePlay}
            onEnded={handleEnded}
            onPrev={goPrev}
            onNext={goNext}
            hasPrev={Boolean(previousId)}
            hasNext={Boolean(nextId)}
          />
        }
      />

      <div className="lecture-actions flex flex-wrap items-center gap-2">
        <Button
          id="lecture-mark-done"
          size="sm"
          variant={completed ? 'default' : 'outline'}
          onClick={() => onToggleComplete(slideId, !completed)}
          className="gap-1.5 font-semibold"
        >
          {completed ? <CheckCircle2 size={15} /> : <Circle size={15} />}
          {completed ? 'Đã học bài này' : 'Đánh dấu đã học'}
        </Button>

        {onPractice && relatedCount > 0 && (
          <Button
            id="lecture-practice"
            size="sm"
            variant="outline"
            onClick={() => onPractice(current.relatedQuestions, current.title)}
            className="gap-1.5 font-semibold"
          >
            <ListChecks size={15} />
            Luyện {relatedCount} câu liên quan
            <ArrowRight size={13} />
          </Button>
        )}

        {nextId && (
          <Button
            size="sm"
            variant="ghost"
            onClick={goNext}
            className="ml-auto gap-1.5 font-semibold text-muted-foreground"
          >
            Bài tiếp
            <ArrowRight size={14} />
          </Button>
        )}
      </div>

      {/* Lời giảng đầy đủ: để đọc hoặc dò lại, không chen vào mạch slide. */}
      <div className="lecture-script overflow-hidden rounded-2xl border border-border bg-card/70">
        <button
          type="button"
          id="lecture-toggle-script"
          onClick={() => setShowScript((value) => !value)}
          aria-expanded={showScript}
          className="flex w-full items-center gap-2 px-4 py-3 text-left text-[13px] font-bold text-foreground transition-colors hover:bg-muted/40"
        >
          <Quote size={14} className="text-muted-foreground" />
          Lời giảng đầy đủ
          <span className="ml-auto text-[12px] font-semibold text-muted-foreground">
            {showScript ? 'Ẩn' : 'Đọc'}
          </span>
        </button>
        {showScript && (
          <blockquote
            className={cn(
              'border-t border-border/60 px-4 py-4 text-[15px] leading-[1.8] text-foreground/85 text-pretty sm:px-6',
            )}
          >
            {current.lectureScript}
          </blockquote>
        )}
      </div>
    </article>
  );
}
