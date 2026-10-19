'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
import {
  ActiveSession,
  Answer,
  Attempt,
  calculateQuestionCredit,
  Difficulty,
  EXAM_MAX_SCORE,
  EXAM_POINTS_PER_QUESTION,
  EXAM_QUESTION_COUNT,
  isCorrect,
  isAnswered,
  Learned,
  Manifest,
  Progress,
  Question,
  shuffle,
  STORAGE,
  Topic,
} from '@/lib/quiz';
import { decryptPayload } from '@/lib/crypto';
import { fetchTraps } from '@/lib/api/client';
import {
  emptyLearningProgress,
  migrateLearningProgress,
  readLearningProgress,
  withConceptSlideSeen,
  writeLearningProgress,
  type LearningProgress,
} from '@/lib/learning-progress';
import { useAntiCheat } from '@/hooks/use-anticheat';
import { AntiCheatModal } from '@/components/quiz/anticheat-modal';
import { HomeScreen } from '@/components/quiz/home-screen';
import { QuizScreen } from '@/components/quiz/quiz-screen';
import { ResultScreen } from '@/components/quiz/result-screen';
import {
  isAttempt,
  isSavedPaper,
  mergeAttempts,
  mistakeIds,
  readPapers,
  writePapers,
  SavedKey,
  SavedPaper,
} from '@/lib/learning-store';
import { LoadingScreen } from '@/components/quiz/loading-screen';
import type { LearningSectionId } from '@/components/learning/location';

type Screen = 'home' | 'quiz' | 'result';
type KeybookEntry = SavedKey;

const safeRead = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  try {
    return JSON.parse(localStorage.getItem(key) || '') as T;
  } catch {
    return fallback;
  }
};

async function loadChunkQuestions(file: string): Promise<Question[]> {
  const response = await fetch(file);
  if (!response.ok) throw new Error('Không thể tải tệp dữ liệu: ' + file);
  if (file.endsWith('.enc')) {
    const cipherBase64 = await response.text();
    return await decryptPayload<Question[]>(cipherBase64);
  }
  return (await response.json()) as Question[];
}

export function QuizApp() {
  const [manifest, setManifest] = useState<Manifest | null>(null);
  const [keybook, setKeybook] = useState<Record<string, KeybookEntry> | null>(
    null,
  );
  const [screen, setScreen] = useState<Screen>('home');
  const [mode, setMode] = useState<'practice' | 'exam'>('practice');
  // Mở thẳng phần lý thuyết: học trước rồi mới luyện là thứ tự đúng, và đó
  // cũng là phần người học quay lại nhiều nhất giữa hai lần thi thử.
  const [homeMode, setHomeMode] = useState<'practice' | 'exam' | 'theory'>(
    'theory',
  );
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all');
  const [topic, setTopic] = useState<Topic | 'all'>('all');
  const [learningProgress, setLearningProgress] = useState<LearningProgress>(
    emptyLearningProgress,
  );
  const [count, setCount] = useState(10);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [index, setIndex] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [progress, setProgress] = useState<Progress>({});
  const [learned, setLearned] = useState<Learned>({});
  const [result, setResult] = useState<Attempt | null>(null);
  const [activeChunks, setActiveChunks] = useState<string[]>([]);
  const [savedSession, setSavedSession] = useState<ActiveSession | null>(null);
  const [papers, setPapers] = useState<SavedPaper[]>([]);
  const [resultPaper, setResultPaper] = useState<SavedPaper | null>(null);
  const [saveStatus, setSaveStatus] = useState<'saving' | 'saved' | 'error'>(
    'saved',
  );
  const [storageError, setStorageError] = useState('');
  const [reviewFlags, setReviewFlags] = useState<Record<string, boolean>>({});
  const [initialSection, setInitialSection] =
    useState<LearningSectionId>('lecture');
  const submitting = useRef(false);
  const unsavedPaperIds = useRef(new Set<string>());
  const importRef = useRef<HTMLInputElement>(null);

  // Anti-Cheat Engine integration.
  // Chỉ bật lớp chặn thao tác khi đang làm bài; màn hình Trang chủ / Lý thuyết
  // vẫn dùng được chuột phải, copy, Ctrl+P, Ctrl+S như bình thường.
  const isQuizActive = screen === 'quiz';
  const isExamActive = isQuizActive && mode === 'exam';
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
      fetch('/data/manifest.json').then((r) =>
        r.ok
          ? (r.json() as Promise<Manifest>)
          : Promise.reject(new Error('Không tải được dữ liệu')),
      ),
      fetch('/data/keybook.enc')
        .then((r) => (r.ok ? r.text() : ''))
        .then((cipher) =>
          cipher ? decryptPayload<Record<string, KeybookEntry>>(cipher) : null,
        )
        .catch(() => null),
    ])
      .then(async ([manifestData, keybookData]) => {
        setManifest(manifestData);
        if (keybookData) setKeybook(keybookData);

        const legacy = safeRead<Attempt[]>(STORAGE.attempts, []);
        try {
          const saved = await readPapers();
          setPapers(saved);
          setAttempts(mergeAttempts(legacy, saved));
        } catch {
          setAttempts(legacy);
          setStorageError(
            'Không mở được kho bài làm. Bạn vẫn có thể học; hãy xuất bản sao sau khi làm bài nếu trình duyệt không cho lưu.',
          );
        }
        setProgress(safeRead(STORAGE.progress, {}));
        setLearned(safeRead(STORAGE.learned, {}));
        setLearningProgress(readLearningProgress());
        const storedSession = safeRead<ActiveSession | null>(
          STORAGE.active,
          null,
        );
        const availableFiles = new Set(
          manifestData.chunks.map((chunk) => chunk.file),
        );
        const currentExamFormat =
          !storedSession ||
          storedSession.mode !== 'exam' ||
          storedSession.count === EXAM_QUESTION_COUNT;
        if (
          storedSession &&
          currentExamFormat &&
          storedSession.chunkFiles.every((file) => availableFiles.has(file))
        ) {
          setSavedSession(storedSession);
        } else {
          localStorage.removeItem(STORAGE.active);
        }
      })
      .catch(() => setError('Không thể tải danh mục câu hỏi đã mã hóa.'))
      .finally(() => setLoading(false));
  }, []);

  function updateLearningProgress(next: LearningProgress) {
    setLearningProgress(next);
    writeLearningProgress(next);
  }

  function selectHomeMode(nextMode: 'practice' | 'exam' | 'theory') {
    setHomeMode(nextMode);
  }

  useEffect(() => {
    if (screen !== 'quiz' || !startedAt) return;
    const timer = window.setInterval(
      () => setElapsed(Math.floor((Date.now() - startedAt) / 1000)),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [screen, startedAt]);

  useEffect(() => {
    if (screen !== 'quiz' || !questions.length || !activeChunks.length) return;
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
        reviewFlags,
      };
      try {
        localStorage.setItem(STORAGE.active, JSON.stringify(session));
      } catch {
        setStorageError(
          'Chưa lưu được bài đang làm. Trình duyệt có thể đã đầy hoặc chặn lưu dữ liệu.',
        );
      }
    };
    save();
    const timer = window.setInterval(save, 5000);
    window.addEventListener('pagehide', save);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener('pagehide', save);
    };
  }, [
    screen,
    questions,
    activeChunks,
    answers,
    checked,
    index,
    mode,
    difficulty,
    topic,
    startedAt,
    strikes,
    reviewFlags,
  ]);

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
    mode?: 'practice' | 'exam';
    difficulty?: Difficulty | 'all';
    topic?: Topic | 'all';
    count?: number;
    specificQuestionIds?: string[];
    specificQuestionNumbers?: number[];
  }) {
    if (!manifest) return;
    const quizMode = overrides?.mode ?? mode;
    const quizDifficulty = overrides?.difficulty ?? difficulty;
    const quizTopic = overrides?.topic ?? topic;
    const quizCount = overrides?.count ?? count;
    const specificIds = overrides?.specificQuestionIds;
    const specificNumbers = overrides?.specificQuestionNumbers;

    setLoading(true);
    setError('');
    resetStrikes();

    try {
      let selected: Question[] = [];
      let chunkFiles: string[] = [];

      if (specificNumbers && specificNumbers.length > 0) {
        const allChunkFiles = manifest.chunks.map((c) => c.file);
        const loaded = (
          await Promise.all(
            allChunkFiles.map((file) => loadChunkQuestions(file)),
          )
        ).flat();
        const numSet = new Set(specificNumbers);
        selected = loaded.filter((q) => numSet.has(q.number));
        selected.sort((a, b) => a.number - b.number);
        chunkFiles = allChunkFiles;
      } else if (specificIds && specificIds.length > 0) {
        const allChunkFiles = manifest.chunks.map((c) => c.file);
        const loaded = (
          await Promise.all(
            allChunkFiles.map((file) => loadChunkQuestions(file)),
          )
        ).flat();
        const idSet = new Set(specificIds);
        selected = loaded.filter((q) => idSet.has(q.id));
        chunkFiles = allChunkFiles;
      } else {
        const levels: Difficulty[] =
          quizDifficulty === 'all'
            ? ['easy', 'medium', 'hard']
            : [quizDifficulty];
        const eligible = manifest.chunks.filter(
          (chunk) =>
            levels.includes(chunk.difficulty) &&
            (quizTopic === 'all' || chunk.topic === quizTopic),
        );
        const picked =
          quizMode === 'exam'
            ? [...eligible]
            : [];
        let totalAvailable = picked.reduce((sum, item) => sum + item.count, 0);
        const rest = shuffle(
          eligible.filter(
            (chunk) => !picked.some((item) => item.id === chunk.id),
          ),
        );
        while (totalAvailable < quizCount && rest.length) {
          const next = rest.shift()!;
          picked.push(next);
          totalAvailable += next.count;
        }
        const loaded = (
          await Promise.all(
            picked.map((chunk) => loadChunkQuestions(chunk.file)),
          )
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
      setReviewFlags({});
      submitting.current = false;
      setIndex(0);
      setElapsed(0);
      setStartedAt(Date.now());
      setResult(null);
      setResultPaper(null);
      setScreen('quiz');

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
      try {
        localStorage.setItem(STORAGE.active, JSON.stringify(session));
      } catch {
        setStorageError(
          'Chưa lưu được bài đang làm. Hãy xuất bản sao trước khi đóng trang.',
        );
      }
      setSavedSession(session);
    } catch {
      setError('Không thể tải và giải mã gói câu hỏi. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  }

  async function resumeQuiz() {
    if (!savedSession) return;
    // Gọi đồng bộ trong cú click, trước mọi await, nếu không trình duyệt sẽ từ chối.
    if (savedSession.mode === 'exam') requestFullscreen();
    setLoading(true);
    setError('');
    try {
      const loaded = (
        await Promise.all(
          savedSession.chunkFiles.map((file) => loadChunkQuestions(file)),
        )
      ).flat();
      const byId = new Map(loaded.map((question) => [question.id, question]));
      let restored = savedSession.questionIds
        .map((id) => byId.get(id))
        .filter((question): question is Question => Boolean(question));
      if (!restored.length) throw new Error('Empty session');

      if (keybook) {
        restored = restored.map((q) => {
          const kb = keybook[q.id];
          return kb ? { ...q, explanation: kb.explanation } : q;
        });
      }

      setMode(savedSession.mode);
      setDifficulty(savedSession.difficulty);
      setTopic(savedSession.topic || 'all');
      setCount(savedSession.count);
      setQuestions(restored);
      setActiveChunks(savedSession.chunkFiles);
      setAnswers(savedSession.answers);
      setChecked(savedSession.checked);
      setReviewFlags(savedSession.reviewFlags ?? {});
      submitting.current = false;
      setIndex(Math.min(savedSession.index, restored.length - 1));
      setElapsed(savedSession.elapsed);
      setStartedAt(Date.now() - savedSession.elapsed * 1000);
      // Khôi phục số vi phạm đã ghi nhận: tải lại trang không xóa được lịch sử vi phạm.
      restoreStrikes(savedSession.strikes ?? 0);
      setScreen('quiz');
    } catch {
      setError('Không thể khôi phục phiên học trước.');
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
    setScreen('home');
  }

  // onFinish được nối trực tiếp vào onClick nên finishQuiz phải không nhận tham số
  // (nếu không MouseEvent sẽ bị truyền vào chỗ strikeCount).
  function finishQuiz() {
    void submitQuiz(strikes);
  }

  async function submitQuiz(strikeCount: number) {
    if (submitting.current || !questions.length) return;
    submitting.current = true;
    setSaveStatus('saving');
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

    const credits: Record<string, number> = {};
    finalQuestions.forEach((question) => {
      credits[question.id] = calculateQuestionCredit(
        question,
        answers[question.id],
        keybook?.[question.id],
      );
    });

    const totalEarnedCredits = finalQuestions.reduce(
      (sum, q) => sum + (credits[q.id] || 0),
      0,
    );
    const correct = Math.round(totalEarnedCredits * 100) / 100;
    const wrongQuestions = finalQuestions.filter(
      (question) => (credits[question.id] || 0) < 1,
    );
    const partialQuestions = finalQuestions.filter(
      (question) =>
        (credits[question.id] || 0) > 0 && (credits[question.id] || 0) < 1,
    );
    const estimatedScore = Math.min(
      EXAM_MAX_SCORE,
      Math.round((totalEarnedCredits / finalQuestions.length) * EXAM_MAX_SCORE),
    );

    const finished: Attempt = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      mode,
      difficulty,
      topic,
      total: finalQuestions.length,
      correct,
      percent: Math.round((totalEarnedCredits / finalQuestions.length) * 100),
      duration: Math.max(1, Math.floor((Date.now() - startedAt) / 1000)),
      wrongIds: wrongQuestions.map((question) => question.id),
      partialIds: partialQuestions.map((question) => question.id),
      questionCredits: credits,
      questionIds: finalQuestions.map((question) => question.id),
      unansweredIds: finalQuestions
        .filter((question) => !isAnswered(question, answers[question.id]))
        .map((q) => q.id),
      hasPaper: true,
      strikes: strikeCount,
      ...(mode === 'exam'
        ? {
            pointsPerQuestion: EXAM_POINTS_PER_QUESTION,
            estimatedScore,
          }
        : {}),
    };
    const nextProgress = { ...progress };
    finalQuestions.forEach((question) => {
      const qCredit = credits[question.id] || 0;
      const previous = nextProgress[question.id] || {
        seen: 0,
        correct: 0,
        lastAt: '',
      };
      nextProgress[question.id] = {
        seen: previous.seen + 1,
        correct: previous.correct + (qCredit >= 1 ? 1 : 0),
        lastAt: finished.date,
      };
    });
    const paper: SavedPaper = structuredClone({
      version: 1,
      attempt: finished,
      questions: finalQuestions,
      answers,
      keys: Object.fromEntries(
        finalQuestions.map((q) => [
          q.id,
          keybook?.[q.id] ?? {
            correctAnswer: '',
            summaryText: '',
            explanation: q.explanation || '',
          },
        ]),
      ),
    });
    const nextPapers = [
      paper,
      ...papers.filter((p) => p.attempt.id !== finished.id),
    ];
    const nextAttempts = mergeAttempts([finished, ...attempts], nextPapers);
    setPapers(nextPapers);
    unsavedPaperIds.current.add(finished.id);
    setAttempts(nextAttempts);
    setProgress(nextProgress);
    setSavedSession(null);
    setResult(finished);
    setResultPaper(paper);
    setScreen('result');
    try {
      await writePapers([paper]);
      localStorage.setItem(STORAGE.attempts, JSON.stringify(nextAttempts));
      localStorage.setItem(STORAGE.progress, JSON.stringify(nextProgress));
      localStorage.removeItem(STORAGE.active);
      unsavedPaperIds.current.delete(finished.id);
      setSaveStatus('saved');
    } catch {
      setSaveStatus('error');
      setStorageError(
        'Bài mới vẫn có trong phiên này nhưng chưa xác nhận lưu đầy đủ. Hãy Xuất bản sao trước khi đóng trang.',
      );
    }
  }

  function openPaper(id: string) {
    const paper = papers.find((p) => p.attempt.id === id);
    if (!paper) {
      setStorageError('Lượt cũ chưa lưu chi tiết bài làm.');
      return;
    }
    setResultPaper(paper);
    setResult(paper.attempt);
    setSaveStatus(unsavedPaperIds.current.has(id) ? 'error' : 'saved');
    setScreen('result');
    window.scrollTo(0, 0);
  }

  async function resetData() {
    if (!confirm('Xóa toàn bộ lịch sử học trên trình duyệt này?')) return;
    try {
      await writePapers([], true);
    } catch {
      setStorageError(
        'Không xóa được kho bài làm; lịch sử được giữ nguyên. Hãy thử lại.',
      );
      return;
    }
    Object.values(STORAGE).forEach((key) => localStorage.removeItem(key));
    setPapers([]);
    setResultPaper(null);
    setStorageError('');
    setAttempts([]);
    setProgress({});
    setLearned({});
    updateLearningProgress(emptyLearningProgress());
    setSavedSession(null);
    setResult(null);
  }

  function exportData() {
    const blob = new Blob(
      [
        JSON.stringify(
          {
            version: 2,
            papers,
            activeSession: savedSession,
            exportedAt: new Date().toISOString(),
            attempts,
            progress,
            learned,
            learningProgress,
            // Giữ khóa cũ để bản sao này vẫn mở được bằng phiên bản trước.
            theoryProgress: learningProgress.concept,
          },
          null,
          2,
        ),
      ],
      { type: 'application/json' },
    );
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `certgenai-backup-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function importData(file?: File) {
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (
        !Array.isArray(data.attempts) ||
        !data.progress ||
        typeof data.progress !== 'object' ||
        Array.isArray(data.progress)
      )
        throw new Error();
      const importedPapers: SavedPaper[] = data.papers ?? [];
      if (!Array.isArray(importedPapers) || !importedPapers.every(isSavedPaper))
        throw new Error();
      if (!data.attempts.every(isAttempt)) throw new Error();
      if (
        data.activeSession &&
        (!Array.isArray(data.activeSession.questionIds) ||
          !Array.isArray(data.activeSession.chunkFiles) ||
          !data.activeSession.answers)
      )
        throw new Error();
      await writePapers(importedPapers, true);
      const importedAttempts = mergeAttempts(data.attempts, importedPapers);
      localStorage.setItem(STORAGE.attempts, JSON.stringify(importedAttempts));
      localStorage.setItem(STORAGE.progress, JSON.stringify(data.progress));
      const importedLearned =
        typeof data.learned === 'object' && data.learned ? data.learned : {};
      // Bản sao v2 mới mang `learningProgress`; bản cũ chỉ có tiến độ khái niệm.
      const importedLearning = migrateLearningProgress(
        data.learningProgress ?? data.theoryProgress,
      );
      localStorage.setItem(STORAGE.learned, JSON.stringify(importedLearned));
      writeLearningProgress(importedLearning);
      setPapers(importedPapers);
      setAttempts(importedAttempts);
      setSavedSession(data.activeSession ?? null);
      if (data.activeSession)
        localStorage.setItem(
          STORAGE.active,
          JSON.stringify(data.activeSession),
        );
      else localStorage.removeItem(STORAGE.active);
      setStorageError('');
      setProgress(data.progress);
      setLearned(importedLearned);
      setLearningProgress(importedLearning);
    } catch {
      setStorageError(
        'Không nhập được bản sao: tệp không hợp lệ hoặc trình duyệt không lưu được dữ liệu.',
      );
    }
  }

  if (loading && !manifest) return <LoadingScreen />;
  if (!manifest) {
    return (
      <main className="mx-auto flex min-h-screen w-[min(1180px,calc(100%-2.25rem))] items-center justify-center">
        <div className="flex items-center gap-2.5 rounded-xl border border-destructive/25 bg-destructive/10 px-5 py-4 text-sm font-medium text-destructive">
          <X size={18} />
          {error || 'Không có dữ liệu.'}
        </div>
      </main>
    );
  }

  const topicCount = (selectedTopic: Topic | 'all') =>
    selectedTopic === 'all'
      ? difficulty === 'all'
        ? manifest.total
        : manifest.counts[difficulty]
      : difficulty === 'all'
        ? manifest.topicCounts[selectedTopic].total
        : manifest.topicCounts[selectedTopic].counts[difficulty];

  const difficultyCount = (selectedDifficulty: Difficulty | 'all') =>
    topic === 'all'
      ? selectedDifficulty === 'all'
        ? manifest.total
        : manifest.counts[selectedDifficulty]
      : selectedDifficulty === 'all'
        ? manifest.topicCounts[topic].total
        : manifest.topicCounts[topic].counts[selectedDifficulty];

  const practiceTotal = topicCount(topic);

  return (
    <>
      {storageError && (
        <div
          role="alert"
          className="mx-auto my-3 max-w-5xl rounded-xl border border-warning/30 bg-warning/10 p-4 text-sm"
        >
          {storageError}
        </div>
      )}
      <AntiCheatModal
        isOpen={isWarningOpen}
        strikes={strikes}
        maxStrikes={maxStrikes}
        reason={warningReason}
        onDismiss={dismissWarning}
      />

      {screen === 'quiz' && (
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
          reviewFlags={reviewFlags}
          onReviewFlags={setReviewFlags}
          onAnswer={updateAnswer}
          onCheck={markCurrentQuestionLearned}
          onIndex={setIndex}
          onFinish={finishQuiz}
          onExit={exitQuiz}
        />
      )}

      {screen === 'result' && result && resultPaper && (
        <ResultScreen
          key={result.id}
          result={result}
          questions={resultPaper.questions}
          answers={resultPaper.answers}
          keys={resultPaper.keys}
          saveStatus={saveStatus}
          onTheory={(selectedTopic) => {
            updateLearningProgress(
              withConceptSlideSeen(learningProgress, selectedTopic, 0),
            );
            setInitialSection('concept');
            setHomeMode('theory');
            setScreen('home');
            window.scrollTo(0, 0);
          }}
          onRetryWrong={() => {
            if (result.wrongIds.length)
              void startQuiz({
                mode: 'practice',
                specificQuestionIds: result.wrongIds,
              });
          }}
          onHome={() => setScreen('home')}
        />
      )}

      {screen === 'home' && (
        <HomeScreen
          manifest={manifest}
          keybook={keybook}
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
            startQuiz({ mode: 'practice', topic, count: practiceTotal })
          }
          onStartExam={() => {
            // Phải nằm trong handler của cú click, trước await, để giữ user activation.
            requestFullscreen();
            if (isAutomated) showWarning(automationReason);
            void startQuiz({
              mode: 'exam',
              difficulty: 'all',
              topic: 'all',
              count: EXAM_QUESTION_COUNT,
            });
          }}
          learningProgress={learningProgress}
          onLearningProgress={updateLearningProgress}
          onPracticeTopic={(nextTopic) => {
            setTopic(nextTopic);
            setDifficulty('all');
            setHomeMode('practice');
          }}
          onStartTrapPractice={() => {
            void fetchTraps().then((traps) =>
              startQuiz({
                mode: 'practice',
                specificQuestionIds: traps.questionIds,
              }),
            );
          }}
          onStartLessonPractice={(numbers) =>
            void startQuiz({
              mode: 'practice',
              specificQuestionNumbers: numbers,
            })
          }
          attempts={attempts}
          initialSection={initialSection}
          pendingCount={mistakeIds(attempts, learned).length}
          onOpenPaper={openPaper}
          onRetryIds={(ids) =>
            void startQuiz({ mode: 'practice', specificQuestionIds: ids })
          }
          onRetryAll={() =>
            void startQuiz({
              mode: 'practice',
              specificQuestionIds: mistakeIds(attempts, learned),
            })
          }
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
