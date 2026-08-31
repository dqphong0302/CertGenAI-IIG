import { ArrowLeft, Check, Clock3, Flag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Answer, isAnswered, Question } from "@/lib/quiz";

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
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-border bg-background/90 px-4 shadow-sm backdrop-blur-md sm:h-19 sm:gap-6 sm:px-6">
        <button
          id="summary-back-home"
          onClick={onExit}
          className="flex items-center gap-2 rounded-lg px-2 py-2 text-[13px] font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-3"
        >
          <ArrowLeft size={16} /> <span className="hidden sm:inline">Thoát</span>
        </button>
        <div className="hidden min-w-0 grid-cols-[auto_1fr] items-center gap-3.5 text-xs font-bold text-foreground sm:grid">
          <span className="truncate">
            Tổng quan bài kiểm tra ({answeredCount}/{questions.length} câu)
          </span>
          <ProgressBar value={(answeredCount / questions.length) * 100} />
        </div>
        <span className="min-w-0 truncate text-xs font-bold text-foreground sm:hidden">
          Tổng quan ({answeredCount}/{questions.length})
        </span>
        <div
          className={cn(
            "flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-extrabold tabular-nums sm:px-3.5",
            isTimeLow ? "animate-pulse border border-destructive/20 bg-destructive/10 text-destructive" : "bg-muted text-foreground",
          )}
        >
          <Clock3 size={16} />
          Còn {Math.floor(shownSeconds / 60).toString().padStart(2, "0")}:{(shownSeconds % 60).toString().padStart(2, "0")}
        </div>
      </header>

      <section className="mx-auto my-9 w-[min(800px,calc(100%-2.25rem))] rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-9.5">
        <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase">BẢNG TỔNG QUAN TRƯỚC KHI NỘP</span>
        <h1 className="mt-1.5 mb-2 text-[28px] font-extrabold tracking-tight text-foreground">Rà soát bài làm</h1>
        <p className="text-sm text-muted-foreground">
          Nhấp vào bất kỳ câu hỏi nào bên dưới để kiểm tra và thay đổi đáp án trước khi nộp bài.
        </p>

        <div className="my-6.5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="grid grid-cols-[34px_1fr] items-center gap-x-2.5 rounded-xl border border-border p-4">
            <Check size={22} className="row-span-2 text-success" />
            <b className="text-[22px] font-extrabold text-foreground">{answeredCount}</b>
            <span className="text-[11px] text-muted-foreground">Đã trả lời</span>
          </div>
          <div className="grid grid-cols-[34px_1fr] items-center gap-x-2.5 rounded-xl border border-border p-4">
            <X size={22} className="row-span-2 text-destructive" />
            <b className="text-[22px] font-extrabold text-foreground">{questions.length - answeredCount}</b>
            <span className="text-[11px] text-muted-foreground">Chưa làm</span>
          </div>
          <div className="grid grid-cols-[34px_1fr] items-center gap-x-2.5 rounded-xl border border-border p-4">
            <Flag size={22} className="row-span-2 text-warning" />
            <b className="text-[22px] font-extrabold text-foreground">{flaggedCount}</b>
            <span className="text-[11px] text-muted-foreground">Đã đánh dấu</span>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-2 rounded-xl border border-border bg-muted/40 p-5 sm:grid-cols-10">
          {questions.map((item, itemIndex) => (
            <button
              id={`summary-question-${itemIndex + 1}`}
              key={item.id}
              onClick={() => {
                onJump(itemIndex);
                onBack();
              }}
              className={cn(
                "relative aspect-square rounded-lg border text-[11px] font-bold transition-all",
                isAnswered(item, answers[item.id])
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
                reviewFlags[item.id] && "border-warning/40",
              )}
            >
              {itemIndex + 1}
              {reviewFlags[item.id] && <Flag size={9} className="absolute top-0.5 right-0.5 text-warning" />}
            </button>
          ))}
        </div>

        <div className="mt-6.5 flex justify-end gap-3">
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
