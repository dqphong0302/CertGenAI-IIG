'use client';

import { useCallback, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  HelpCircle,
  ListChecks,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { topicLabel, type Topic } from '@/shared/domain';
import type { CourseOutline } from '@/shared/learning';
import { fetchTheoryModule } from '@/lib/api/client';
import { useResource } from '@/lib/api/use-resource';
import { accentOf, topicOrder } from '@/components/learning/location';
import {
  SlideCanvas,
  SlideDefinitions,
  SlidePoints,
  SlideTakeaway,
  useBeats,
  useSlideKeys,
  type Beat,
} from '@/components/learning/slide-canvas';
import {
  SourceList,
  StageError,
  StageEyebrow,
  StageSkeleton,
} from '@/components/learning/stage-parts';

export function ConceptStage({
  outline,
  topic,
  index,
  visited,
  onNavigate,
  onPractice,
}: {
  outline: CourseOutline;
  topic: Topic;
  index: number;
  visited: number[];
  onNavigate: (next: { topic: Topic; index: number }) => void;
  onPractice: (topic: Topic) => void;
}) {
  const [choice, setChoice] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  // Lựa chọn của câu tự kiểm tra được xóa bằng `key` ở learning-hub.tsx
  // (React dựng lại component khi đổi slide).
  const theory = useResource(`concept:${topic}`, () => fetchTheoryModule(topic));

  const slides = theory.data?.slides ?? [];
  const total = slides.length;
  const isFirst = index === 0;
  const isLast = total > 0 && index === total - 1;
  const slide = slides[Math.min(index, total - 1)];

  const goPrev = useCallback(() => {
    if (!isFirst) onNavigate({ topic, index: index - 1 });
  }, [isFirst, index, onNavigate, topic]);

  const goNext = useCallback(() => {
    if (!isLast) onNavigate({ topic, index: index + 1 });
  }, [isLast, index, onNavigate, topic]);

  /**
   * Nhịp giảng một khái niệm: ý chính → thuật ngữ phải gọi đúng tên → một
   * tình huống có thật → chỗ hay hiểu sai → câu đọng lại. Thuật ngữ và ghi
   * chú theo khóa IIG chỉ xuất hiện ở slide nào thực sự có.
   */
  const beats = useMemo<Beat[]>(() => {
    if (!slide) return [];
    const list: Beat[] = [
      {
        id: 'points',
        label: 'Ý chính',
        content: <SlidePoints points={slide.bullets} />,
      },
    ];

    if (slide.terms?.length) {
      list.push({
        id: 'terms',
        label: 'Thuật ngữ',
        content: (
          <SlideDefinitions
            tone="info"
            items={slide.terms.map((item) => ({
              label: item.term,
              value: item.definition,
            }))}
          />
        ),
      });
    }

    if (slide.example) {
      list.push({
        id: 'example',
        label: slide.example.title,
        cta: 'Ví dụ áp dụng',
        content: (
          <p className="rounded-xl border border-warning/25 bg-warning/[0.07] p-3.5 text-[14.5px] leading-relaxed text-foreground/85 text-pretty">
            {slide.example.content}
          </p>
        ),
      });
    }

    if (slide.pitfalls?.length || slide.examNote) {
      list.push({
        id: 'pitfalls',
        label: 'Dễ nhầm',
        content: (
          <div className="grid gap-2.5">
            {slide.pitfalls?.length ? (
              <ul className="grid gap-2 rounded-xl border border-destructive/25 bg-destructive/[0.06] p-3.5">
                {slide.pitfalls.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[1.1rem_1fr] items-start gap-2.5 text-[14.5px] leading-relaxed text-foreground/85"
                  >
                    <X
                      size={15}
                      className="mt-1 shrink-0 rounded-full bg-destructive p-0.5 text-white"
                    />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {slide.examNote && (
              <p className="flex items-start gap-2.5 rounded-xl border border-primary/25 bg-primary/[0.06] p-3.5 text-[14.5px] leading-relaxed text-foreground/85 text-pretty">
                <AlertTriangle
                  size={16}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <span>
                  <b className="font-bold text-primary">
                    Ghi nhớ khi thi — khóa IIG.
                  </b>{' '}
                  {slide.examNote}
                </span>
              </p>
            )}
          </div>
        ),
      });
    }

    list.push({
      id: 'takeaway',
      label: 'Ghi nhớ cốt lõi',
      content: <SlideTakeaway>{slide.takeaway}</SlideTakeaway>,
    });

    return list;
  }, [slide]);

  const controls = useBeats(`${topic}:${index}`, beats);
  const { atEnd, revealNext } = controls;

  useSlideKeys({
    onAdvance: useCallback(() => {
      if (!atEnd) revealNext();
      else goNext();
    }, [atEnd, revealNext, goNext]),
    onBack: goPrev,
  });

  if (theory.error) {
    return <StageError message={theory.error} onRetry={theory.reload} />;
  }
  if (!theory.data) return <StageSkeleton />;
  if (!slide) {
    return (
      <StageError
        message="Nhóm khái niệm này chưa có slide nào."
        onRetry={theory.reload}
      />
    );
  }

  const accent = accentOf(topicOrder.indexOf(topic) + 1);

  return (
    <article className="space-y-4">
      {/* Chuyển nhóm nhanh, không cần quay lại mục lục */}
      <nav
        aria-label="Chọn nhóm khái niệm"
        className="flex flex-wrap gap-1.5 border-b border-border/70 pb-4"
      >
        {outline.concept.topics.map((entry, entryIndex) => {
          const isCurrent = entry.topic === topic;
          const entryAccent = accentOf(entryIndex + 1);
          return (
            <button
              key={entry.topic}
              type="button"
              id={`concept-topic-${entry.topic}`}
              onClick={() => onNavigate({ topic: entry.topic, index: 0 })}
              aria-current={isCurrent ? 'true' : undefined}
              className={cn(
                'rounded-lg border px-3 py-1.5 text-[12.5px] font-bold transition-colors',
                isCurrent
                  ? cn(entryAccent.border, entryAccent.soft, entryAccent.text)
                  : 'border-border text-muted-foreground hover:bg-muted/50',
              )}
            >
              {topicLabel[entry.topic]}
            </button>
          );
        })}
      </nav>

      <SlideCanvas
        position={index + 1}
        total={total}
        eyebrow={slide.label}
        eyebrowClassName={accent.text}
        accentClassName={accent.bg}
        title={slide.title}
        lead={slide.summary}
        controls={controls}
        footer={
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:px-6">
            <div
              className="flex flex-wrap items-center gap-1.5"
              aria-label="Tiến độ trong nhóm"
            >
              {slides.map((item, itemIndex) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Đến slide ${itemIndex + 1}${visited.includes(itemIndex) ? ', đã đọc' : ''}`}
                  onClick={() => onNavigate({ topic, index: itemIndex })}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    itemIndex === index
                      ? cn('w-7', accent.bg)
                      : visited.includes(itemIndex)
                        ? 'w-2 bg-success/60'
                        : 'w-2 bg-border hover:bg-muted-foreground/40',
                  )}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                id="concept-previous"
                variant="outline"
                size="sm"
                disabled={isFirst}
                onClick={goPrev}
                className="font-semibold"
              >
                <ArrowLeft size={15} /> Trước
              </Button>
              {isLast ? (
                <Button
                  id="concept-practice"
                  size="sm"
                  onClick={() => onPractice(topic)}
                  className="font-semibold"
                >
                  <ListChecks size={15} /> Luyện nhóm này
                </Button>
              ) : (
                <Button
                  id="concept-next"
                  size="sm"
                  onClick={goNext}
                  className="font-semibold"
                >
                  Slide tiếp <ArrowRight size={15} />
                </Button>
              )}
            </div>
          </div>
        }
      />

      {/* Hoạt động sau slide: tự kiểm tra rồi mới sang bài kế tiếp. */}
      {slide.check && (
        <section
          aria-label="Tự kiểm tra nhanh"
          className="rounded-2xl border border-info/25 bg-info/[0.05] p-5 sm:p-6"
        >
          <StageEyebrow className="flex items-center gap-1.5 text-info">
            <HelpCircle size={14} />
            Tự kiểm tra nhanh
          </StageEyebrow>
          <p className="mt-2 text-[16px] leading-relaxed font-bold text-foreground text-pretty">
            {slide.check.question}
          </p>
          <div className="mt-4 grid gap-2">
            {slide.check.options.map((option, optionIndex) => {
              const isAnswer = optionIndex === slide.check?.answer;
              const isPicked = choice === optionIndex;
              return (
                <button
                  key={option}
                  id={`concept-check-${optionIndex + 1}`}
                  type="button"
                  disabled={revealed}
                  onClick={() => setChoice(optionIndex)}
                  className={cn(
                    'grid min-h-11 grid-cols-[1.75rem_1fr] items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-[14.5px] leading-relaxed transition-colors',
                    !revealed &&
                      (isPicked
                        ? 'border-info bg-info/10 font-semibold'
                        : 'border-border bg-card hover:border-info/40 hover:bg-info/[0.05]'),
                    revealed &&
                      isAnswer &&
                      'border-success/45 bg-success/10 font-bold text-success',
                    revealed &&
                      isPicked &&
                      !isAnswer &&
                      'border-destructive/45 bg-destructive/10 font-bold text-destructive',
                    revealed &&
                      !isAnswer &&
                      !isPicked &&
                      'border-border bg-card text-muted-foreground',
                  )}
                >
                  <span
                    className={cn(
                      'grid size-7 place-items-center rounded-md text-xs font-extrabold',
                      revealed && isAnswer
                        ? 'bg-success text-white'
                        : revealed && isPicked
                          ? 'bg-destructive text-white'
                          : isPicked
                            ? 'bg-info text-white'
                            : 'bg-muted text-foreground',
                    )}
                  >
                    {String.fromCharCode(65 + optionIndex)}
                  </span>
                  <span className="text-pretty">{option}</span>
                </button>
              );
            })}
          </div>
          {revealed ? (
            <p
              className={cn(
                'mt-4 rounded-lg border p-3.5 text-[14px] leading-relaxed',
                choice === slide.check.answer
                  ? 'border-success/30 bg-success/10 text-success'
                  : 'border-destructive/30 bg-destructive/10 text-destructive',
              )}
            >
              <b>
                {choice === slide.check.answer
                  ? 'Chính xác.'
                  : 'Chưa chính xác.'}
              </b>{' '}
              {slide.check.explanation}
            </p>
          ) : (
            <Button
              id="concept-check-answer"
              size="sm"
              className="mt-4 font-semibold"
              disabled={choice === null}
              onClick={() => setRevealed(true)}
            >
              Kiểm tra đáp án
            </Button>
          )}
        </section>
      )}

      <section
        aria-label="Nguồn tham khảo"
        className="rounded-2xl border border-border bg-card/70 p-5"
      >
        <StageEyebrow className="flex items-center gap-1.5 text-muted-foreground">
          <BookOpenText size={14} />
          Đọc trong tài liệu tham khảo
        </StageEyebrow>
        <div className="mt-3">
          <SourceList sources={slide.sources} />
        </div>
      </section>
    </article>
  );
}
