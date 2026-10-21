'use client';

import { useMemo, useState } from 'react';
import {
  BookOpenText,
  Check,
  ChevronDown,
  RotateCcw,
  Save,
  Target,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Callout,
  EmptyNote,
  FilterChip,
  StageEyebrow,
  StageHeading,
  StatTile,
} from '@/components/shared/section-parts';
import {
  Answer,
  Attempt,
  calculateQuestionCredit,
  EXAM_MAX_SCORE,
  EXAM_PASS_SCORE,
  EXAM_POINTS_PER_QUESTION,
  isAnswered,
  Question,
  Topic,
  topicLabel,
} from '@/lib/quiz';
import { answerText, SavedKey } from '@/lib/learning-store';

type ResultFilter = 'all' | 'wrong' | 'partial' | 'right' | 'unanswered';

export function ResultScreen({
  result,
  questions,
  answers,
  keys,
  saveStatus,
  onRetryWrong,
  onHome,
  onTheory,
}: {
  result: Attempt;
  questions: Question[];
  answers: Record<string, Answer>;
  keys: Record<string, SavedKey>;
  saveStatus: 'saving' | 'saved' | 'error';
  onRetryWrong: () => void;
  onHome: () => void;
  onTheory: (topic: Topic) => void;
}) {
  const [filter, setFilter] = useState<ResultFilter>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const credits = useMemo(() => {
    const map: Record<string, number> = {};
    for (const q of questions) {
      map[q.id] =
        result.questionCredits?.[q.id] ??
        calculateQuestionCredit(q, answers[q.id], keys[q.id]);
    }
    return map;
  }, [questions, result.questionCredits, answers, keys]);

  const score =
    result.estimatedScore ??
    Math.min(
      EXAM_MAX_SCORE,
      Math.round((result.correct / result.total) * EXAM_MAX_SCORE),
    );
  const wrong = new Set(result.wrongIds);
  const unanswered = questions.filter(
    (q) => !isAnswered(q, answers[q.id]),
  ).length;

  const fullCount = questions.filter((q) => (credits[q.id] || 0) >= 1).length;
  const partialCount = questions.filter(
    (q) => (credits[q.id] || 0) > 0 && (credits[q.id] || 0) < 1,
  ).length;
  const zeroCount = questions.filter((q) => (credits[q.id] || 0) === 0).length;

  const visible = questions.filter((q) => {
    const c = credits[q.id] || 0;
    if (filter === 'all') return true;
    if (filter === 'wrong') return c === 0;
    if (filter === 'partial') return c > 0 && c < 1;
    if (filter === 'right') return c >= 1;
    if (filter === 'unanswered') return !isAnswered(q, answers[q.id]);
    return true;
  });

  const passed = score >= EXAM_PASS_SCORE;
  const filters: Array<[ResultFilter, string, number]> = [
    ['all', 'Tất cả', result.total],
    ['right', 'Đúng trọn vẹn', fullCount],
    ...(partialCount > 0
      ? ([['partial', 'Điểm lẻ', partialCount]] as Array<
          [ResultFilter, string, number]
        >)
      : []),
    ['wrong', 'Sai hoàn toàn', zeroCount],
    ['unanswered', 'Bỏ trống', unanswered],
  ];

  return (
    <main className="mx-auto my-8 w-[min(1000px,calc(100%-2.25rem))] pb-12">
      <section className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-9">
        <StageHeading
          level={1}
          eyebrow={
            result.mode === 'exam' ? 'Bài thi đã nộp' : 'Kết quả luyện tập'
          }
          eyebrowClassName="text-primary"
          title="Xem lại bài làm, học từ câu sai"
          lead={`${new Date(result.date).toLocaleString('vi-VN')} · ${Math.floor(
            result.duration / 60,
          )} phút ${result.duration % 60} giây`}
          actions={
            <Button id="back-home" variant="outline" onClick={onHome}>
              Về trang chủ
            </Button>
          }
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile
            icon={<Target size={20} />}
            value={
              result.mode === 'exam'
                ? `${score}/${EXAM_MAX_SCORE}`
                : `${result.percent}%`
            }
            label={
              result.mode === 'exam'
                ? passed
                  ? 'Đạt mốc mô phỏng (≥ 700)'
                  : 'Cần củng cố thêm (< 700)'
                : 'Khớp khóa luyện tập'
            }
            toneClassName={
              result.mode === 'exam'
                ? passed
                  ? 'text-success'
                  : 'text-warning'
                : 'text-primary'
            }
          />
          <StatTile
            value={`${result.correct}/${result.total}`}
            label={
              result.mode === 'exam'
                ? 'Câu quy đổi (tính điểm lẻ)'
                : 'Câu khớp khóa'
            }
          />
          <StatTile
            value={wrong.size}
            label="Câu cần ôn (gồm điểm lẻ)"
            toneClassName={wrong.size ? 'text-destructive' : undefined}
          />
          <StatTile value={unanswered} label="Câu chưa trả lời" />
        </div>

        {/* Trạng thái lưu phải đọc được ngay nên để <output> tự báo thay đổi. */}
        <output
          className={cn(
            'flex items-start gap-2.5 rounded-xl border p-4 text-[14px] leading-relaxed',
            saveStatus === 'error'
              ? 'border-destructive/25 bg-destructive/[0.06] text-destructive'
              : 'border-primary/25 bg-primary/[0.06] text-foreground/85',
          )}
        >
          <Save size={17} className="mt-0.5 shrink-0" />
          {saveStatus === 'saving'
            ? 'Đang lưu toàn bộ bài làm…'
            : saveStatus === 'saved'
              ? 'Đã lưu đề, lựa chọn của bạn và giải thích. Mở lại trong Bài làm đã lưu.'
              : 'Chưa lưu được bài vào trình duyệt. Hãy xuất bản sao ở trang chủ trước khi đóng trang.'}
        </output>

        <div className="space-y-1.5">
          <p className="text-[12.5px] leading-relaxed text-muted-foreground">
            Điểm theo khóa đã lưu tại lúc nộp. Bài kiểm tra mô phỏng tính điểm
            lẻ từng câu nhỏ (ma trận, ghép nối, nhiều lựa chọn).
          </p>
          {!!result.strikes && (
            <p className="text-[12.5px] leading-relaxed text-muted-foreground">
              Ghi nhận {result.strikes} lần rời màn hình thi.
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2.5">
          {wrong.size > 0 && (
            <Button id="retry-wrong-btn" onClick={onRetryWrong}>
              <RotateCcw size={16} />
              Luyện lại {wrong.size} câu cần ôn
            </Button>
          )}
          <Button
            id="review-results"
            variant="outline"
            onClick={() => {
              setFilter(wrong.size ? 'wrong' : 'all');
              setExpanded(
                questions.find((q) => wrong.has(q.id))?.id ??
                  questions[0]?.id ??
                  null,
              );
              document
                .getElementById('paper-questions')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Xem đáp án và giải thích
          </Button>
        </div>
      </section>

      <section
        id="paper-questions"
        className="mt-6 space-y-5 rounded-2xl border border-border bg-card p-5 sm:p-7"
      >
        <StageHeading
          eyebrow="Từng câu một"
          eyebrowClassName="text-muted-foreground"
          title="Bài làm chi tiết"
        />

        <div className="flex flex-wrap gap-2" aria-label="Lọc kết quả">
          {filters.map(([value, label, count]) => (
            <FilterChip
              key={value}
              id={`result-filter-${value}`}
              active={filter === value}
              count={count}
              onClick={() => setFilter(value)}
            >
              {label}
            </FilterChip>
          ))}
        </div>

        {!visible.length && (
          <EmptyNote
            action={
              <Button
                id="result-clear-filter"
                size="sm"
                variant="outline"
                onClick={() => setFilter('all')}
              >
                Xem tất cả {result.total} câu
              </Button>
            }
          >
            Không có câu nào trong nhóm này.
          </EmptyNote>
        )}

        <div>
          {visible.map((q) => {
            const k = keys[q.id];
            const unresolved = k?.review?.validatedAnswer === null;
            const credit = credits[q.id] || 0;
            const isFull = credit >= 1;
            const isPartial = credit > 0 && credit < 1;
            const open = expanded === q.id;
            return (
              <article key={q.id} className="border-t border-border/70 py-3.5">
                <button
                  id={`paper-question-${q.number}`}
                  type="button"
                  aria-expanded={open}
                  aria-controls={`paper-detail-${q.number}`}
                  onClick={() => setExpanded(open ? null : q.id)}
                  className="grid w-full grid-cols-[1.75rem_1fr_1.25rem] items-start gap-3 text-left"
                >
                  <span
                    className={cn(
                      'mt-0.5 grid size-7 place-items-center rounded-lg text-[12px] font-extrabold tabular-nums',
                      unresolved
                        ? 'bg-warning/10 text-warning'
                        : isFull
                          ? 'bg-success/10 text-success'
                          : isPartial
                            ? 'bg-warning/15 text-warning'
                            : 'bg-destructive/10 text-destructive',
                    )}
                  >
                    {unresolved ? (
                      '?'
                    ) : isFull ? (
                      <Check size={16} />
                    ) : isPartial ? (
                      `+${credit}`
                    ) : (
                      <X size={16} />
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="mb-1 block text-[12.5px] font-semibold text-muted-foreground">
                      Câu {questions.indexOf(q) + 1} trong bài · Ngân hàng #
                      {q.number} ·{' '}
                      {unresolved
                        ? 'Khóa cần đối chiếu'
                        : !isAnswered(q, answers[q.id])
                          ? 'Bỏ trống (0đ)'
                          : isFull
                            ? 'Khớp khóa trọn vẹn (+1.0)'
                            : isPartial
                              ? `Đúng một phần (+${credit} câu · ~${Math.round(credit * (result.mode === 'exam' ? EXAM_POINTS_PER_QUESTION : 20))} điểm)`
                              : 'Chưa khớp khóa (0đ)'}
                    </span>
                    <span className="block text-[14.5px] leading-relaxed whitespace-pre-line text-foreground/90">
                      {q.prompt}
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      'mt-1 text-muted-foreground transition-transform',
                      open && 'rotate-180',
                    )}
                  />
                </button>
                {open && (
                  <div
                    id={`paper-detail-${q.number}`}
                    className="mt-4 space-y-3.5 sm:ml-10"
                  >
                    {isPartial && (
                      <Callout tone="example" title={`Đạt điểm lẻ (+${credit} câu)`}>
                        Câu hỏi dạng ma trận / ghép nối / chọn nhiều đã được
                        tính điểm theo tỷ lệ số ý con trả lời đúng.
                      </Callout>
                    )}
                    {q.images.map((src, index) => (
                      <img
                        width={900}
                        height={600}
                        key={src}
                        src={src}
                        alt={`Hình câu ${q.number}, ảnh ${index + 1}`}
                        className="h-auto max-w-full rounded-xl border border-border"
                      />
                    ))}
                    <div className="rounded-xl border border-border/70 bg-muted/35 p-4">
                      <StageEyebrow className="text-muted-foreground">
                        Lựa chọn của bạn
                      </StageEyebrow>
                      <p className="mt-2 text-[14px] leading-relaxed whitespace-pre-line text-foreground/85">
                        {answerText(q, answers[q.id])}
                      </p>
                    </div>
                    <Callout
                      tone={unresolved ? 'caution' : 'success'}
                      title={
                        unresolved
                          ? 'Khóa tham khảo cần đối chiếu'
                          : 'Đáp án dùng để chấm bài'
                      }
                    >
                      <p className="whitespace-pre-line">
                        {k?.summaryText || 'Không có khóa lưu cho câu này.'}
                      </p>
                    </Callout>
                    <div className="rounded-xl border border-border/70 bg-background/60 p-4">
                      <StageEyebrow className="text-muted-foreground">
                        Vì sao chọn đáp án này
                      </StageEyebrow>
                      <p className="mt-2 text-[14px] leading-relaxed whitespace-pre-line text-foreground/85">
                        {k?.explanation || q.explanation}
                      </p>
                    </div>
                    <Button
                      id={`paper-theory-${q.number}`}
                      size="sm"
                      variant="outline"
                      onClick={() => onTheory(q.topic)}
                    >
                      <BookOpenText size={15} />
                      Ôn lý thuyết: {topicLabel[q.topic]}
                    </Button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
