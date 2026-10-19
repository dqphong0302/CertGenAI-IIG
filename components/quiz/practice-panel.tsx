"use client";

import { BookOpenCheck, Check, ChevronRight, LoaderCircle, Zap } from "lucide-react";
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
  onStartTrapPractice,
  onOpenCurriculum,
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
  onStartTrapPractice?: () => void;
  onOpenCurriculum?: () => void;
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

      {/* Quick shortcuts banner grid */}
      <div className="mb-6 grid gap-3 sm:grid-cols-2">
        {onOpenCurriculum && (
          <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent p-4 flex flex-col justify-between gap-3 shadow-xs">
            <div className="space-y-1">
              <b className="text-[13px] font-bold text-sky-800 dark:text-sky-300 flex items-center gap-1.5">
                <BookOpenCheck size={15} className="text-sky-600 dark:text-sky-400" />
                Sổ tay 19 Bài học Pearson
              </b>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Xem lý thuyết chi tiết, bẫy câu hỏi nhiễu và luyện tập theo từng bài học cụ thể.
              </p>
            </div>
            <Button
              id="open-curriculum-quick-btn"
              size="sm"
              variant="outline"
              onClick={onOpenCurriculum}
              className="border-sky-500/40 text-sky-700 hover:bg-sky-500/10 dark:text-sky-300 font-bold self-start text-xs h-7.5"
            >
              Mở 19 bài học
            </Button>
          </div>
        )}

        {onStartTrapPractice && (
          <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-4 flex flex-col justify-between gap-3 shadow-xs">
            <div className="space-y-1">
              <b className="text-[13px] font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                <Zap size={15} className="fill-amber-500 text-amber-500" />
                Luyện 16 câu bẫy IIG
              </b>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Tập trung ôn các câu gây bẫy nhiều nhất (Shot, Reverse prompting, PII, Bias...).
              </p>
            </div>
            <Button
              id="start-trap-quick-btn"
              size="sm"
              onClick={onStartTrapPractice}
              className="border-amber-500/40 bg-amber-600 hover:bg-amber-700 text-white font-bold self-start text-xs h-7.5 shadow-sm dark:bg-amber-500 dark:text-stone-950 dark:hover:bg-amber-600"
            >
              Luyện 16 câu bẫy
            </Button>
          </div>
        )}
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
