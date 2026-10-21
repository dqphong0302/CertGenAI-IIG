'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Flag, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Callout,
  StageEyebrow,
} from '@/components/shared/section-parts';
import { QuizTopBar, TimerPill } from '@/components/quiz/quiz-chrome';
import {
  Answer,
  AnswerReview,
  correctAnswerText,
  difficultyLabel,
  EXAM_DURATION_SECONDS,
  isAnswered,
  isCorrect,
  Learned,
  Question,
  topicLabel,
} from '@/lib/quiz';
import { QuestionInteraction } from '@/components/quiz/question-interaction';
import { ExamSummary } from '@/components/quiz/exam-summary';

interface KeybookEntry {
  correctAnswer: unknown;
  summaryText: string;
  explanation: string;
  review?: AnswerReview;
}

export function QuizScreen({
  questions,
  keybook,
  index,
  answers,
  checked,
  learned,
  mode,
  elapsed,
  strikes = 0,
  reviewFlags,
  onReviewFlags,
  onAnswer,
  onCheck,
  onIndex,
  onFinish,
  onExit,
}: {
  questions: Question[];
  keybook?: Record<string, KeybookEntry> | null;
  index: number;
  answers: Record<string, Answer>;
  checked: Record<string, boolean>;
  learned: Learned;
  mode: 'practice' | 'exam';
  elapsed: number;
  strikes?: number;
  reviewFlags: Record<string, boolean>;
  onReviewFlags: (
    value:
      | Record<string, boolean>
      | ((current: Record<string, boolean>) => Record<string, boolean>),
  ) => void;
  onAnswer: (answer: Answer) => void;
  onCheck: () => void;
  onIndex: (index: number) => void;
  onFinish: () => void;
  onExit: () => void;
}) {
  const setReviewFlags = onReviewFlags;
  const [showSummary, setShowSummary] = useState(false);
  const [filterMode, setFilterMode] = useState<'all' | 'open' | 'flagged'>(
    'all',
  );

  const question = questions[index];
  const answer = answers[question.id];
  const revealed = checked[question.id];
  const correct = revealed && isCorrect(question, answer);
  const answered = isAnswered(question, answer);

  const kbEntry = keybook ? keybook[question.id] : null;
  const explanationText = kbEntry?.explanation || question.explanation || '';
  const correctSummary = kbEntry?.summaryText || correctAnswerText(question);
  const unresolved = kbEntry?.review?.validatedAnswer === null;

  const shownSeconds =
    mode === 'exam' ? Math.max(0, EXAM_DURATION_SECONDS - elapsed) : elapsed;
  const isTimeLow = mode === 'exam' && shownSeconds < 300;

  const answeredCount = questions.filter((item) =>
    isAnswered(item, answers[item.id]),
  ).length;
  const flaggedCount = Object.values(reviewFlags).filter(Boolean).length;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLSelectElement
      )
        return;

      if (question.interaction.kind === 'single') {
        const options = question.interaction.options;
        let pickedIndex = -1;
        if (['1', '2', '3', '4'].includes(e.key)) {
          pickedIndex = parseInt(e.key, 10) - 1;
        } else if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
          pickedIndex = e.key.toLowerCase().charCodeAt(0) - 97;
        }
        if (pickedIndex >= 0 && pickedIndex < options.length) {
          onAnswer(options[pickedIndex].id);
        }
      }

      if (e.key === 'f' || e.key === 'F') {
        setReviewFlags((curr) => ({
          ...curr,
          [question.id]: !curr[question.id],
        }));
      }

      if (e.key === 'Enter' && mode === 'practice' && !revealed && answered) {
        onCheck();
      }

      if (e.key === 'ArrowLeft' && index > 0) {
        onIndex(index - 1);
      } else if (e.key === 'ArrowRight' && index < questions.length - 1) {
        onIndex(index + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    question,
    answered,
    revealed,
    mode,
    index,
    questions.length,
    onAnswer,
    onCheck,
    onIndex,
    setReviewFlags,
  ]);

  if (showSummary) {
    return (
      <ExamSummary
        questions={questions}
        answers={answers}
        reviewFlags={reviewFlags}
        answeredCount={answeredCount}
        flaggedCount={flaggedCount}
        shownSeconds={shownSeconds}
        isTimeLow={isTimeLow}
        onJump={onIndex}
        onBack={() => setShowSummary(false)}
        onExit={onExit}
        onFinish={onFinish}
      />
    );
  }

  const filteredQuestions = questions
    .map((item, qIdx) => ({ item, qIdx }))
    .filter(({ item }) => {
      if (filterMode === 'open') return !isAnswered(item, answers[item.id]);
      if (filterMode === 'flagged') return Boolean(reviewFlags[item.id]);
      return true;
    });

  return (
    <main className="min-h-screen bg-background select-none">
      <QuizTopBar
        exitId="exit-quiz"
        onExit={onExit}
        title={`Câu ${index + 1} / ${questions.length} · ${
          mode === 'practice' ? 'Tập luyện có giải thích' : 'Mô phỏng 50 phút'
        }`}
        shortTitle={`Câu ${index + 1}/${questions.length}`}
        progress={(answeredCount / questions.length) * 100}
      >
        {/* Huy hiệu chống gian lận: cho biết lớp bảo vệ đang bật và số cảnh báo. */}
        <div
          title={
            mode === 'exam'
              ? `Hệ thống Anti-Cheat đang bảo vệ bài thi (${strikes} cảnh báo)`
              : 'Dữ liệu được mã hóa Zero-Cleartext'
          }
          className={cn(
            'hidden items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] font-bold transition-colors md:flex',
            mode === 'exam'
              ? strikes > 0
                ? 'animate-pulse border-destructive/30 bg-destructive/10 text-destructive'
                : 'border-primary/30 bg-primary/10 text-primary'
              : 'border-border bg-muted/60 text-muted-foreground',
          )}
        >
          <ShieldCheck
            size={14}
            className={strikes > 0 ? 'text-destructive' : 'text-primary'}
          />
          <span>
            {mode === 'exam'
              ? strikes > 0
                ? `Cảnh báo: ${strikes}/3`
                : 'Anti-Cheat Bật'
              : 'Bảo vệ'}
          </span>
        </div>

        <TimerPill
          seconds={shownSeconds}
          low={isTimeLow}
          prefix={mode === 'exam' ? 'Còn' : undefined}
        />
        <ThemeToggle />
      </QuizTopBar>

      <section className="mx-auto my-7 grid w-[min(1180px,calc(100%-2.25rem))] grid-cols-1 items-start gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="rounded-2xl border border-border bg-card p-5 shadow-sm lg:sticky lg:top-25 lg:max-h-[calc(100vh-7.5rem)]">
          <StageEyebrow className="text-primary">Bản đồ câu hỏi</StageEyebrow>

          <fieldset className="m-0 mt-2.5 flex gap-1 rounded-lg border-0 bg-muted p-0.5">
            <legend className="sr-only">Lọc câu hỏi trong bản đồ</legend>
            {(
              [
                ['all', 'Tất cả', questions.length],
                ['open', 'Chưa làm', questions.length - answeredCount],
                ['flagged', 'Cờ', flaggedCount],
              ] as const
            ).map(([value, label, count]) => (
              <button
                key={value}
                type="button"
                aria-pressed={filterMode === value}
                onClick={() => setFilterMode(value)}
                className={cn(
                  'flex-1 rounded-md px-1.5 py-1.5 text-[11.5px] font-bold text-muted-foreground transition-colors',
                  filterMode === value && 'bg-card text-foreground shadow-sm',
                )}
              >
                {label} <span className="tabular-nums">({count})</span>
              </button>
            ))}
          </fieldset>

          <div className="my-3.5 flex gap-2 overflow-x-auto pb-1.5 lg:grid lg:max-h-[calc(100vh-17.5rem)] lg:grid-cols-4 lg:overflow-x-visible lg:overflow-y-auto lg:pr-0.5 lg:pb-0">
            {filteredQuestions.map(({ item, qIdx }) => (
              <button
                id={`jump-${qIdx + 1}`}
                key={item.id}
                aria-label={`Câu ${qIdx + 1}${learned[item.id] ? ' đã thành thạo' : ''}`}
                onClick={() => onIndex(qIdx)}
                className={cn(
                  'relative aspect-square size-9 shrink-0 rounded-lg border text-[12px] font-bold tabular-nums transition-colors lg:size-auto',
                  qIdx === index
                    ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/30'
                    : isAnswered(item, answers[item.id])
                      ? 'border-primary/30 bg-primary/10 text-primary'
                      : learned[item.id]
                        ? 'border-success/30 bg-success/10 text-success'
                        : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary',
                )}
              >
                {qIdx + 1}
                {reviewFlags[item.id] && (
                  <span className="absolute top-0.5 right-0.5 size-1.5 rounded-full bg-warning" />
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 border-t border-border/70 pt-2.5 text-[12px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <i className="inline-block size-2 rounded-sm bg-primary" /> Đang
              xem
            </span>
            <span className="flex items-center gap-1">
              <i className="inline-block size-2 rounded-sm border border-primary/30 bg-primary/10" />{' '}
              Đã làm
            </span>
            <span className="flex items-center gap-1">
              <i className="inline-block size-2 rounded-sm bg-warning" /> Cờ
            </span>
          </div>
        </aside>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-9.5">
          <div className="flex flex-wrap items-center gap-2 text-[12.5px] text-muted-foreground sm:gap-2.5">
            <Badge variant="outline" className="whitespace-nowrap">
              {difficultyLabel[question.difficulty]}
            </Badge>
            <span className="rounded-md bg-primary/10 px-2 py-1 font-bold whitespace-nowrap text-primary">
              {topicLabel[question.topic]}
            </span>
            <span className="hidden whitespace-nowrap sm:inline">
              {question.source}
            </span>
            <button
              id="flag-question"
              onClick={() =>
                setReviewFlags((current) => ({
                  ...current,
                  [question.id]: !current[question.id],
                }))
              }
              className={cn(
                'ml-auto flex h-9 shrink-0 items-center gap-1.5 rounded-lg border px-3 text-[12.5px] font-bold whitespace-nowrap transition-colors',
                reviewFlags[question.id]
                  ? 'border-warning/30 bg-warning/10 text-warning'
                  : 'border-border bg-transparent text-muted-foreground hover:bg-muted',
              )}
            >
              <Flag size={14} />
              <span>{reviewFlags[question.id] ? 'Đã gắn cờ' : 'Gắn cờ'}</span>
            </button>
          </div>

          <h1 className="my-5.5 text-[clamp(1.2rem,2.2vw,1.6rem)] leading-[1.4] font-extrabold tracking-tight whitespace-pre-line text-foreground text-pretty select-none">
            {question.prompt}
          </h1>

          {question.images.map((src) => (
            <img
              key={src}
              src={src}
              alt="Hình minh họa cho câu hỏi"
              width={900}
              height={600}
              loading="lazy"
              draggable={false}
              className="mx-auto mb-6 block max-h-[420px] max-w-full rounded-xl border border-border object-contain shadow-sm pointer-events-none select-none"
            />
          ))}

          <QuestionInteraction
            question={question}
            answer={answer}
            disabled={revealed && mode === 'practice'}
            onAnswer={onAnswer}
          />

          {unresolved && (
            <Callout
              tone="caution"
              title={kbEntry?.review?.label ?? 'Khóa cần đối chiếu'}
              className="mt-4"
            >
              Câu này được đối chiếu với khóa tham khảo khi tính điểm; xem giải
              thích để biết các đáp án hợp lý hoặc dữ kiện còn thiếu.
            </Callout>
          )}

          {revealed && (
            <Callout
              tone={correct ? 'success' : 'trap'}
              title={
                correct
                  ? unresolved
                    ? 'Khớp khóa tham khảo'
                    : 'Đúng theo khóa IIG'
                  : unresolved
                    ? 'Chưa khớp khóa tham khảo'
                    : 'Chưa đúng theo khóa IIG'
              }
              className="mt-6 animate-in fade-in"
            >
              {!correct && correctSummary && (
                <p className="whitespace-pre-line">
                  <b>{unresolved ? 'Khóa tham khảo:' : 'Đáp án IIG:'}</b>{' '}
                  {correctSummary}
                </p>
              )}
              {explanationText && (
                <p className="mt-2 whitespace-pre-line">{explanationText}</p>
              )}
            </Callout>
          )}

          <div className="mt-7.5 flex flex-col gap-2.5 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Button
              id="previous-question"
              variant="outline"
              disabled={index === 0}
              onClick={() => onIndex(index - 1)}
            >
              <ArrowLeft size={16} /> Câu trước
            </Button>
            <div className="flex flex-wrap gap-2.5">
              {mode === 'exam' && (
                <Button
                  id="exam-summary"
                  variant="outline"
                  onClick={() => setShowSummary(true)}
                >
                  Bảng tổng quan
                </Button>
              )}
              {mode === 'practice' && !revealed && (
                <Button
                  id="check-answer"
                  disabled={!answered}
                  onClick={onCheck}
                >
                  Kiểm tra đáp án
                </Button>
              )}
              {index < questions.length - 1 ? (
                <Button id="next-question" onClick={() => onIndex(index + 1)}>
                  Câu tiếp <ArrowRight size={16} />
                </Button>
              ) : mode === 'exam' ? (
                <Button id="review-exam" onClick={() => setShowSummary(true)}>
                  Xem tổng quan & Nộp bài
                </Button>
              ) : (
                <Button id="finish-quiz" onClick={onFinish}>
                  Hoàn thành phiên học
                </Button>
              )}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
