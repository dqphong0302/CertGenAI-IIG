'use client';

import type { ReactNode } from 'react';
import {
  AlertTriangle,
  BookOpenText,
  Lightbulb,
  RotateCcw,
  WifiOff,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * Khối dựng chung cho mọi màn nội dung học tập.
 *
 * Trước đây mỗi tab tự đặt cỡ chữ, bán kính và màu riêng nên cùng một loại
 * thông tin ("dễ nhầm", "nguồn đọc") lại trông khác nhau ở từng chỗ. Gom về
 * đây để toàn bộ phần học dùng một thứ bậc chữ và một bộ callout.
 */

/** Dòng nhỏ in hoa phía trên tiêu đề, cho biết đang ở đâu trong khóa. */
export function StageEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'text-[11px] font-extrabold tracking-[0.14em] uppercase',
        className,
      )}
    >
      {children}
    </p>
  );
}

export function StageHeading({
  eyebrow,
  eyebrowClassName,
  title,
  lead,
  actions,
  id,
}: {
  eyebrow?: ReactNode;
  eyebrowClassName?: string;
  title: string;
  lead?: string;
  actions?: ReactNode;
  id?: string;
}) {
  return (
    <header className="flex flex-col gap-4 border-b border-border/70 pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        {eyebrow && (
          <StageEyebrow className={cn('text-muted-foreground', eyebrowClassName)}>
            {eyebrow}
          </StageEyebrow>
        )}
        <h2
          id={id}
          className="mt-1.5 text-[clamp(1.35rem,2.4vw,1.9rem)] leading-tight font-extrabold tracking-tight text-foreground text-balance"
        >
          {title}
        </h2>
        {lead && (
          <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
            {lead}
          </p>
        )}
      </div>
      {actions && <div className="flex shrink-0 flex-wrap gap-2">{actions}</div>}
    </header>
  );
}

/** Ý chính dạng danh sách đánh số — đơn vị đọc chính của mọi slide. */
export function KeyPointList({
  points,
  accentClassName,
}: {
  points: string[];
  accentClassName?: string;
}) {
  return (
    <ol className="grid gap-2.5">
      {points.map((point, index) => (
        <li
          key={point}
          className="grid grid-cols-[1.75rem_1fr] items-start gap-3 rounded-xl border border-border/60 bg-card/60 p-3.5 text-[14.5px] leading-relaxed text-foreground/90"
        >
          <span
            className={cn(
              'mt-px grid size-7 place-items-center rounded-lg bg-muted text-xs font-extrabold tabular-nums text-muted-foreground',
              accentClassName,
            )}
          >
            {index + 1}
          </span>
          <span className="text-pretty">{point}</span>
        </li>
      ))}
    </ol>
  );
}

const calloutTone = {
  trap: {
    wrap: 'border-destructive/25 bg-destructive/[0.06]',
    title: 'text-destructive',
    icon: AlertTriangle,
  },
  example: {
    wrap: 'border-warning/25 bg-warning/[0.07]',
    title: 'text-warning',
    icon: Lightbulb,
  },
  note: {
    wrap: 'border-primary/25 bg-primary/[0.06]',
    title: 'text-primary',
    icon: BookOpenText,
  },
  info: {
    wrap: 'border-info/25 bg-info/[0.06]',
    title: 'text-info',
    icon: Lightbulb,
  },
} as const;

export function Callout({
  tone,
  title,
  children,
}: {
  tone: keyof typeof calloutTone;
  title: string;
  children: ReactNode;
}) {
  const { wrap, title: titleClass, icon: Icon } = calloutTone[tone];
  return (
    <aside className={cn('rounded-xl border p-4 sm:p-4.5', wrap)}>
      <p
        className={cn(
          'flex items-center gap-1.5 text-[11px] font-extrabold tracking-[0.1em] uppercase',
          titleClass,
        )}
      >
        <Icon size={14} />
        {title}
      </p>
      <div className="mt-2 text-[14px] leading-relaxed text-foreground/85">
        {children}
      </div>
    </aside>
  );
}

/** Thẻ thuật ngữ — dùng ở cả slide khái niệm và bài học chuyên sâu. */
export function TermGrid({
  terms,
}: {
  terms: Array<{ term: string; definition: string }>;
}) {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {terms.map((item) => (
        <div
          key={item.term}
          className="rounded-xl border border-info/20 bg-info/[0.05] p-3.5"
        >
          <dt className="text-[13px] font-bold text-info">{item.term}</dt>
          <dd className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            {item.definition}
          </dd>
        </div>
      ))}
    </div>
  );
}

export function SourceList({
  sources,
}: {
  sources: Array<{ title: string; url: string; note: string }>;
}) {
  return (
    <ul className="grid gap-3">
      {sources.map((source) => (
        <li key={`${source.url}-${source.title}`}>
          <a
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className="text-[14px] font-semibold text-primary underline underline-offset-4"
          >
            {source.title}
          </a>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            {source.note}
          </p>
        </li>
      ))}
    </ul>
  );
}

/* ── Trạng thái tải ──────────────────────────────────────────────── */

export function StageSkeleton({ lines = 6 }: { lines?: number }) {
  return (
    <div className="animate-pulse space-y-5" aria-busy="true" aria-live="polite">
      <div className="space-y-2.5">
        <div className="h-3 w-28 rounded bg-muted" />
        <div className="h-7 w-2/3 rounded-lg bg-muted" />
        <div className="h-4 w-5/6 rounded bg-muted/70" />
      </div>
      <div className="space-y-2.5">
        {Array.from({ length: lines }, (_, index) => (
          <div
            key={index}
            className="h-12 rounded-xl bg-muted/60"
            style={{ width: `${100 - index * 3}%` }}
          />
        ))}
      </div>
      <span className="sr-only">Đang tải nội dung học tập…</span>
    </div>
  );
}

export function StageError({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div
      role="alert"
      className="grid gap-4 rounded-2xl border border-destructive/25 bg-destructive/[0.06] p-6 text-center"
    >
      <span className="mx-auto grid size-11 place-items-center rounded-xl bg-destructive/10 text-destructive">
        <WifiOff size={21} />
      </span>
      <div>
        <p className="font-bold text-foreground">Chưa tải được nội dung</p>
        <p className="mx-auto mt-1 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
          {message}
        </p>
      </div>
      <Button size="sm" variant="outline" className="mx-auto" onClick={onRetry}>
        <RotateCcw size={14} />
        Thử lại
      </Button>
    </div>
  );
}
