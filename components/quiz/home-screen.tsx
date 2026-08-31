"use client";

import { BookOpenCheck, BookOpenText, ChevronRight, Clock3, RotateCcw, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ActiveSession,
  Attempt,
  Difficulty,
  difficultyLabel,
  EXAM_QUESTION_COUNT,
  Manifest,
  Topic,
  topicLabel,
} from "@/lib/quiz";
import { THEORY_TOTAL } from "@/lib/theory";
import { PracticePanel } from "@/components/quiz/practice-panel";
import { ExamPanel } from "@/components/quiz/exam-panel";
import { TheoryWorkspace } from "@/components/quiz/theory-workspace";
import { SidebarPanels } from "@/components/quiz/sidebar-panels";
import { HistoryPanel } from "@/components/quiz/history-panel";

type HomeMode = "practice" | "exam" | "theory";
type TheoryLearningProgress = Partial<Record<Topic, { visited: number[]; last: number }>>;

export function HomeScreen({
  manifest,
  stats,
  homeMode,
  onHomeMode,
  savedSession,
  onResume,
  topic,
  onTopic,
  difficulty,
  onDifficulty,
  topicCount,
  difficultyCount,
  practiceTotal,
  error,
  loading,
  onStartPractice,
  onStartExam,
  theoryTopic,
  theorySlide,
  theoryProgress,
  onTheoryTopic,
  onTheorySlide,
  onTheoryPractice,
  attempts,
  onExport,
  onImportClick,
  onReset,
  importRef,
  onImportFile,
}: {
  manifest: Manifest;
  stats: { seen: number; accuracy: number; sessions: number };
  homeMode: HomeMode;
  onHomeMode: (mode: HomeMode) => void;
  savedSession: ActiveSession | null;
  onResume: () => void;
  topic: Topic | "all";
  onTopic: (topic: Topic | "all") => void;
  difficulty: Difficulty | "all";
  onDifficulty: (difficulty: Difficulty | "all") => void;
  topicCount: (topic: Topic | "all") => number;
  difficultyCount: (difficulty: Difficulty | "all") => number;
  practiceTotal: number;
  error: string;
  loading: boolean;
  onStartPractice: () => void;
  onStartExam: () => void;
  theoryTopic: Topic;
  theorySlide: number;
  theoryProgress: TheoryLearningProgress;
  onTheoryTopic: (topic: Topic) => void;
  onTheorySlide: (slide: number) => void;
  onTheoryPractice: () => void;
  attempts: Attempt[];
  onExport: () => void;
  onImportClick: () => void;
  onReset: () => void;
  importRef: React.RefObject<HTMLInputElement | null>;
  onImportFile: (file?: File) => void;
}) {
  return (
    <main className="mx-auto w-[min(1180px,calc(100%-2.25rem))] pb-14">
      <header className="sticky top-0 z-40 -mx-5 flex h-20 items-center justify-between border-b border-border/70 bg-background/85 px-5 backdrop-blur-md">
        <a className="flex items-center gap-3 text-xl font-extrabold tracking-tight text-foreground no-underline" href="#top" aria-label="CertGenAI - Trang chủ">
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-teal-400 to-teal-700 text-white shadow-lg shadow-primary/25 dark:from-teal-300 dark:to-teal-600">
            <Sparkles size={20} />
          </span>
          <span>
            Cert<b className="text-primary">GenAI</b>
          </span>
        </a>
        <div className="flex items-center gap-3">
          <span className="hidden rounded-full bg-muted px-3.5 py-1.5 text-xs font-semibold text-muted-foreground sm:inline-block">
            {manifest.total} câu hỏi chuẩn hóa
          </span>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground/80 shadow-sm">
            <span className="size-2 rounded-full bg-success" />
            Lưu trên thiết bị
          </div>
          <ThemeToggle />
        </div>
      </header>

      <section className="relative grid grid-cols-1 items-center gap-9 py-9 lg:grid-cols-[1fr_260px]" id="top">
        <div aria-hidden="true" className="bg-hero-grid pointer-events-none absolute inset-0 -z-10" />
        <div>
          <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">
            <Sparkles size={12} /> CERTIPORT · GENERATIVE AI FOUNDATIONS
          </Badge>
          <h1 className="mt-3.5 mb-2.5 text-[clamp(32px,4.5vw,48px)] leading-[1.08] font-extrabold tracking-tight text-foreground">
            Ôn đúng cách. Thi{" "}
            <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">đúng chuẩn.</span>
          </h1>
          <p className="max-w-[620px] text-[15px] leading-relaxed text-muted-foreground">
            Hệ thống {THEORY_TOTAL} slide lý thuyết chuyên sâu và ngân hàng 175 câu hỏi thi chuẩn hóa IIG Certiport. Tập luyện
            giải thích tức thì hoặc thi thử áp lực thời gian 50 phút.
          </p>
        </div>
        <Card className="p-5.5 text-left shadow-md">
          <span className="block text-[11px] font-bold tracking-wide text-muted-foreground uppercase">MỨC SẴN SÀNG THI</span>
          <b className="my-1.5 block text-[34px] font-extrabold tracking-tight text-primary">{stats.accuracy}%</b>
          <ProgressBar value={stats.accuracy} />
          <small className="mt-2.5 block text-[11px] font-medium text-muted-foreground">
            Dựa trên {stats.seen}/{manifest.total} câu đã luyện tập
          </small>
        </Card>
      </section>

      <nav className="mb-6 grid grid-cols-1 gap-3 rounded-2xl border border-border bg-muted/60 p-1.5 sm:grid-cols-3" aria-label="Chọn hình thức học">
        <button
          id="home-practice-tab"
          onClick={() => onHomeMode("practice")}
          className={cn(
            "flex min-h-[74px] items-center gap-3.5 rounded-xl border border-transparent px-5 py-3.5 text-left text-muted-foreground transition-all",
            homeMode === "practice"
              ? "border-border/80 bg-card text-primary shadow-sm"
              : "hover:bg-card/60 hover:text-foreground",
          )}
        >
          <BookOpenCheck className="size-6.5 shrink-0" />
          <span>
            <b className={cn("block text-[15px] font-bold tracking-tight", homeMode === "practice" ? "text-primary" : "text-foreground")}>
              Tập luyện
            </b>
            <small className="mt-0.5 block text-[11px] text-muted-foreground">Học từng câu, giải thích tức thì</small>
          </span>
        </button>
        <button
          id="home-exam-tab"
          onClick={() => onHomeMode("exam")}
          className={cn(
            "flex min-h-[74px] items-center gap-3.5 rounded-xl border border-transparent px-5 py-3.5 text-left text-muted-foreground transition-all",
            homeMode === "exam"
              ? "border-border/80 bg-card text-warning shadow-sm"
              : "hover:bg-card/60 hover:text-foreground",
          )}
        >
          <Clock3 className="size-6.5 shrink-0" />
          <span>
            <b className={cn("block text-[15px] font-bold tracking-tight", homeMode === "exam" ? "text-warning" : "text-foreground")}>
              Kiểm tra mô phỏng
            </b>
            <small className="mt-0.5 block text-[11px] text-muted-foreground">
              {EXAM_QUESTION_COUNT} câu · 50 phút · chuẩn 700/1000
            </small>
          </span>
        </button>
        <button
          id="home-theory-tab"
          onClick={() => onHomeMode("theory")}
          className={cn(
            "flex min-h-[74px] items-center gap-3.5 rounded-xl border border-transparent px-5 py-3.5 text-left text-muted-foreground transition-all",
            homeMode === "theory"
              ? "border-border/80 bg-card text-info shadow-sm"
              : "hover:bg-card/60 hover:text-foreground",
          )}
        >
          <BookOpenText className="size-6.5 shrink-0" />
          <span>
            <b className={cn("block text-[15px] font-bold tracking-tight", homeMode === "theory" ? "text-info" : "text-foreground")}>
              Lý thuyết vi mô
            </b>
            <small className="mt-0.5 block text-[11px] text-muted-foreground">{THEORY_TOTAL} slide · 4 nhóm kiến thức</small>
          </span>
        </button>
      </nav>

      {savedSession && (
        <section className="mb-6 flex animate-in fade-in flex-col items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3.5">
            <span className="grid size-[42px] shrink-0 place-items-center rounded-lg bg-card text-primary shadow-sm">
              <RotateCcw size={20} />
            </span>
            <p className="m-0">
              <b className="text-sm font-bold text-foreground">
                Tiếp tục {savedSession.mode === "exam" ? "bài kiểm tra mô phỏng" : "phiên tập luyện"}
              </b>
              <small className="mt-0.5 block text-[11px] text-muted-foreground">
                Đang ở câu {savedSession.index + 1}/{savedSession.count} · {difficultyLabel[savedSession.difficulty]}
                {savedSession.topic && savedSession.topic !== "all" ? ` · ${topicLabel[savedSession.topic]}` : ""}
              </small>
            </p>
          </div>
          <Button id="resume-session" className="w-full sm:w-auto" onClick={onResume}>
            Tiếp tục làm bài <ChevronRight size={16} />
          </Button>
        </section>
      )}

      <section className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(300px,0.8fr)]">
        <Card className="p-6 sm:p-8.5">
          {homeMode === "practice" ? (
            <PracticePanel
              topic={topic}
              onTopic={onTopic}
              difficulty={difficulty}
              onDifficulty={onDifficulty}
              topicCount={topicCount}
              difficultyCount={difficultyCount}
              practiceTotal={practiceTotal}
              error={error}
              loading={loading}
              onStart={onStartPractice}
            />
          ) : homeMode === "exam" ? (
            <ExamPanel error={error} loading={loading} onStart={onStartExam} />
          ) : (
            <TheoryWorkspace
              key={`${theoryTopic}-${theorySlide}`}
              topic={theoryTopic}
              slideIndex={theorySlide}
              progress={theoryProgress}
              onTopic={onTheoryTopic}
              onSlide={onTheorySlide}
              onPractice={onTheoryPractice}
            />
          )}
        </Card>

        <SidebarPanels
          seen={stats.seen}
          total={manifest.total}
          accuracy={stats.accuracy}
          sessions={stats.sessions}
          onExport={onExport}
          onImportClick={onImportClick}
          onReset={onReset}
          importRef={importRef}
          onImportFile={onImportFile}
        />
      </section>

      <HistoryPanel attempts={attempts} />

      <footer className="mt-10 text-center text-xs text-muted-foreground">
        Hệ thống ôn thi GenAI Foundations · Chuẩn quốc tế IIG Certiport / Gmetrix · Dữ liệu lưu cục bộ
      </footer>
    </main>
  );
}
