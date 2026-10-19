'use client';

import { useState } from 'react';
import {
  BookOpenCheck,
  BookOpenText,
  ChevronRight,
  Clock3,
  RotateCcw,
  Sparkles,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  ActiveSession,
  Attempt,
  Difficulty,
  difficultyLabel,
  EXAM_QUESTION_COUNT,
  Manifest,
  Topic,
  topicLabel,
} from '@/lib/quiz';
import { PracticePanel } from '@/components/quiz/practice-panel';
import { ExamPanel } from '@/components/quiz/exam-panel';
import { ReviewKeybook } from '@/components/quiz/question-review';
import { SidebarPanels } from '@/components/quiz/sidebar-panels';
import { HistoryPanel } from '@/components/quiz/history-panel';
import { LearningHub } from '@/components/learning/learning-hub';
import type { LearningSectionId } from '@/components/learning/location';
import type { LearningProgress } from '@/lib/learning-progress';
import { AlertTriangle, Headphones } from 'lucide-react';

type HomeMode = 'practice' | 'exam' | 'theory';

export function HomeScreen({
  manifest,
  keybook,
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
  learningProgress,
  onLearningProgress,
  onPracticeTopic,
  onStartTrapPractice,
  onStartLessonPractice,
  attempts,
  initialSection,
  pendingCount,
  onOpenPaper,
  onRetryIds,
  onRetryAll,
  onExport,
  onImportClick,
  onReset,
  importRef,
  onImportFile,
}: {
  manifest: Manifest;
  keybook: ReviewKeybook | null;
  stats: { seen: number; accuracy: number; sessions: number };
  homeMode: HomeMode;
  onHomeMode: (mode: HomeMode) => void;
  savedSession: ActiveSession | null;
  onResume: () => void;
  topic: Topic | 'all';
  onTopic: (topic: Topic | 'all') => void;
  difficulty: Difficulty | 'all';
  onDifficulty: (difficulty: Difficulty | 'all') => void;
  topicCount: (topic: Topic | 'all') => number;
  difficultyCount: (difficulty: Difficulty | 'all') => number;
  practiceTotal: number;
  error: string;
  loading: boolean;
  onStartPractice: () => void;
  onStartExam: () => void;
  learningProgress: LearningProgress;
  onLearningProgress: (next: LearningProgress) => void;
  onPracticeTopic: (topic: Topic) => void;
  onStartTrapPractice?: () => void;
  onStartLessonPractice?: (
    questionNumbers: number[],
    lessonTitle: string,
  ) => void;
  attempts: Attempt[];
  initialSection?: LearningSectionId;
  pendingCount: number;
  onOpenPaper: (id: string) => void;
  onRetryIds: (ids: string[]) => void;
  onRetryAll: () => void;
  onExport: () => void;
  onImportClick: () => void;
  onReset: () => void;
  importRef: React.RefObject<HTMLInputElement | null>;
  onImportFile: (file?: File) => void;
}) {
  // Yêu cầu mở một mục trong phần học tập. `nonce` tăng mỗi lần bấm để cùng
  // một mục vẫn mở lại được sau khi người học đã đi chỗ khác.
  const [jumpRequest, setJumpRequest] = useState<{
    section: LearningSectionId;
    nonce: number;
  }>({ section: initialSection ?? 'lecture', nonce: 0 });

  function openLearning(section: LearningSectionId) {
    onHomeMode('theory');
    setJumpRequest((current) => ({ section, nonce: current.nonce + 1 }));
    document
      .getElementById('learning-content')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-2.25rem))] pb-14">
      <header className="sticky top-0 z-40 -mx-4.5 flex h-20 items-center justify-between border-b border-border/70 bg-background/85 px-4.5 backdrop-blur-md">
        <a
          className="flex items-center gap-3 text-xl font-extrabold tracking-tight text-foreground no-underline"
          href="#top"
          aria-label="CertGenAI - Trang chủ"
        >
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

      {/* Phần mở đầu gọn lại: mặc định người học vào thẳng lý thuyết, nên
          banner không được chiếm mất màn hình đầu tiên. */}
      <section
        className="relative grid grid-cols-1 items-end gap-5 py-7 lg:grid-cols-[1fr_auto]"
        id="top"
      >
        <div
          aria-hidden="true"
          className="bg-hero-grid pointer-events-none absolute inset-0 -z-10"
        />
        <div>
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/10 text-primary"
          >
            <Sparkles size={12} /> CERTIPORT · GENERATIVE AI FOUNDATIONS
          </Badge>
          <h1 className="mt-3 mb-2 text-[clamp(26px,3.6vw,38px)] leading-[1.1] font-extrabold tracking-tight text-foreground">
            Ôn đúng cách. Thi{' '}
            <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              đúng chuẩn.
            </span>
          </h1>
          <p className="max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
            Học theo slide có nhịp, kiểm tra lại bằng {manifest.total} câu hỏi
            có đáp án và giải thích, rồi thi thử để biết mình đang ở đâu.
          </p>
        </div>

        {/* Mức sẵn sàng: một số liệu, đặt cạnh tiêu đề thay vì một thẻ riêng. */}
        <dl className="flex flex-wrap items-center gap-x-4 gap-y-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
          <div>
            <dt className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
              Mức sẵn sàng thi
            </dt>
            <dd className="mt-0.5 flex items-baseline gap-2">
              <b className="text-2xl font-extrabold tracking-tight text-primary tabular-nums">
                {stats.accuracy}%
              </b>
              <span className="text-[11px] text-muted-foreground tabular-nums">
                {stats.seen}/{manifest.total} câu
              </span>
            </dd>
          </div>
          <div className="hidden h-9 w-px bg-border sm:block" aria-hidden="true" />
          <div className="flex flex-wrap gap-1.5">
            <Button
              id="jump-to-lecture"
              size="sm"
              onClick={() => openLearning('lecture')}
              className="h-8 gap-1.5 text-xs font-semibold"
            >
              <Headphones size={13} />
              Vào học
            </Button>
            <Button
              id="jump-to-traps"
              size="sm"
              variant="outline"
              onClick={() => openLearning('traps')}
              className="h-8 gap-1.5 text-xs font-semibold"
            >
              <AlertTriangle size={13} className="text-destructive" />
              Câu dễ nhầm
            </Button>
            <Button
              id="jump-to-cram"
              size="sm"
              variant="outline"
              onClick={() => openLearning('cram')}
              className="h-8 gap-1.5 text-xs font-semibold"
            >
              <Zap size={13} className="text-warning" />
              Ôn nhanh
            </Button>
            <Button
              id="jump-to-references"
              size="sm"
              variant="outline"
              onClick={() => openLearning('references')}
              className="h-8 gap-1.5 text-xs font-semibold"
            >
              <BookOpenText size={13} /> Tài liệu
            </Button>
            <Button
              id="jump-to-saved-papers"
              size="sm"
              variant="ghost"
              onClick={() =>
                document
                  .getElementById('saved-papers')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="h-8 text-xs font-semibold text-muted-foreground"
            >
              Bài đã lưu · {pendingCount}
            </Button>
          </div>
        </dl>
      </section>

      <nav
        className="mb-6 grid grid-cols-1 gap-3 rounded-2xl border border-border bg-muted/60 p-1.5 sm:grid-cols-3"
        aria-label="Chọn hình thức học"
      >
        <button
          id="home-theory-tab"
          onClick={() => onHomeMode('theory')}
          className={cn(
            'flex min-h-[74px] items-center gap-3.5 rounded-xl border border-transparent px-5 py-3.5 text-left text-muted-foreground transition-all',
            homeMode === 'theory'
              ? 'border-border/80 bg-card text-info shadow-sm'
              : 'hover:bg-card/60 hover:text-foreground',
          )}
        >
          <BookOpenText className="size-6.5 shrink-0" />
          <span>
            <b
              className={cn(
                'block text-[15px] font-bold tracking-tight',
                homeMode === 'theory' ? 'text-info' : 'text-foreground',
              )}
            >
              Lý thuyết
            </b>
            <small className="mt-0.5 block text-[11px] text-muted-foreground">
              Bài giảng và ghi nhớ
            </small>
          </span>
        </button>
        <button
          id="home-practice-tab"
          onClick={() => onHomeMode('practice')}
          className={cn(
            'flex min-h-[74px] items-center gap-3.5 rounded-xl border border-transparent px-5 py-3.5 text-left text-muted-foreground transition-all',
            homeMode === 'practice'
              ? 'border-border/80 bg-card text-primary shadow-sm'
              : 'hover:bg-card/60 hover:text-foreground',
          )}
        >
          <BookOpenCheck className="size-6.5 shrink-0" />
          <span>
            <b
              className={cn(
                'block text-[15px] font-bold tracking-tight',
                homeMode === 'practice' ? 'text-primary' : 'text-foreground',
              )}
            >
              Luyện tập
            </b>
            <small className="mt-0.5 block text-[11px] text-muted-foreground">
              Học từng câu, giải thích tức thì · 164 câu có khóa IIG
            </small>
          </span>
        </button>
        <button
          id="home-exam-tab"
          onClick={() => onHomeMode('exam')}
          className={cn(
            'flex min-h-[74px] items-center gap-3.5 rounded-xl border border-transparent px-5 py-3.5 text-left text-muted-foreground transition-all',
            homeMode === 'exam'
              ? 'border-border/80 bg-card text-warning shadow-sm'
              : 'hover:bg-card/60 hover:text-foreground',
          )}
        >
          <Clock3 className="size-6.5 shrink-0" />
          <span>
            <b
              className={cn(
                'block text-[15px] font-bold tracking-tight',
                homeMode === 'exam' ? 'text-warning' : 'text-foreground',
              )}
            >
              Thi thử
            </b>
            <small className="mt-0.5 block text-[11px] text-muted-foreground">
              {EXAM_QUESTION_COUNT} câu · 50 phút · chuẩn 700/1000
            </small>
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
                Tiếp tục{' '}
                {savedSession.mode === 'exam'
                  ? 'bài kiểm tra mô phỏng'
                  : 'phiên tập luyện'}
              </b>
              <small className="mt-0.5 block text-[11px] text-muted-foreground">
                Đang ở câu {savedSession.index + 1}/{savedSession.count} ·{' '}
                {difficultyLabel[savedSession.difficulty]}
                {savedSession.topic && savedSession.topic !== 'all'
                  ? ` · ${topicLabel[savedSession.topic]}`
                  : ''}
              </small>
            </p>
          </div>
          <Button
            id="resume-session"
            className="w-full sm:w-auto"
            onClick={onResume}
          >
            Tiếp tục làm bài <ChevronRight size={16} />
          </Button>
        </section>
      )}

      <section
        className={cn(
          'grid items-start gap-6',
          homeMode === 'theory'
            ? 'grid-cols-1'
            : 'grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(300px,0.8fr)]',
        )}
      >
        <Card
          id="learning-content"
          className={cn(
            'scroll-mt-24',
            homeMode === 'theory' ? 'p-4 sm:p-6' : 'p-6 sm:p-8.5',
          )}
        >
          {homeMode === 'practice' ? (
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
              onStartTrapPractice={onStartTrapPractice}
              onOpenCurriculum={() => openLearning('lesson')}
            />
          ) : homeMode === 'exam' ? (
            <ExamPanel error={error} loading={loading} onStart={onStartExam} />
          ) : (
            <LearningHub
              manifest={manifest}
              keybook={keybook}
              progress={learningProgress}
              onProgress={onLearningProgress}
              jumpRequest={jumpRequest}
              onPracticeQuestionNumbers={onStartLessonPractice}
              onPracticeTopic={onPracticeTopic}
              onStartTrapPractice={onStartTrapPractice}
              onStartExam={onStartExam}
            />
          )}
        </Card>

        {homeMode !== 'theory' && (
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
        )}
      </section>

      {homeMode === 'theory' && (
        <section className="mt-8 max-w-4xl mx-auto">
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
      )}

      <HistoryPanel
        attempts={attempts}
        pendingCount={pendingCount}
        loading={loading}
        onOpen={onOpenPaper}
        onRetry={onRetryIds}
        onRetryAll={onRetryAll}
      />

      <footer className="mt-10 text-center text-xs text-muted-foreground">
        Hệ thống ôn thi GenAI Foundations · Chuẩn quốc tế IIG Certiport /
        Gmetrix · Dữ liệu lưu cục bộ
      </footer>
    </main>
  );
}
