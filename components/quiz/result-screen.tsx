"use client";

import { useState } from "react";
import { Check, RotateCcw, Target, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Answer,
  Attempt,
  difficultyLabel,
  EXAM_MAX_SCORE,
  EXAM_PASS_SCORE,
  EXAM_POINTS_PER_QUESTION,
  isCorrect,
  Question,
} from "@/lib/quiz";

export function ResultScreen({
  result,
  questions,
  answers,
  onReview,
  onRetryWrong,
  onHome,
}: {
  result: Attempt;
  questions: Question[];
  answers: Record<string, Answer>;
  onReview: () => void;
  onRetryWrong: () => void;
  onHome: () => void;
}) {
  const [filterReview, setFilterReview] = useState<"all" | "wrong" | "right">("all");

  const examScore = result.estimatedScore ?? result.correct * EXAM_POINTS_PER_QUESTION;
  const passed = examScore >= EXAM_PASS_SCORE;
  const wrongCount = result.wrongIds ? result.wrongIds.length : result.total - result.correct;

  const filteredQuestions = questions.filter((q) => {
    const isRight = isCorrect(q, answers[q.id]);
    if (filterReview === "wrong") return !isRight;
    if (filterReview === "right") return isRight;
    return true;
  });

  return (
    <main className="mx-auto my-11 w-[min(920px,calc(100%-2.25rem))]">
      <section className="rounded-2xl border border-border bg-card p-7 text-center shadow-lg sm:p-11">
        <span className="mx-auto mb-4 grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
          <Target size={28} />
        </span>
        <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase">
          {result.mode === "exam" ? "KẾT QUẢ KIỂM TRA MÔ PHỎNG IIG" : "HOÀN THÀNH PHIÊN TẬP LUYỆN"}
        </span>
        <h1 className="mt-1.5 mb-6 text-[28px] font-extrabold tracking-tight text-foreground">
          {result.mode === "exam"
            ? passed
              ? "Chúc mừng! Bạn đã đạt mốc điểm dự kiến."
              : `Bạn chưa đạt mốc dự kiến ${EXAM_PASS_SCORE} điểm.`
            : result.percent >= 80
            ? "Xuất sắc! Bạn nắm rất vững kiến thức."
            : result.percent >= 60
            ? "Tốt! Bạn đang tiến bộ rõ rệt."
            : "Hãy luyện tập thêm để củng cố kiến thức."}
        </h1>

        <div
          className="mx-auto mb-4 grid size-40 place-items-center rounded-full shadow-md"
          style={
            {
              "--score": `${result.percent * 3.6}deg`,
              backgroundImage: "conic-gradient(var(--primary) var(--score), var(--muted) 0)",
            } as React.CSSProperties
          }
        >
          <div className="grid size-32 place-items-center rounded-full bg-card">
            <b className="text-4xl font-extrabold tracking-tight text-foreground">
              {result.mode === "exam" ? examScore : `${result.percent}%`}
            </b>
            <span className="text-[11px] font-semibold text-muted-foreground">
              {result.mode === "exam" ? `/ ${EXAM_MAX_SCORE}` : "chính xác"}
            </span>
          </div>
        </div>

        {result.mode === "exam" && (
          <>
            <p
              className={cn(
                "mx-auto mb-2 inline-block rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-wide",
                passed ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive",
              )}
            >
              {passed ? "ĐẠT MỐC DỰ KIẾN" : "CHƯA ĐẠT"} · CHUẨN {EXAM_PASS_SCORE}/{EXAM_MAX_SCORE}
            </p>
            <p className="mx-auto max-w-md text-[11px] text-muted-foreground">
              Quy ước mô phỏng: 20 điểm/câu đúng. Chứng chỉ IIG Certiport có thể dùng thuật toán chuẩn hóa điểm riêng.
            </p>
          </>
        )}

        <div className="mx-auto my-7.5 grid max-w-[600px] grid-cols-1 gap-3 rounded-xl bg-muted/40 py-4.5 sm:grid-cols-3 sm:gap-0">
          <div className="border-t border-border pt-3 sm:border-t-0 sm:border-l sm:pt-0 sm:first:border-l-0 sm:first:border-t-0">
            <b className="text-xl font-extrabold text-foreground">
              {result.correct}/{result.total}
            </b>
            <span className="mt-0.5 block text-[11px] text-muted-foreground">Số câu làm đúng</span>
          </div>
          <div className="border-t border-border pt-3 sm:border-t-0 sm:border-l sm:pt-0">
            <b className="text-xl font-extrabold text-foreground">
              {Math.floor(result.duration / 60)}:{(result.duration % 60).toString().padStart(2, "0")}
            </b>
            <span className="mt-0.5 block text-[11px] text-muted-foreground">Thời gian làm bài</span>
          </div>
          <div className="border-t border-border pt-3 sm:border-t-0 sm:border-l sm:pt-0">
            <b className="text-xl font-extrabold text-foreground">
              {result.mode === "exam" ? `${result.percent}%` : difficultyLabel[result.difficulty]}
            </b>
            <span className="mt-0.5 block text-[11px] text-muted-foreground">
              {result.mode === "exam" ? "Tỷ lệ đúng" : "Độ khó"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {wrongCount > 0 && (
            <Button id="retry-wrong-btn" onClick={onRetryWrong}>
              <RotateCcw size={16} /> Luyện lại {wrongCount} câu sai ngay
            </Button>
          )}
          <Button id="review-results" variant="outline" onClick={onReview}>
            Xem lại chi tiết bài làm
          </Button>
          <Button id="back-home" variant="outline" onClick={onHome}>
            Về trang chủ
          </Button>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-border bg-card p-7 shadow-sm">
        <div className="mb-4.5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="m-0 text-lg font-extrabold text-foreground">Danh sách câu hỏi trong đề ({questions.length})</h2>
          <div className="flex gap-1.5 rounded-lg bg-muted p-1">
            <button
              onClick={() => setFilterReview("all")}
              className={cn(
                "rounded-md px-2.5 py-1 text-[11px] font-bold text-muted-foreground transition-colors",
                filterReview === "all" && "bg-card text-foreground shadow-sm",
              )}
            >
              Tất cả ({questions.length})
            </button>
            <button
              onClick={() => setFilterReview("wrong")}
              className={cn(
                "rounded-md px-2.5 py-1 text-[11px] font-bold text-muted-foreground transition-colors",
                filterReview === "wrong" && "bg-card text-foreground shadow-sm",
              )}
            >
              Câu sai ({wrongCount})
            </button>
            <button
              onClick={() => setFilterReview("right")}
              className={cn(
                "rounded-md px-2.5 py-1 text-[11px] font-bold text-muted-foreground transition-colors",
                filterReview === "right" && "bg-card text-foreground shadow-sm",
              )}
            >
              Câu đúng ({result.correct})
            </button>
          </div>
        </div>

        {filteredQuestions.map((question, qIndex) => {
          const isRight = isCorrect(question, answers[question.id]);
          return (
            <button
              type="button"
              key={question.id}
              onClick={onReview}
              className="grid w-full grid-cols-[32px_1fr_auto] items-center gap-3 rounded-lg border-t border-border bg-transparent py-3.5 text-left transition-colors first:border-t-0 hover:bg-muted/60"
            >
              <span
                className={cn(
                  "grid size-7 place-items-center rounded-lg",
                  isRight ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive",
                )}
              >
                {isRight ? <Check size={16} /> : <X size={16} />}
              </span>
              <p className="m-0 text-[13px] leading-relaxed text-foreground">
                <b className="mr-1.5 inline-block text-muted-foreground">Câu {qIndex + 1}:</b>
                {question.prompt}
              </p>
              <Badge variant="outline">{difficultyLabel[question.difficulty]}</Badge>
            </button>
          );
        })}
      </section>
    </main>
  );
}
