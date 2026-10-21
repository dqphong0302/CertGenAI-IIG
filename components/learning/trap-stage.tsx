'use client';

import { useMemo, useState } from 'react';
import { AlertTriangle, BookOpenText, Check, ListChecks, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { TrapQuestion } from '@/shared/learning';
import { fetchTraps } from '@/lib/api/client';
import { useResource } from '@/lib/api/use-resource';
import {
  Callout,
  FilterChip,
  StageError,
  StageEyebrow,
  StageHeading,
  StageSkeleton,
} from '@/components/shared/section-parts';

type Category = TrapQuestion['category'];

const categoryFilter: Array<{ id: Category | 'all'; label: string }> = [
  { id: 'all', label: 'Tất cả' },
  { id: 'corrected', label: 'Sai bản dịch' },
  { id: 'logic_error', label: 'Sai kiến thức' },
  { id: 'translation_error', label: 'Dịch gây nhầm' },
  { id: 'syllabus_bias', label: 'Theo khung đề' },
];

export function TrapStage({
  onStartTrapPractice,
}: {
  onStartTrapPractice?: () => void;
}) {
  const [category, setCategory] = useState<Category | 'all'>('all');
  const traps = useResource('traps', () => fetchTraps());

  const questions = useMemo(() => {
    const data = traps.data?.questions ?? [];
    if (category === 'all') return data;
    return data.filter((item) => item.category === category);
  }, [traps.data, category]);

  if (traps.error) {
    return <StageError message={traps.error} onRetry={traps.reload} />;
  }
  if (!traps.data) return <StageSkeleton lines={4} />;

  return (
    <section className="space-y-5" aria-labelledby="traps-title">
      <StageHeading
        id="traps-title"
        eyebrow={`${traps.data.questions.length} câu cần nhớ theo khóa IIG`}
        eyebrowClassName="text-destructive"
        title="Câu dễ nhầm"
        lead="Những câu mà khóa chấm của IIG lệch với cách hiểu trong tài liệu gốc. Biết trước cả hai cách hiểu để chọn đúng theo khóa thi mà vẫn nắm đúng kiến thức."
        actions={
          onStartTrapPractice && (
            <Button size="sm" onClick={onStartTrapPractice}>
              <ListChecks size={15} />
              Luyện {traps.data.questionIds.length} câu này
            </Button>
          )
        }
      />

      <Callout tone="note" title="Cách dùng mục này">
        Bài luyện và bài thi trong ứng dụng chấm theo <b>khóa IIG</b>. Phần
        &ldquo;theo tài liệu gốc&rdquo; chỉ để hiểu bản chất, không dùng làm đáp
        án khi thi.
      </Callout>

      <fieldset className="flex flex-wrap gap-1.5">
        <legend className="sr-only">Lọc theo loại lệch</legend>
        {categoryFilter.map((item) => {
          const count =
            item.id === 'all'
              ? traps.data?.questions.length
              : traps.data?.questions.filter((q) => q.category === item.id)
                  .length;
          if (!count) return null;
          return (
            <FilterChip
              key={item.id}
              active={category === item.id}
              tone="destructive"
              count={count}
              onClick={() => setCategory(item.id)}
            >
              {item.label}
            </FilterChip>
          );
        })}
      </fieldset>

      <div className="grid gap-3.5">
        {questions.map((trap) => (
          <article
            key={trap.id}
            id={`trap-${trap.number}`}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="space-y-3 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="border-destructive/30 bg-destructive/10 font-bold text-destructive tabular-nums"
                >
                  Câu {trap.number}
                </Badge>
                <StageEyebrow className="text-muted-foreground">
                  {trap.categoryLabel}
                </StageEyebrow>
              </div>

              <h3 className="text-[16px] leading-snug font-extrabold tracking-tight text-foreground text-balance">
                {trap.title}
              </h3>

              <pre className="overflow-x-auto rounded-xl border border-border/70 bg-muted/30 p-3.5 font-sans text-[13.5px] leading-relaxed whitespace-pre-wrap text-foreground/85">
                {trap.prompt}
              </pre>

              <div className="grid gap-2.5 sm:grid-cols-2">
                <div className="rounded-xl border border-success/30 bg-success/[0.07] p-3.5">
                  <StageEyebrow className="flex items-center gap-1.5 text-success">
                    <Check size={13} />
                    Chọn khi thi (khóa IIG)
                  </StageEyebrow>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed font-semibold text-foreground/90">
                    {trap.iigAnswer}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-muted/25 p-3.5">
                  <StageEyebrow className="flex items-center gap-1.5 text-muted-foreground">
                    <X size={13} />
                    Theo tài liệu gốc
                  </StageEyebrow>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                    {trap.realAnswer}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border/70 bg-background/60 p-3.5">
                <StageEyebrow className="text-muted-foreground">
                  Vì sao lệch
                </StageEyebrow>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground/85 text-pretty">
                  {trap.explanation}
                </p>
              </div>

              <div className="rounded-xl border border-warning/25 bg-warning/[0.07] p-3.5">
                <StageEyebrow className="flex items-center gap-1.5 text-warning">
                  <AlertTriangle size={13} />
                  Nhớ khi vào phòng thi
                </StageEyebrow>
                <p className="mt-1.5 text-[13.5px] leading-relaxed font-semibold text-foreground/90">
                  {trap.examTip}
                </p>
              </div>

              <p className="flex items-start gap-1.5 text-[12px] leading-relaxed text-muted-foreground">
                <BookOpenText size={13} className="mt-0.5 shrink-0" />
                {trap.sourceRef}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
