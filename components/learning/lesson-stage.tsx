'use client';

import { useCallback, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Ban,
  CheckCircle2,
  Circle,
  Clock3,
  Flag,
  ListChecks,
  Sparkles,
  Target,
  Wand2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { CourseOutline } from '@/shared/learning';
import { fetchCurriculumLesson } from '@/lib/api/client';
import { prefetchResource, useResource } from '@/lib/api/use-resource';
import { accentOf } from '@/components/learning/location';
import {
  Callout,
  KeyPointList,
  StageError,
  StageEyebrow,
  StageSkeleton,
  TermGrid,
} from '@/components/learning/stage-parts';

const lessonKey = (id: string) => `lesson:${id}`;

const weightTone: Record<string, string> = {
  'Rất cao': 'border-destructive/30 bg-destructive/10 text-destructive',
  Cao: 'border-warning/30 bg-warning/10 text-warning',
  'Trung bình': 'border-border bg-muted text-muted-foreground',
};

export function LessonStage({
  outline,
  lessonId,
  read,
  onNavigate,
  onMarkRead,
  onPractice,
}: {
  outline: CourseOutline;
  lessonId: string;
  read: boolean;
  onNavigate: (lessonId: string) => void;
  onMarkRead: (lessonId: string) => void;
  onPractice?: (questionNumbers: number[], lessonTitle: string) => void;
}) {
  const entries = outline.lessons.entries;
  const position = entries.findIndex((entry) => entry.id === lessonId);
  const previousId = position > 0 ? entries[position - 1].id : undefined;
  const nextId =
    position >= 0 && position < entries.length - 1
      ? entries[position + 1].id
      : undefined;

  const lesson = useResource(lessonKey(lessonId), () =>
    fetchCurriculumLesson(lessonId),
  );

  useEffect(() => {
    if (nextId) {
      prefetchResource(lessonKey(nextId), () => fetchCurriculumLesson(nextId));
    }
  }, [nextId]);

  const goPrev = useCallback(() => {
    if (previousId) onNavigate(previousId);
  }, [previousId, onNavigate]);

  const goNext = useCallback(() => {
    if (nextId) onNavigate(nextId);
  }, [nextId, onNavigate]);

  if (lesson.error) {
    return <StageError message={lesson.error} onRetry={lesson.reload} />;
  }
  if (!lesson.data) return <StageSkeleton lines={8} />;

  const current = lesson.data;
  const accent = accentOf(current.domainNumber);
  const framework = current.pedagogicalFramework;

  return (
    <article className="space-y-4" aria-labelledby="lesson-title">
      <div className="space-y-6 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
        <header className="border-b border-border/60 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="outline"
              className={cn(
                'font-bold tabular-nums',
                accent.border,
                accent.soft,
                accent.text,
              )}
            >
              Bài {current.number}/{entries.length}
            </Badge>
            <Badge
              variant="outline"
              className={cn('font-semibold', weightTone[current.examWeight])}
            >
              <Flag size={11} /> Trọng số {current.examWeight.toLowerCase()}
            </Badge>
            <span className="ml-auto flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
              <Clock3 size={12} />
              {current.duration}
            </span>
          </div>
          <StageEyebrow className={cn('mt-2.5', accent.text)}>
            {current.domainName}
          </StageEyebrow>
          <h2
            id="lesson-title"
            className="mt-1.5 text-[clamp(1.4rem,2.6vw,2rem)] leading-tight font-extrabold tracking-tight text-foreground text-balance"
          >
            {current.title}
          </h2>
          <p className="mt-2 max-w-[68ch] text-[15px] leading-relaxed text-muted-foreground text-pretty">
            {current.summary}
          </p>
        </header>

        <section aria-label="Mục tiêu theo chuẩn Pearson">
          <StageEyebrow className="mb-2.5 flex items-center gap-1.5 text-muted-foreground">
            <Target size={14} />
            Mục tiêu theo chuẩn Pearson
          </StageEyebrow>
          <ul className="grid gap-2">
            {current.pearsonObjectives.map((objective) => (
              <li
                key={objective}
                className="grid grid-cols-[1.1rem_1fr] items-start gap-2.5 text-[14px] leading-relaxed text-foreground/85"
              >
                <Circle
                  size={7}
                  className={cn(
                    'mt-2 shrink-0 rounded-full border-0',
                    accent.bg,
                  )}
                  fill="currentColor"
                />
                <span className="text-pretty">{objective}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Kiến thức cần nắm">
          <StageEyebrow className="mb-2.5 text-muted-foreground">
            Kiến thức cần nắm
          </StageEyebrow>
          <KeyPointList
            points={current.keyKnowledge}
            accentClassName={cn(accent.soft, accent.text)}
          />
        </section>

        {current.keyTerms.length > 0 && (
          <section aria-label="Thuật ngữ">
            <StageEyebrow className="mb-2.5 text-muted-foreground">
              Thuật ngữ
            </StageEyebrow>
            <TermGrid
              terms={current.keyTerms.map((term) => ({
                term: term.term,
                definition: term.meaning,
              }))}
            />
          </section>
        )}

        {framework && (
          <section
            aria-label={framework.name}
            className="rounded-xl border border-info/20 bg-info/[0.05] p-4 sm:p-5"
          >
            <StageEyebrow className="flex items-center gap-1.5 text-info">
              <Wand2 size={14} />
              {framework.name}
            </StageEyebrow>
            <p className="mt-2 text-[14px] leading-relaxed text-foreground/85">
              {framework.description}
            </p>

            {framework.steps && framework.steps.length > 0 && (
              <ol className="mt-3 grid gap-2">
                {framework.steps.map((step, stepIndex) => (
                  <li
                    key={step}
                    className="grid grid-cols-[1.6rem_1fr] items-start gap-2.5 rounded-lg border border-info/15 bg-background/70 p-3 text-[13.5px] leading-relaxed"
                  >
                    <span className="grid size-6 place-items-center rounded-md bg-info/15 text-[11px] font-extrabold text-info tabular-nums">
                      {stepIndex + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            )}

            {framework.matrix && framework.matrix.length > 0 && (
              <div className="mt-3 overflow-x-auto">
                <table className="w-full border-collapse text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-info/20 text-[11px] font-extrabold tracking-wider text-info uppercase">
                      <th className="py-2 pr-3">Tiêu chí</th>
                      <th className="py-2 pr-3">Mức</th>
                      <th className="py-2">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody>
                    {framework.matrix.map((row) => (
                      <tr
                        key={row.criterion}
                        className="border-b border-border/50 last:border-0"
                      >
                        <td className="py-2 pr-3 font-semibold text-foreground">
                          {row.criterion}
                        </td>
                        <td className="py-2 pr-3 whitespace-nowrap text-muted-foreground">
                          {row.weight}
                        </td>
                        <td className="py-2 leading-relaxed text-muted-foreground">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        <section aria-label="Câu lệnh mẫu" className="grid gap-3 lg:grid-cols-3">
          <PromptColumn
            tone="basic"
            title="Câu lệnh căn bản"
            icon={ListChecks}
            prompts={current.prompts.basic}
          />
          <PromptColumn
            tone="advanced"
            title="Câu lệnh nâng cao"
            icon={Sparkles}
            prompts={current.prompts.advanced}
          />
          <PromptColumn
            tone="avoid"
            title="Nên tránh"
            icon={Ban}
            prompts={current.prompts.avoid}
          />
        </section>

        {current.commonPitfalls.length > 0 && (
          <Callout tone="trap" title="Lỗi thường gặp">
            <ul className="grid gap-1.5">
              {current.commonPitfalls.map((item) => (
                <li key={item} className="list-inside list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </Callout>
        )}

        {current.distractorTraps.length > 0 && (
          <Callout tone="example" title="Bẫy phương án nhiễu">
            <ul className="grid gap-1.5">
              {current.distractorTraps.map((item) => (
                <li key={item} className="list-inside list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </Callout>
        )}

        {current.examTips.length > 0 && (
          <Callout tone="note" title="Mẹo khi làm bài">
            <ul className="grid gap-1.5">
              {current.examTips.map((item) => (
                <li key={item} className="list-inside list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </Callout>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          id="lesson-mark-read"
          size="sm"
          variant={read ? 'default' : 'outline'}
          onClick={() => onMarkRead(lessonId)}
          className="gap-1.5 font-semibold"
        >
          {read ? <CheckCircle2 size={15} /> : <Circle size={15} />}
          {read ? 'Đã học bài này' : 'Đánh dấu đã học'}
        </Button>

        {onPractice && current.relatedQuestionNumbers.length > 0 && (
          <Button
            id="lesson-practice"
            size="sm"
            variant="outline"
            onClick={() =>
              onPractice(current.relatedQuestionNumbers, current.title)
            }
            className="gap-1.5 font-semibold"
          >
            <ListChecks size={15} />
            Luyện {current.relatedQuestionNumbers.length} câu của bài
            <ArrowRight size={13} />
          </Button>
        )}

        <div className="ml-auto flex gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={goPrev}
            disabled={!previousId}
            className="gap-1.5 font-semibold text-muted-foreground"
          >
            <ArrowLeft size={14} /> Bài trước
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={goNext}
            disabled={!nextId}
            className="gap-1.5 font-semibold text-muted-foreground"
          >
            Bài tiếp <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </article>
  );
}

const promptTone = {
  basic: 'border-border bg-muted/25',
  advanced: 'border-primary/25 bg-primary/[0.05]',
  avoid: 'border-destructive/25 bg-destructive/[0.05]',
} as const;

const promptTitleTone = {
  basic: 'text-muted-foreground',
  advanced: 'text-primary',
  avoid: 'text-destructive',
} as const;

function PromptColumn({
  tone,
  title,
  icon: Icon,
  prompts,
}: {
  tone: keyof typeof promptTone;
  title: string;
  icon: typeof ListChecks;
  prompts: string[];
}) {
  if (!prompts.length) return null;
  return (
    <div className={cn('rounded-xl border p-4', promptTone[tone])}>
      <StageEyebrow
        className={cn('flex items-center gap-1.5', promptTitleTone[tone])}
      >
        <Icon size={13} />
        {title}
      </StageEyebrow>
      <ul className="mt-2.5 grid gap-2">
        {prompts.map((prompt) => (
          <li
            key={prompt}
            className={cn(
              'rounded-lg border border-border/60 bg-background/70 p-2.5 font-mono text-[12.5px] leading-relaxed text-foreground/85',
              tone === 'avoid' && 'line-through decoration-destructive/40',
            )}
          >
            {prompt}
          </li>
        ))}
      </ul>
    </div>
  );
}
