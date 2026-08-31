"use client";

import { BookOpenCheck, Check, ChevronRight, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Difficulty, difficultyLabel, Topic, topicLabel } from "@/lib/quiz";

const TOPICS: (Topic | "all")[] = ["all", "methods", "prompting", "verification", "responsible"];
const DIFFICULTIES: (Difficulty | "all")[] = ["all", "easy", "medium", "hard"];

export function PracticePanel({
  topic,
  onTopic,
  difficulty,
  onDifficulty,
  topicCount,
  difficultyCount,
  practiceTotal,
  error,
  loading,
  onStart,
}: {
  topic: Topic | "all";
  onTopic: (topic: Topic | "all") => void;
  difficulty: Difficulty | "all";
  onDifficulty: (difficulty: Difficulty | "all") => void;
  topicCount: (topic: Topic | "all") => number;
  difficultyCount: (difficulty: Difficulty | "all") => number;
  practiceTotal: number;
  error: string;
  loading: boolean;
  onStart: () => void;
}) {
  return (
    <>
      <div className="mb-7 grid grid-cols-[54px_1fr] items-start gap-4.5">
        <span className="grid size-[54px] place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-sm">
          <BookOpenCheck size={26} />
        </span>
        <div>
          <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase">
            TẬP LUYỆN CÓ HƯỚNG DẪN
          </span>
          <h2 className="mt-0.5 text-2xl font-extrabold tracking-tight text-foreground">Chọn nội dung muốn luyện tập</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Không giới hạn thời gian. Kiểm tra đáp án, đọc phân tích và lưu câu đã thành thạo ngay sau mỗi câu.
          </p>
        </div>
      </div>

      <fieldset className="m-0 mb-6 border-0 p-0">
        <legend className="mb-3 text-[13px] font-bold text-foreground/80">1. Chọn nhóm nội dung</legend>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {TOPICS.map((item) => (
            <button
              id={`topic-${item}`}
              key={item}
              onClick={() => onTopic(item)}
              className={cn(
                "flex min-h-13 items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left text-[13px] font-bold transition-all",
                item === "all" && "sm:col-span-2",
                topic === item
                  ? "border-primary bg-primary/[0.06] text-primary ring-1 ring-primary"
                  : "border-border bg-card text-foreground/80 hover:border-primary/40 hover:bg-primary/5",
              )}
            >
              <span>{topicLabel[item]}</span>
              <small
                className={cn(
                  "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium",
                  topic === item ? "bg-card text-primary" : "bg-muted text-muted-foreground",
                )}
              >
                {topicCount(item)} câu
              </small>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="m-0 mb-6 border-0 p-0">
        <legend className="mb-3 text-[13px] font-bold text-foreground/80">2. Chọn độ khó</legend>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {DIFFICULTIES.map((level) => (
            <button
              id={`difficulty-${level}`}
              key={level}
              onClick={() => onDifficulty(level)}
              className={cn(
                "min-h-13 rounded-lg border px-2.5 py-2 text-center text-[13px] font-bold transition-all",
                difficulty === level
                  ? "border-primary bg-primary/[0.06] text-primary ring-1 ring-primary"
                  : "border-border bg-card text-foreground/80 hover:border-primary/40 hover:bg-primary/5",
              )}
            >
              {difficultyLabel[level]}
              <small className="mt-0.5 block text-[10px] font-medium text-muted-foreground">
                {difficultyCount(level)} câu
              </small>
            </button>
          ))}
        </div>
      </fieldset>

      {error && <p className="mb-4 text-sm text-destructive">{error}</p>}

      <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-success/25 bg-success/10 px-4.5 py-3.5 text-[13px] text-success">
        <Check size={18} className="shrink-0" />
        <span>
          Sẵn sàng luyện toàn bộ <b>{practiceTotal} câu hỏi</b> · {topicLabel[topic]} · {difficultyLabel[difficulty]}
        </span>
      </div>

      <Button
        id="start-practice"
        className="h-13 w-full text-[15px] font-bold shadow-lg shadow-primary/25"
        onClick={onStart}
        disabled={loading || practiceTotal === 0}
      >
        {loading ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <>
            <span>Bắt đầu tập luyện {practiceTotal} câu</span>
            <ChevronRight size={18} />
          </>
        )}
      </Button>
    </>
  );
}
