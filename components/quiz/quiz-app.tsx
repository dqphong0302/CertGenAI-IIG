"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";
import {
  ActiveSession,
  Answer,
  Attempt,
  Difficulty,
  EXAM_POINTS_PER_QUESTION,
  EXAM_QUESTION_COUNT,
  isCorrect,
  Learned,
  Manifest,
  Progress,
  Question,
  shuffle,
  STORAGE,
  Topic,
} from "@/lib/quiz";
import { decryptPayload } from "@/lib/crypto";
import { useAntiCheat } from "@/hooks/use-anticheat";
import { AntiCheatModal } from "@/components/quiz/anticheat-modal";
import { HomeScreen } from "@/components/quiz/home-screen";
import { QuizScreen } from "@/components/quiz/quiz-screen";
import { ResultScreen } from "@/components/quiz/result-screen";
import { LoadingScreen } from "@/components/quiz/loading-screen";

type Screen = "home" | "quiz" | "result";
type TheoryLearningProgress = Partial<Record<Topic, { visited: number[]; last: number }>>;
type KeybookEntry = {
  correctAnswer: unknown;
  summaryText: string;
  explanation: string;
};

const safeRead = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;
  try {
    return JSON.parse(localStorage.getItem(key) || "") as T;
  } catch {
    return fallback;
  }
};

async function loadChunkQuestions(file: string): Promise<Question[]> {
  const response = await fetch(file);
  if (!response.ok) throw new Error("Không thể tải tệp dữ liệu: " + file);
  if (file.endsWith(".enc")) {
    const cipherBase64 = await response.text();
    return await decryptPayload<Question[]>(cipherBase64);
  }
  return (await response.json()) as Question[];
}

export function QuizApp() {
  const [manifest, setManifest] = useState<Manifest | null>(null);
  const [keybook, setKeybook] = useState<Record<string, KeybookEntry> | null>(null);
  const [screen, setScreen] = useState<Screen>("home");
  const [mode, setMode] = useState<"practice" | "exam">("practice");
  const [homeMode, setHomeMode] = useState<"practice" | "exam" | "theory">("practice");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const [topic, setTopic] = useState<Topic | "all">("all");
  const [theoryTopic, setTheoryTopic] = useState<Topic>("methods");
  const [theorySlide, setTheorySlide] = useState(0);
  const [theoryProgress, setTheoryProgress] = useState<TheoryLearningProgress>({});
  const [count, setCount] = useState(10);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [index, setIndex] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [progress, setProgress] = useState<Progress>({});
  const [learned, setLearned] = useState<Learned>({});
  const [result, setResult] = useState<Attempt | null>(null);
  const [activeChunks, setActiveChunks] = useState<string[]>([]);
  const [savedSession, setSavedSession] = useState<ActiveSession | null>(null);
  const importRef = useRef<HTMLInputElement>(null);

  // Anti-Cheat Engine integration.
  // Chỉ bật lớp chặn thao tác khi đang làm bài; màn hình Trang chủ / Lý thuyết
  // vẫn dùng được chuột phải, copy, Ctrl+P, Ctrl+S như bình thường.
  const isQuizActive = screen === "quiz";
  const isExamActive = isQuizActive && mode === "exam";
  const {
    strikes,
    maxStrikes,
    isWarningOpen,
    warningReason,
    isAutomated,
    automationReason,
    showWarning,
    dismissWarning,
    resetStrikes,
    restoreStrikes,
    requestFullscreen,
    exitFullscreen,
  } = useAntiCheat({
    enabled: isQuizActive,
    isExamMode: isExamActive,
    maxStrikes: 3,
    // Nhận số vi phạm cuối từ hook: state `strikes` chưa commit tại thời điểm này.
    onMaxStrikesReached: (finalStrikes) => submitQuiz(finalStrikes),
  });

  useEffect(() => {
    Promise.all([
      fetch("/data/manifest.json").then((r) =>
        r.ok ? (r.json() as Promise<Manifest>) : Promise.reject(new Error("Không tải được dữ liệu"))
      ),
      fetch("/data/keybook.enc")
        .then((r) => (r.ok ? r.text() : ""))
        .then((cipher) => (cipher ? decryptPayload<Record<string, KeybookEntry>>(cipher) : null))
        .catch(() => null),
    ])
      .then(([manifestData, keybookData]) => {
        setManifest(manifestData);
        if (keybookData) setKeybook(keybookData);

        setAttempts(safeRead(STORAGE.attempts, []));
        setProgress(safeRead(STORAGE.progress, {}));
        setLearned(safeRead(STORAGE.learned, {}));
        setTheoryProgress(safeRead(STORAGE.theory, {}));
        const storedSession = safeRead<ActiveSession | null>(STORAGE.active, null);
        const availableFiles = new Set(manifestData.chunks.map((chunk) => chunk.file));
        const currentExamFormat =
          !storedSession || storedSession.mode !== "exam" || storedSession.count === EXAM_QUESTION_COUNT;
        if (storedSession && currentExamFormat && storedSession.chunkFiles.every((file) => availableFiles.has(file))) {
          setSavedSession(storedSession);
        } else {
          localStorage.removeItem(STORAGE.active);
        }
      })
      .catch(() => setError("Không thể tải danh mục câu hỏi đã mã hóa."))
      .finally(() => setLoading(false));
  }, []);

  function recordTheoryView(selectedTopic: Topic, selectedSlide: number) {
    setTheoryProgress((current) => {
      const previous = current[selectedTopic] || { visited: [], last: 0 };
      if (previous.last === selectedSlide && previous.visited.includes(selectedSlide)) return current;
      const next = {
        ...current,
        [selectedTopic]: {
          last: selectedSlide,
          visited: [...new Set([...previous.visited, selectedSlide])].sort((a, b) => a - b),
        },
      };
      localStorage.setItem(STORAGE.theory, JSON.stringify(next));
      return next;
    });
  }

  function openTheorySlide(selectedTopic: Topic, selectedSlide: number) {
    setTheoryTopic(selectedTopic);
    setTheorySlide(selectedSlide);
    recordTheoryView(selectedTopic, selectedSlide);
  }

  function selectHomeMode(nextMode: "practice" | "exam" | "theory") {
    setHomeMode(nextMode);
    if (nextMode === "theory") recordTheoryView(theoryTopic, theorySlide);
  }

  useEffect(() => {
    if (screen !== "quiz" || !startedAt) return;
    const timer = window.setInterval(() => setElapsed(Math.floor((Date.now() - startedAt) / 1000)), 1000);
    return () => window.clearInterval(timer);
  }, [screen, startedAt]);

  useEffect(() => {
    if (screen !== "quiz" || !questions.length || !activeChunks.length) return;
    const save = () => {
      const session: ActiveSession = {
        version: 1,
        mode,
        difficulty,
        topic,
        count: questions.length,
        chunkFiles: activeChunks,
        questionIds: questions.map((question) => question.id),
        answers,
        checked,
        index,
        elapsed: Math.max(0, Math.floor((Date.now() - startedAt) / 1000)),
        strikes,
      };
      localStorage.setItem(STORAGE.active, JSON.stringify(session));
    };
    save();
    const timer = window.setInterval(save, 5000);
    return () => window.clearInterval(timer);
  }, [screen, questions, activeChunks, answers, checked, index, mode, difficulty, topic, startedAt, strikes]);

  const stats = useMemo(() => {
    const values = Object.values(progress);
    const seen = new Set([
      ...Object.entries(progress)
        .filter(([, item]) => item.seen > 0)
        .map(([id]) => id),
      ...Object.keys(learned),
    ]).size;
    const correct = values.reduce((sum, item) => sum + item.correct, 0);
    const total = values.reduce((sum, item) => sum + item.seen, 0);
    return {
      seen,
      accuracy: total ? Math.round((correct / total) * 100) : 0,
      sessions: attempts.length,
    };
  }, [attempts, progress, learned]);

  async function startQuiz(overrides?: {
    mode?: "practice" | "exam";
    difficulty?: Difficulty | "all";
    topic?: Topic | "all";
    count?: number;
    specificQuestionIds?: string[];
  }) {
    if (!manifest) return;
    const quizMode = overrides?.mode ?? mode;
    const quizDifficulty = overrides?.difficulty ?? difficulty;
    const quizTopic = overrides?.topic ?? topic;
    const quizCount = overrides?.count ?? count;
    const specificIds = overrides?.specificQuestionIds;

    setLoading(true);
    setError("");
    resetStrikes();

    try {
      let selected: Question[] = [];
      let chunkFiles: string[] = [];

      if (specificIds && specificIds.length > 0) {
        const allChunkFiles = manifest.chunks.map((c) => c.file);
        const loaded = (
          await Promise.all(allChunkFiles.map((file) => loadChunkQuestions(file)))
        ).flat();
        const idSet = new Set(specificIds);
        selected = loaded.filter((q) => idSet.has(q.id));
        chunkFiles = allChunkFiles;
      } else {
        const levels: Difficulty[] = quizDifficulty === "all" ? ["easy", "medium", "hard"] : [quizDifficulty];
        const eligible = manifest.chunks.filter(
          (chunk) => levels.includes(chunk.difficulty) && (quizTopic === "all" || chunk.topic === quizTopic)
        );
        const picked =
          quizMode === "exam"
            ? levels.flatMap((level) => shuffle(eligible.filter((chunk) => chunk.difficulty === level)).slice(0, 1))
            : [];
        let totalAvailable = picked.reduce((sum, item) => sum + item.count, 0);
        const rest = shuffle(eligible.filter((chunk) => !picked.some((item) => item.id === chunk.id)));
        while (totalAvailable < quizCount && rest.length) {
          const next = rest.shift()!;
          picked.push(next);
          totalAvailable += next.count;
        }
        const loaded = (
          await Promise.all(picked.map((chunk) => loadChunkQuestions(chunk.file)))
        ).flat();
        selected = shuffle(loaded).slice(0, Math.min(quizCount, loaded.length));
        chunkFiles = picked.map((chunk) => chunk.file);
      }

      // Attach explanations if in practice mode from keybook
      if (keybook) {
        selected = selected.map((q) => {
          const kb = keybook[q.id];
          return kb
            ? {
                ...q,
                explanation: kb.explanation,
              }
            : q;
        });
      }

      setMode(quizMode);
      setDifficulty(quizDifficulty);
      setTopic(quizTopic);
      setCount(selected.length);
      setQuestions(selected);
      setActiveChunks(chunkFiles);
      setAnswers({});
      setChecked({});
      setIndex(0);
      setElapsed(0);
      setStartedAt(Date.now());
      setResult(null);
      setScreen("quiz");

      const session: ActiveSession = {
        version: 1,
        mode: quizMode,
        difficulty: quizDifficulty,
        topic: quizTopic,
        count: selected.length,
        chunkFiles,
        questionIds: selected.map((question) => question.id),
        answers: {},
        checked: {},
        index: 0,
        elapsed: 0,
        strikes: 0,
      };
      localStorage.setItem(STORAGE.active, JSON.stringify(session));
      setSavedSession(session);
    } catch {
      setError("Không thể tải và giải mã gói câu hỏi. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  async function resumeQuiz() {
    if (!savedSession) return;
    // Gọi đồng bộ trong cú click, trước mọi await, nếu không trình duyệt sẽ từ chối.
    if (savedSession.mode === "exam") requestFullscreen();
    setLoading(true);
    setError("");
    try {
      const loaded = (
        await Promise.all(savedSession.chunkFiles.map((file) => loadChunkQuestions(file)))
      ).flat();
      const byId = new Map(loaded.map((question) => [question.id, question]));
      let restored = savedSession.questionIds
        .map((id) => byId.get(id))
        .filter((question): question is Question => Boolean(question));
      if (!restored.length) throw new Error("Empty session");

      if (keybook) {
        restored = restored.map((q) => {
          const kb = keybook[q.id];
          return kb ? { ...q, explanation: kb.explanation } : q;
        });
      }

      setMode(savedSession.mode);
      setDifficulty(savedSession.difficulty);
      setTopic(savedSession.topic || "all");
      setCount(savedSession.count);
      setQuestions(restored);
      setActiveChunks(savedSession.chunkFiles);
      setAnswers(savedSession.answers);
      setChecked(savedSession.checked);
      setIndex(Math.min(savedSession.index, restored.length - 1));
      setElapsed(savedSession.elapsed);
      setStartedAt(Date.now() - savedSession.elapsed * 1000);
      // Khôi phục số vi phạm đã ghi nhận: tải lại trang không xóa được lịch sử vi phạm.
      restoreStrikes(savedSession.strikes ?? 0);
      setScreen("quiz");
    } catch {
      setError("Không thể khôi phục phiên học trước.");
    } finally {
      setLoading(false);
    }
  }

  function updateAnswer(answer: Answer) {
    const question = questions[index];
    setAnswers((current) => ({ ...current, [question.id]: answer }));
    setChecked((current) => ({ ...current, [question.id]: false }));
  }

  function markCurrentQuestionLearned() {
    const question = questions[index];
    const nextLearned = {
      ...learned,
      [question.id]: {
        at: new Date().toISOString(),
        correct: isCorrect(question, answers[question.id]),
      },
    };
    localStorage.setItem(STORAGE.learned, JSON.stringify(nextLearned));
    setLearned(nextLearned);
    setChecked((value) => ({ ...value, [question.id]: true }));
  }

  function exitQuiz() {
    exitFullscreen();
    const session = safeRead<ActiveSession | null>(STORAGE.active, null);
    setSavedSession(session);
    setScreen("home");
  }

  // onFinish được nối trực tiếp vào onClick nên finishQuiz phải không nhận tham số
  // (nếu không MouseEvent sẽ bị truyền vào chỗ strikeCount).
  function finishQuiz() {
    submitQuiz(strikes);
  }

  function submitQuiz(strikeCount: number) {
    exitFullscreen();
    // Populate full explanations and summaries from keybook for the review screen
    let finalQuestions = questions;
    if (keybook) {
      finalQuestions = questions.map((q) => {
        const kb = keybook[q.id];
        return kb
          ? {
              ...q,
              explanation: kb.explanation,
            }
          : q;
      });
      setQuestions(finalQuestions);
    }

    const correct = finalQuestions.filter((question) => isCorrect(question, answers[question.id])).length;
    const wrongQuestions = finalQuestions.filter((question) => !isCorrect(question, answers[question.id]));
    const finished: Attempt = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      mode,
      difficulty,
      topic,
      total: finalQuestions.length,
      correct,
      percent: Math.round((correct / finalQuestions.length) * 100),
      duration: Math.max(1, Math.floor((Date.now() - startedAt) / 1000)),
      wrongIds: wrongQuestions.map((question) => question.id),
      strikes: strikeCount,
      ...(mode === "exam"
        ? {
            pointsPerQuestion: EXAM_POINTS_PER_QUESTION,
            estimatedScore: correct * EXAM_POINTS_PER_QUESTION,
          }
        : {}),
    };
    const nextProgress = { ...progress };
    finalQuestions.forEach((question) => {
      const previous = nextProgress[question.id] || { seen: 0, correct: 0, lastAt: "" };
      nextProgress[question.id] = {
        seen: previous.seen + 1,
        correct: previous.correct + (isCorrect(question, answers[question.id]) ? 1 : 0),
        lastAt: finished.date,
      };
    });
    const nextAttempts = [finished, ...attempts].slice(0, 50);
    localStorage.setItem(STORAGE.attempts, JSON.stringify(nextAttempts));
    localStorage.setItem(STORAGE.progress, JSON.stringify(nextProgress));
    localStorage.removeItem(STORAGE.active);
    setAttempts(nextAttempts);
    setProgress(nextProgress);
    setSavedSession(null);
    setResult(finished);
    setChecked(Object.fromEntries(finalQuestions.map((q) => [q.id, true])));
    setScreen("result");
  }

  function resetData() {
    if (!confirm("Xóa toàn bộ lịch sử học trên trình duyệt này?")) return;
    Object.values(STORAGE).forEach((key) => localStorage.removeItem(key));
    setAttempts([]);
    setProgress({});
    setLearned({});
    setTheoryProgress({});
    setSavedSession(null);
    setResult(null);
  }

  function exportData() {
    const blob = new Blob(
      [
        JSON.stringify(
          {
            version: 1,
            exportedAt: new Date().toISOString(),
            attempts,
            progress,
            learned,
            theoryProgress,
          },
          null,
          2
        ),
      ],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `certgenai-backup-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function importData(file?: File) {
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (!Array.isArray(data.attempts) || typeof data.progress !== "object") throw new Error();
      localStorage.setItem(STORAGE.attempts, JSON.stringify(data.attempts));
      localStorage.setItem(STORAGE.progress, JSON.stringify(data.progress));
      const importedLearned = typeof data.learned === "object" && data.learned ? data.learned : {};
      const importedTheory = typeof data.theoryProgress === "object" && data.theoryProgress ? data.theoryProgress : {};
      localStorage.setItem(STORAGE.learned, JSON.stringify(importedLearned));
      localStorage.setItem(STORAGE.theory, JSON.stringify(importedTheory));
      setAttempts(data.attempts);
      setProgress(data.progress);
      setLearned(importedLearned);
      setTheoryProgress(importedTheory);
    } catch {
      alert("Tệp sao lưu không hợp lệ.");
    }
  }

  if (loading && !manifest) return <LoadingScreen />;
  if (!manifest) {
    return (
      <main className="mx-auto flex min-h-screen w-[min(1180px,calc(100%-2.25rem))] items-center justify-center">
        <div className="flex items-center gap-2.5 rounded-xl border border-destructive/25 bg-destructive/10 px-5 py-4 text-sm font-medium text-destructive">
          <X size={18} />
          {error || "Không có dữ liệu."}
        </div>
      </main>
    );
  }

  const topicCount = (selectedTopic: Topic | "all") =>
    selectedTopic === "all"
      ? difficulty === "all"
        ? manifest.total
        : manifest.counts[difficulty]
      : difficulty === "all"
        ? manifest.topicCounts[selectedTopic].total
        : manifest.topicCounts[selectedTopic].counts[difficulty];

  const difficultyCount = (selectedDifficulty: Difficulty | "all") =>
    topic === "all"
      ? selectedDifficulty === "all"
        ? manifest.total
        : manifest.counts[selectedDifficulty]
      : selectedDifficulty === "all"
        ? manifest.topicCounts[topic].total
        : manifest.topicCounts[topic].counts[selectedDifficulty];

  const practiceTotal = topicCount(topic);

  return (
    <>
      <AntiCheatModal
        isOpen={isWarningOpen}
        strikes={strikes}
        maxStrikes={maxStrikes}
        reason={warningReason}
        onDismiss={dismissWarning}
      />

      {screen === "quiz" && (
        <QuizScreen
          questions={questions}
          keybook={keybook}
          index={index}
          answers={answers}
          checked={checked}
          learned={learned}
          mode={mode}
          elapsed={elapsed}
          strikes={strikes}
          onAnswer={updateAnswer}
          onCheck={markCurrentQuestionLearned}
          onIndex={setIndex}
          onFinish={finishQuiz}
          onExit={exitQuiz}
        />
      )}

      {screen === "result" && result && (
        <ResultScreen
          result={result}
          questions={questions}
          answers={answers}
          onReview={() => {
            setIndex(0);
            setScreen("quiz");
          }}
          onRetryWrong={() => {
            if (result.wrongIds && result.wrongIds.length > 0) {
              void startQuiz({ mode: "practice", specificQuestionIds: result.wrongIds });
            }
          }}
          onHome={() => setScreen("home")}
        />
      )}

      {screen === "home" && (
        <HomeScreen
          manifest={manifest}
          stats={stats}
          homeMode={homeMode}
          onHomeMode={selectHomeMode}
          savedSession={savedSession}
          onResume={resumeQuiz}
          topic={topic}
          onTopic={setTopic}
          difficulty={difficulty}
          onDifficulty={setDifficulty}
          topicCount={topicCount}
          difficultyCount={difficultyCount}
          practiceTotal={practiceTotal}
          error={error}
          loading={loading}
          onStartPractice={() =>
            startQuiz({ mode: "practice", topic, count: practiceTotal })
          }
          onStartExam={() => {
            // Phải nằm trong handler của cú click, trước await, để giữ user activation.
            requestFullscreen();
            if (isAutomated) showWarning(automationReason);
            void startQuiz({
              mode: "exam",
              difficulty: "all",
              topic: "all",
              count: EXAM_QUESTION_COUNT,
            });
          }}
          theoryTopic={theoryTopic}
          theorySlide={theorySlide}
          theoryProgress={theoryProgress}
          onTheoryTopic={(nextTopic) => openTheorySlide(nextTopic, theoryProgress[nextTopic]?.last || 0)}
          onTheorySlide={(nextSlide) => openTheorySlide(theoryTopic, nextSlide)}
          onTheoryPractice={() => {
            setTopic(theoryTopic);
            setDifficulty("all");
            setHomeMode("practice");
          }}
          attempts={attempts}
          onExport={exportData}
          onImportClick={() => importRef.current?.click()}
          onReset={resetData}
          importRef={importRef}
          onImportFile={importData}
        />
      )}
    </>
  );
}
