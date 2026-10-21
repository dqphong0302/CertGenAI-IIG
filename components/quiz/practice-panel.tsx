'use client';

import { BookOpenCheck, ChevronRight, LoaderCircle, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Callout,
  StageHeading,
} from '@/components/shared/section-parts';
import { Difficulty, difficultyLabel, Topic, topicLabel } from '@/lib/quiz';

const TOPICS: (Topic | 'all')[] = [
  'all',
  'methods',
  'prompting',
  'verification',
  'responsible',
];
const DIFFICULTIES: (Difficulty | 'all')[] = ['all', 'easy', 'medium', 'hard'];

/** Nhãn của một bước chọn. Dùng trong <legend> nên không bọc thẻ khối. */
const stepLabel =
  'mb-3 text-[11px] font-extrabold tracking-[0.14em] uppercase text-muted-foreground';

/** Ô chọn (nhóm nội dung, độ khó): một kiểu viền và một cỡ chữ cho cả hai. */
const choiceTile =
  'rounded-xl border text-[13.5px] font-bold transition-colors';
const choiceOn = 'border-primary bg-primary/[0.06] text-primary';
const choiceOff =
  'border-border bg-card text-foreground/85 hover:border-primary/40 hover:bg-primary/[0.04]';

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
  topic: Topic | 'all';
  onTopic: (topic: Topic | 'all') => void;
  difficulty: Difficulty | 'all';
  onDifficulty: (difficulty: Difficulty | 'all') => void;
  topicCount: (topic: Topic | 'all') => number;
  difficultyCount: (difficulty: Difficulty | 'all') => number;
  practiceTotal: number;
  error: string;
  loading: boolean;
  onStart: () => void;
  onStartTrapPractice?: () => void;
  onOpenCurriculum?: () => void;
}) {
  return (
    <section className="space-y-5" aria-labelledby="practice-title">
      <StageHeading
        id="practice-title"
        eyebrow="Tập luyện có hướng dẫn"
        eyebrowClassName="text-primary"
        title="Chọn nội dung muốn luyện tập"
        lead="Không giới hạn thời gian. Kiểm tra đáp án, đọc phân tích và lưu câu đã thành thạo ngay sau mỗi câu."
      />

      {/* Hai lối đi nhanh sang phần học tập, cùng tông với callout của bài giảng. */}
      {(onOpenCurriculum || onStartTrapPractice) && (
        <div className="grid gap-3 sm:grid-cols-2">
          {onOpenCurriculum && (
            <div className="flex flex-col justify-between gap-3 rounded-xl border border-info/25 bg-info/[0.06] p-4">
              <div>
                <p className="flex items-center gap-1.5 text-[11px] font-extrabold tracking-[0.1em] text-info uppercase">
                  <BookOpenCheck size={14} />
                  Sổ tay 19 bài học Pearson
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-foreground/85">
                  Xem lý thuyết chi tiết, bẫy câu hỏi nhiễu và luyện tập theo
                  từng bài học cụ thể.
                </p>
              </div>
              <Button
                id="open-curriculum-quick-btn"
                size="sm"
                variant="outline"
                onClick={onOpenCurriculum}
                className="self-start border-info/35 font-bold text-info hover:bg-info/10"
              >
                Mở 19 bài học
              </Button>
            </div>
          )}

          {onStartTrapPractice && (
            <div className="flex flex-col justify-between gap-3 rounded-xl border border-warning/25 bg-warning/[0.07] p-4">
              <div>
                <p className="flex items-center gap-1.5 text-[11px] font-extrabold tracking-[0.1em] text-warning uppercase">
                  <Zap size={14} />
                  Luyện 16 câu bẫy IIG
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-foreground/85">
                  Tập trung ôn các câu gây bẫy nhiều nhất (Shot, Reverse
                  prompting, PII, Bias…).
                </p>
              </div>
              <Button
                id="start-trap-quick-btn"
                size="sm"
                variant="outline"
                onClick={onStartTrapPractice}
                className="self-start border-warning/35 font-bold text-warning hover:bg-warning/10"
              >
                Luyện 16 câu bẫy
              </Button>
            </div>
          )}
        </div>
      )}

      <fieldset className="m-0 border-0 p-0">
        <legend className={stepLabel}>1 · Chọn nhóm nội dung</legend>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {TOPICS.map((item) => (
            <button
              id={`topic-${item}`}
              key={item}
              type="button"
              aria-pressed={topic === item}
              onClick={() => onTopic(item)}
              className={cn(
                choiceTile,
                'flex min-h-13 items-center justify-between gap-3 px-4 py-3 text-left',
                item === 'all' && 'sm:col-span-2',
                topic === item ? choiceOn : choiceOff,
              )}
            >
              <span>{topicLabel[item]}</span>
              <span
                className={cn(
                  'shrink-0 rounded-full px-2 py-0.5 text-[12px] font-semibold tabular-nums',
                  topic === item
                    ? 'bg-card text-primary'
                    : 'bg-muted text-muted-foreground',
                )}
              >
                {topicCount(item)} câu
              </span>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="m-0 border-0 p-0">
        <legend className={stepLabel}>2 · Chọn độ khó</legend>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {DIFFICULTIES.map((level) => (
            <button
              id={`difficulty-${level}`}
              key={level}
              type="button"
              aria-pressed={difficulty === level}
              onClick={() => onDifficulty(level)}
              className={cn(
                choiceTile,
                'min-h-13 px-2.5 py-2 text-center',
                difficulty === level ? choiceOn : choiceOff,
              )}
            >
              {difficultyLabel[level]}
              <span className="mt-0.5 block text-[12px] font-semibold text-muted-foreground tabular-nums">
                {difficultyCount(level)} câu
              </span>
            </button>
          ))}
        </div>
      </fieldset>

      {error && (
        <Callout tone="trap" title="Chưa bắt đầu được">
          {error}
        </Callout>
      )}

      <Callout tone="success" title="Sẵn sàng luyện tập">
        Bộ đề đã chọn gồm <b>{practiceTotal} câu hỏi</b> · {topicLabel[topic]} ·{' '}
        {difficultyLabel[difficulty]}.
      </Callout>

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
    </section>
  );
}
