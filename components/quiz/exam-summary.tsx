import { ArrowLeft, Check, Flag, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  StageHeading,
  StatTile,
} from '@/components/shared/section-parts';
import { QuizTopBar, TimerPill } from '@/components/quiz/quiz-chrome';
import { Answer, isAnswered, Question } from '@/lib/quiz';

export function ExamSummary({
  questions,
  answers,
  reviewFlags,
  answeredCount,
  flaggedCount,
  shownSeconds,
  isTimeLow,
  onJump,
  onBack,
  onExit,
  onFinish,
}: {
  questions: Question[];
  answers: Record<string, Answer>;
  reviewFlags: Record<string, boolean>;
  answeredCount: number;
  flaggedCount: number;
  shownSeconds: number;
  isTimeLow: boolean;
  onJump: (index: number) => void;
  onBack: () => void;
  onExit: () => void;
  onFinish: () => void;
}) {
  return (
    <main className="min-h-screen bg-background select-none">
      <QuizTopBar
        exitId="summary-back-home"
        onExit={onExit}
        title={`Tổng quan bài kiểm tra (${answeredCount}/${questions.length} câu)`}
        shortTitle={`Tổng quan (${answeredCount}/${questions.length})`}
        progress={(answeredCount / questions.length) * 100}
      >
        <TimerPill seconds={shownSeconds} low={isTimeLow} prefix="Còn" />
      </QuizTopBar>

      <section className="mx-auto my-9 w-[min(800px,calc(100%-2.25rem))] space-y-5 rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-9">
        <StageHeading
          level={1}
          eyebrow="Bảng tổng quan trước khi nộp"
          eyebrowClassName="text-primary"
          title="Rà soát bài làm"
          lead="Nhấp vào bất kỳ câu hỏi nào bên dưới để kiểm tra và thay đổi đáp án trước khi nộp bài."
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <StatTile
            icon={<Check size={20} />}
            value={answeredCount}
            label="Đã trả lời"
            toneClassName="text-success"
          />
          <StatTile
            icon={<X size={20} />}
            value={questions.length - answeredCount}
            label="Chưa làm"
            toneClassName="text-destructive"
          />
          <StatTile
            icon={<Flag size={20} />}
            value={flaggedCount}
            label="Đã đánh dấu"
            toneClassName="text-warning"
          />
        </div>

        <div className="grid grid-cols-6 gap-2 rounded-xl border border-border/70 bg-muted/35 p-5 sm:grid-cols-10">
          {questions.map((item, itemIndex) => (
            <button
              id={`summary-question-${itemIndex + 1}`}
              key={item.id}
              type="button"
              aria-label={`Câu ${itemIndex + 1}${reviewFlags[item.id] ? ' đã gắn cờ' : ''}`}
              onClick={() => {
                onJump(itemIndex);
                onBack();
              }}
              className={cn(
                'relative aspect-square rounded-lg border text-[12px] font-bold tabular-nums transition-colors',
                isAnswered(item, answers[item.id])
                  ? 'border-primary/30 bg-primary/10 text-primary'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary',
                reviewFlags[item.id] && 'border-warning/40',
              )}
            >
              {itemIndex + 1}
              {reviewFlags[item.id] && (
                <Flag
                  size={9}
                  className="absolute top-0.5 right-0.5 text-warning"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 border-t border-border/70 pt-5 sm:flex-row sm:justify-end">
          <Button id="return-to-exam" variant="outline" onClick={onBack}>
            <ArrowLeft size={16} /> Quay lại làm bài
          </Button>
          <Button id="submit-exam" onClick={onFinish}>
            Nộp bài kiểm tra
          </Button>
        </div>
      </section>
    </main>
  );
}
