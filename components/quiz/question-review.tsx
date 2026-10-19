'use client';

import { useEffect, useMemo, useState } from 'react';
import { Check, LoaderCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NativeSelect } from '@/components/ui/native-select';
import { decryptPayload } from '@/lib/crypto';
import {
  correctAnswerText,
  AnswerReview,
  Difficulty,
  difficultyLabel,
  Manifest,
  Question,
  Topic,
  topicLabel,
} from '@/lib/quiz';
import { fetchTraps } from '@/lib/api/client';
import { useResource } from '@/lib/api/use-resource';
import { cn } from '@/lib/utils';

export type ReviewKeybook = Record<
  string,
  {
    correctAnswer: unknown;
    summaryText: string;
    explanation: string;
    review?: AnswerReview;
  }
>;

function normalize(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

function ReviewChoices({
  question,
  answer,
}: {
  question: Question;
  answer: unknown;
}) {
  const interaction = question.interaction;
  const mappedAnswer =
    answer && typeof answer === 'object' && !Array.isArray(answer)
      ? (answer as Record<string, string>)
      : {};

  if (interaction.kind === 'single' || interaction.kind === 'multiple') {
    return (
      <ul className="mt-4 grid gap-2">
        {interaction.options.map((option, index) => {
          const correct =
            option.correct ||
            answer === option.id ||
            (Array.isArray(answer) && answer.includes(option.id));
          return (
            <li
              key={option.id}
              className={cn(
                'flex items-start gap-2 rounded-lg border px-3 py-2 text-sm leading-relaxed',
                correct
                  ? 'border-success/30 bg-success/5 font-semibold text-success'
                  : 'border-border text-muted-foreground',
              )}
            >
              <span className="shrink-0 font-bold">
                {String.fromCharCode(65 + index)}.
              </span>
              <span className="min-w-0 whitespace-pre-line">{option.text}</span>
              {correct && (
                <Check
                  size={16}
                  className="mt-1 shrink-0"
                  aria-label="Đáp án đúng"
                />
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  if (interaction.kind === 'matrix' || interaction.kind === 'matching') {
    return (
      <ul className="mt-4 grid gap-2 text-sm leading-relaxed">
        {interaction.rows.map((row) => {
          const options =
            'options' in row
              ? row.options
              : interaction.kind === 'matching'
                ? interaction.options
                : [];
          const answerId =
            mappedAnswer[row.id] ||
            ('answerId' in row ? row.answerId : undefined);
          const correctOption = options.find(
            (option) => option.id === answerId || option.correct,
          );
          return (
            <li
              key={row.id}
              className="rounded-lg border border-border px-3 py-2"
            >
              <span>{row.text}</span>
              {correctOption ? (
                <span className="mt-1 flex items-start gap-2 font-semibold text-success">
                  <Check size={16} className="mt-1 shrink-0" />{' '}
                  {correctOption.text}
                </span>
              ) : (
                <span className="mt-1 block text-muted-foreground">
                  Lựa chọn: {options.map((option) => option.text).join(' / ')}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  const orderedItems = [...interaction.items].sort(
    (a, b) =>
      Number(mappedAnswer[a.id] ?? a.order) -
      Number(mappedAnswer[b.id] ?? b.order),
  );
  return (
    <ol className="mt-4 grid list-inside list-decimal gap-2 rounded-lg border border-success/30 bg-success/5 p-3 text-sm font-semibold leading-relaxed text-success">
      {orderedItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ol>
  );
}

export function QuestionReview({
  manifest,
  keybook,
}: {
  manifest: Manifest;
  keybook: ReviewKeybook | null;
}) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<ReviewKeybook>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);
  const [search, setSearch] = useState('');
  const [topic, setTopic] = useState<Topic | 'all'>('all');
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all');
  const [onlyTraps, setOnlyTraps] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      setLoading(true);
      setError('');
      try {
        const read = async <T,>(file: string): Promise<T> => {
          const response = await fetch(file, { signal: controller.signal });
          if (!response.ok) throw new Error('Không tải được dữ liệu.');
          return file.endsWith('.enc')
            ? decryptPayload<T>(await response.text())
            : response.json();
        };
        const [chunks, loadedKeybook] = await Promise.all([
          Promise.all(
            manifest.chunks.map((chunk) => read<Question[]>(chunk.file)),
          ),
          keybook
            ? Promise.resolve(keybook)
            : read<ReviewKeybook>('/data/keybook.enc'),
        ]);
        const loaded = chunks.flat().sort((a, b) => a.number - b.number);
        if (
          loaded.length !== manifest.total ||
          loaded.some(
            (question) =>
              !correctAnswerText(
                question,
                loadedKeybook[question.id]?.summaryText,
              ) ||
              !(
                loadedKeybook[question.id]?.explanation || question.explanation
              ),
          )
        )
          throw new Error('Dữ liệu chưa đầy đủ.');
        if (!controller.signal.aborted) {
          setQuestions(loaded);
          setAnswers(loadedKeybook);
        }
      } catch {
        if (!controller.signal.aborted)
          setError(
            'Không thể tải đầy đủ câu hỏi, đáp án và giải thích. Vui lòng thử lại.',
          );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    void load();
    return () => controller.abort();
  }, [manifest, keybook, retry]);

  // Danh sách câu dễ nhầm lấy từ Worker, dùng chung cache với phần học tập.
  const traps = useResource('traps', () => fetchTraps());
  const trapIds = useMemo(
    () => new Set(traps.data?.questionIds ?? []),
    [traps.data],
  );

  const filtered = useMemo(() => {
    const query = normalize(search.trim());
    return questions.filter((question) => {
      if (onlyTraps && !trapIds.has(question.id)) return false;
      if (topic !== 'all' && question.topic !== topic) return false;
      if (difficulty !== 'all' && question.difficulty !== difficulty)
        return false;
      const entry = answers[question.id];
      const interaction = question.interaction;
      const choices =
        'items' in interaction
          ? interaction.items
          : 'options' in interaction
            ? interaction.options
            : [];
      const rows = 'rows' in interaction ? interaction.rows : [];
      return (
        !query ||
        normalize(
          [
            question.number,
            question.prompt,
            ...choices.map((option) => option.text),
            ...rows.flatMap((row) => [
              row.text,
              ...('options' in row
                ? row.options.map((option) => option.text)
                : []),
            ]),
            entry?.summaryText,
            entry?.explanation || question.explanation,
          ].join(' '),
        ).includes(query)
      );
    });
  }, [questions, answers, search, topic, difficulty, onlyTraps, trapIds]);

  return (
    <section aria-labelledby="question-review-heading">
      <h2
        id="question-review-heading"
        className="text-2xl font-extrabold tracking-tight"
      >
        Lướt nhanh {manifest.total} câu
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Xem nguyên văn câu hỏi, đáp án theo khóa IIG và giải thích để ôn tập.
      </p>

      {loading ? (
        <output className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <LoaderCircle size={18} className="animate-spin" /> Đang tải{' '}
          {manifest.total} câu và đáp án…
        </output>
      ) : error ? (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-destructive/30 bg-destructive/5 p-4"
        >
          <p className="text-sm text-destructive">{error}</p>
          <Button
            id="review-retry"
            variant="outline"
            className="mt-3"
            onClick={() => setRetry((value) => value + 1)}
          >
            Thử lại
          </Button>
        </div>
      ) : (
        <>
          <div className="sticky top-20 z-20 mt-5 rounded-xl border border-border bg-card/95 p-3 shadow-sm backdrop-blur-md">
            <label htmlFor="review-search" className="sr-only">
              Tìm câu hỏi, đáp án hoặc giải thích
            </label>
            <div className="relative">
              <Search
                size={16}
                className="pointer-events-none absolute top-3 left-3 text-muted-foreground"
              />
              <Input
                id="review-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Tìm câu hỏi, đáp án, giải thích…"
                className="h-10 pl-9"
              />
            </div>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <NativeSelect
                id="review-topic"
                aria-label="Lọc nhóm nội dung"
                className="w-full"
                value={topic}
                onChange={(event) =>
                  setTopic(event.target.value as Topic | 'all')
                }
              >
                {Object.entries(topicLabel).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </NativeSelect>
              <NativeSelect
                id="review-difficulty"
                aria-label="Lọc độ khó"
                className="w-full"
                value={difficulty}
                onChange={(event) =>
                  setDifficulty(event.target.value as Difficulty | 'all')
                }
              >
                {Object.entries(difficultyLabel).map(([value, label]) => (
                  <option key={value} value={value}>
                    {value === 'all' ? 'Tất cả độ khó' : label}
                  </option>
                ))}
              </NativeSelect>
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <output className="text-xs text-muted-foreground">
                  Hiển thị{' '}
                  <b className="text-foreground">
                    {filtered.length}/{manifest.total}
                  </b>{' '}
                  câu
                </output>
                <Button
                  id="review-filter-traps-btn"
                  size="sm"
                  variant={onlyTraps ? 'default' : 'outline'}
                  onClick={() => setOnlyTraps((prev) => !prev)}
                  className={cn(
                    'h-7 px-2.5 text-xs font-bold transition-all',
                    onlyTraps
                      ? 'bg-destructive text-white hover:bg-destructive/90 shadow-xs'
                      : 'border-amber-500/40 bg-amber-500/10 text-amber-800 hover:bg-amber-500/20 dark:text-amber-300',
                  )}
                >
                  ⚡ {onlyTraps ? 'Đang lọc 16 câu bẫy đề (Bấm để hủy)' : 'Lọc 16 câu bẫy đề'}
                </Button>
              </div>
              <NativeSelect
                id="review-jump"
                aria-label="Đi tới câu hỏi"
                value=""
                disabled={!filtered.length}
                onChange={(event) =>
                  document
                    .getElementById(`review-question-${event.target.value}`)
                    ?.scrollIntoView({ block: 'start', behavior: 'instant' })
                }
              >
                <option value="" disabled>
                  Đi tới câu…
                </option>
                {filtered.map((question) => (
                  <option key={question.id} value={question.number}>
                    Câu {question.number}
                  </option>
                ))}
              </NativeSelect>
            </div>
          </div>

          <div className="mt-5 grid gap-5">
            {filtered.map((question) => {
              const entry = answers[question.id];
              const isTrap = trapIds.has(question.id);
              return (
                <article
                  id={`review-question-${question.number}`}
                  key={question.id}
                  className={cn(
                    'scroll-mt-80 rounded-xl border p-4 sm:scroll-mt-64 sm:p-5 transition-shadow',
                    isTrap
                      ? 'border-amber-500/50 bg-amber-500/[0.02] shadow-xs'
                      : 'border-border',
                  )}
                  aria-labelledby={`review-title-${question.number}`}
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <b className="rounded-md bg-info/10 px-2 py-1 text-info">
                      Câu {question.number}
                    </b>
                    <span>{topicLabel[question.topic]}</span>
                    <span>· {difficultyLabel[question.difficulty]}</span>
                    {entry?.review && <span>· {entry.review.label}</span>}
                    {isTrap && (
                      <span className="rounded-md border border-amber-500/40 bg-amber-500/15 px-2 py-0.5 font-bold text-amber-800 dark:text-amber-300">
                        ⚡ Bẫy đề thi / Cần lưu ý
                      </span>
                    )}
                  </div>
                  <h3
                    id={`review-title-${question.number}`}
                    className="text-sm font-bold leading-relaxed whitespace-pre-line"
                  >
                    {question.prompt}
                  </h3>
                  {question.images.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Hình minh họa câu ${question.number}${question.images.length > 1 ? ` (${index + 1})` : ''}`}
                      loading="lazy"
                      width={900}
                      height={600}
                      className="mt-3 h-auto max-w-full rounded-lg border border-border"
                    />
                  ))}
                  <ReviewChoices
                    question={question}
                    answer={
                      entry?.review
                        ? entry.review.validatedAnswer
                        : entry?.correctAnswer
                    }
                  />
                  <div className="mt-4 rounded-lg border border-success/25 bg-success/5 p-3 text-sm leading-relaxed">
                    <b className="text-foreground">
                      {entry?.review?.validatedAnswer === null
                        ? 'Kết luận: chưa thể chốt khóa đúng'
                        : 'Đáp án IIG'}
                    </b>
                    {entry?.review?.validatedAnswer === null && (
                      <p className="mt-1 whitespace-pre-line">
                        {entry.review.conclusion}
                      </p>
                    )}
                    <p className="mt-1 whitespace-pre-line">
                      {entry?.review?.validatedAnswer === null &&
                        'Khóa tham khảo để luyện đối chiếu: '}
                      {correctAnswerText(question, entry?.summaryText)}
                    </p>
                    {entry?.review?.status === 'corrected' && (
                      <p className="mt-2 whitespace-pre-line">
                        Khóa IIG trước đối chiếu:{' '}
                        {entry.review.officialAnswerText}
                      </p>
                    )}
                  </div>
                  {entry?.review && (
                    <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                      {entry.review.references.map((reference) => (
                        <li key={reference.url}>
                          <a
                            href={reference.url}
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                          >
                            {reference.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-3 text-sm leading-relaxed">
                    <b className="text-info">Giải thích</b>
                    <p className="mt-1 whitespace-pre-line text-foreground/80">
                      {entry?.explanation || question.explanation}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          {!filtered.length && (
            <div className="py-8 text-center text-sm text-muted-foreground">
              <p>Không tìm thấy câu phù hợp.</p>
              <Button
                id="review-clear-filters"
                variant="outline"
                className="mt-3"
                onClick={() => {
                  setSearch('');
                  setTopic('all');
                  setDifficulty('all');
                }}
              >
                Xóa bộ lọc
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
