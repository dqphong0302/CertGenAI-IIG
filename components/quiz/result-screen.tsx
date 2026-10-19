'use client';

import { useMemo, useState } from 'react';
import {
  BookOpenText,
  Check,
  ChevronDown,
  RotateCcw,
  Save,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
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
  const [filter, setFilter] = useState<
    'all' | 'wrong' | 'partial' | 'right' | 'unanswered'
  >('all');
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
  const zeroCount = questions.filter(
    (q) => (credits[q.id] || 0) === 0,
  ).length;

  const visible = questions.filter((q) => {
    const c = credits[q.id] || 0;
    if (filter === 'all') return true;
    if (filter === 'wrong') return c === 0;
    if (filter === 'partial') return c > 0 && c < 1;
    if (filter === 'right') return c >= 1;
    if (filter === 'unanswered') return !isAnswered(q, answers[q.id]);
    return true;
  });

  return (
    <main className="mx-auto my-8 w-[min(1000px,calc(100%-2.25rem))] pb-12">
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-9">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold tracking-wide text-primary uppercase">
            {result.mode === 'exam' ? 'Bài thi đã nộp' : 'Kết quả luyện tập'}
          </span>
          <Button id="back-home" variant="outline" onClick={onHome}>
            Về trang chủ
          </Button>
        </div>
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
          Xem lại bài làm, học từ câu sai
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {new Date(result.date).toLocaleString('vi-VN')} ·{' '}
          {Math.floor(result.duration / 60)} phút {result.duration % 60} giây
        </p>
        <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            [
              result.mode === 'exam'
                ? `${score}/${EXAM_MAX_SCORE}`
                : `${result.percent}%`,
              result.mode === 'exam'
                ? score >= EXAM_PASS_SCORE
                  ? 'Đạt mốc mô phỏng (≥ 700)'
                  : 'Cần củng cố thêm (< 700)'
                : 'Khớp khóa luyện tập',
            ],
            [
              `${result.correct}/${result.total}`,
              result.mode === 'exam'
                ? 'Câu quy đổi (tính điểm lẻ)'
                : 'Câu khớp khóa',
            ],
            [String(wrong.size), 'Câu cần ôn (gồm điểm lẻ)'],
            [String(unanswered), 'Câu chưa trả lời'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl bg-muted/50 p-4">
              <b className="text-xl font-extrabold text-primary">{value}</b>
              <span className="mt-1 block text-xs text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
        <output
          className={cn(
            'flex items-center gap-2 rounded-xl border p-3 text-sm',
            saveStatus === 'error'
              ? 'border-destructive/30 text-destructive'
              : 'border-primary/20 bg-primary/5 text-foreground',
          )}
        >
          <Save size={17} className="shrink-0" />
          {saveStatus === 'saving'
            ? 'Đang lưu toàn bộ bài làm…'
            : saveStatus === 'saved'
              ? 'Đã lưu đề, lựa chọn của bạn và giải thích. Mở lại trong Bài làm đã lưu.'
              : 'Chưa lưu được bài vào trình duyệt. Hãy xuất bản sao ở trang chủ trước khi đóng trang.'}
        </output>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Điểm theo khóa đã lưu tại lúc nộp. Bài kiểm tra mô phỏng tính điểm lẻ từng câu nhỏ (ma trận, ghép nối, nhiều lựa chọn).
        </p>
        {!!result.strikes && (
          <p className="mt-2 text-xs text-muted-foreground">
            Ghi nhận {result.strikes} lần rời màn hình thi.
          </p>
        )}
        <div className="mt-5 flex flex-wrap gap-3">
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
        className="mt-6 rounded-2xl border border-border bg-card p-4 sm:p-7"
      >
        <h2 className="text-lg font-bold">Bài làm chi tiết</h2>
        <div className="my-4 flex flex-wrap gap-2" aria-label="Lọc kết quả">
          {[
            ['all', `Tất cả (${result.total})`],
            ['right', `Đúng trọn vẹn (${fullCount})`],
            ...(partialCount > 0
              ? ([['partial', `Điểm lẻ (${partialCount})`]] as const)
              : []),
            ['wrong', `Sai hoàn toàn (${zeroCount})`],
            ['unanswered', `Bỏ trống (${unanswered})`],
          ].map(([value, label]) => (
            <Button
              key={value}
              id={`result-filter-${value}`}
              size="sm"
              variant={filter === value ? 'default' : 'outline'}
              aria-pressed={filter === value}
              onClick={() => setFilter(value as typeof filter)}
            >
              {label}
            </Button>
          ))}
        </div>
        {!visible.length && (
          <p className="py-8 text-center text-sm text-muted-foreground">
            Không có câu trong nhóm này.
          </p>
        )}
        {visible.map((q) => {
          const k = keys[q.id];
          const unresolved = k?.review?.validatedAnswer === null;
          const credit = credits[q.id] || 0;
          const isFull = credit >= 1;
          const isPartial = credit > 0 && credit < 1;
          const open = expanded === q.id;
          return (
            <article key={q.id} className="border-t border-border py-3">
              <button
                id={`paper-question-${q.number}`}
                type="button"
                aria-expanded={open}
                aria-controls={`paper-detail-${q.number}`}
                onClick={() => setExpanded(open ? null : q.id)}
                className="grid w-full grid-cols-[28px_1fr_20px] items-start gap-3 text-left"
              >
                <span
                  className={cn(
                    'mt-1 grid size-7 place-items-center rounded-lg text-xs font-bold',
                    unresolved
                      ? 'bg-warning/10 text-warning'
                      : isFull
                        ? 'bg-success/10 text-success'
                        : isPartial
                          ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-extrabold'
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
                <span>
                  <span className="mb-1 block text-xs font-semibold text-muted-foreground">
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
                  <span className="block whitespace-pre-line text-sm leading-relaxed">
                    {q.prompt}
                  </span>
                </span>
                <ChevronDown
                  size={18}
                  className={cn(
                    'mt-1 transition-transform',
                    open && 'rotate-180',
                  )}
                />
              </button>
              {open && (
                <div
                  id={`paper-detail-${q.number}`}
                  className="mt-4 space-y-4 sm:ml-10"
                >
                  {isPartial && (
                    <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-800 dark:text-amber-300">
                      💡 <b>Đạt điểm lẻ (+{credit} câu)</b>: Câu hỏi dạng ma trận/ghép nối/chọn nhiều đã được tính điểm theo tỷ lệ số ý con trả lời đúng.
                    </div>
                  )}
                  {q.images.map((src, index) => (
                    <img
                      width={900}
                      height={600}
                      key={src}
                      src={src}
                      alt={`Hình câu ${q.number}, ảnh ${index + 1}`}
                      className="h-auto max-w-full rounded-lg border border-border"
                    />
                  ))}
                  <div className="rounded-xl bg-muted/50 p-4 text-sm">
                    <b>Lựa chọn của bạn</b>
                    <p className="mt-2 whitespace-pre-line leading-relaxed">
                      {answerText(q, answers[q.id])}
                    </p>
                  </div>
                  <div
                    className={cn(
                      'rounded-xl border p-4 text-sm',
                      unresolved
                        ? 'border-warning/25 bg-warning/5'
                        : 'border-success/25 bg-success/5',
                    )}
                  >
                    <b>
                      {unresolved
                        ? 'Khóa tham khảo cần đối chiếu'
                        : 'Đáp án dùng để chấm bài'}
                    </b>
                    <p className="mt-2 whitespace-pre-line leading-relaxed">
                      {k?.summaryText || 'Không có khóa lưu cho câu này.'}
                    </p>
                  </div>
                  <div className="text-sm leading-relaxed">
                    <h3 className="font-bold">Vì sao chọn đáp án này?</h3>
                    <p className="mt-2 whitespace-pre-line text-foreground/85">
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
      </section>
    </main>
  );
}
