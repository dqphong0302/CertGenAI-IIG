'use client';

import type { ReactNode } from 'react';
import {
  AlertTriangle,
  BookOpenText,
  Check,
  Lightbulb,
  RotateCcw,
  WifiOff,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * Khối dựng chung cho cả ứng dụng — phần học tập và các màn làm bài.
 *
 * Trước đây mỗi màn tự đặt cỡ chữ, bán kính và màu riêng nên cùng một loại
 * thông tin ("dễ nhầm", "đáp án đúng", "chưa có gì ở đây") lại trông khác nhau
 * ở từng chỗ. Gom về đây để toàn bộ ứng dụng dùng một thứ bậc chữ, một bộ
 * callout và một kiểu nút lọc.
 *
 * Thang chữ (dùng cho cả hai bên, đừng xuống dưới mức này ở nội dung đọc):
 *
 * - nhãn phần      `text-[11px]` in hoa, giãn chữ — chỉ cho eyebrow và nhãn ô
 * - chú thích       `text-[12.5px]` — nhãn số liệu, dòng nguồn, meta câu hỏi
 * - nội dung đọc    `text-[14px]`–`text-[15px]` — thân callout, lựa chọn, giải thích
 * - câu dẫn         `text-[15px]` leading-relaxed
 * - tiêu đề màn     `clamp()`, xem `StageHeading`
 */

/** Dòng nhỏ in hoa phía trên tiêu đề, cho biết đang ở đâu. */
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
  /** `1` khi màn này là cả một trang (kết quả, tổng quan bài thi). */
  level = 2,
}: {
  eyebrow?: ReactNode;
  eyebrowClassName?: string;
  title: string;
  lead?: string;
  actions?: ReactNode;
  id?: string;
  level?: 1 | 2;
}) {
  const Title = level === 1 ? 'h1' : 'h2';
  return (
    <header className="flex flex-col gap-4 border-b border-border/70 pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        {eyebrow && (
          <StageEyebrow className={cn('text-muted-foreground', eyebrowClassName)}>
            {eyebrow}
          </StageEyebrow>
        )}
        <Title
          id={id}
          className="mt-1.5 text-[clamp(1.35rem,2.4vw,1.9rem)] leading-tight font-extrabold tracking-tight text-foreground text-balance"
        >
          {title}
        </Title>
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

/* ── Callout ─────────────────────────────────────────────────────── */

/**
 * Sáu tông cho sáu việc khác nhau. Bốn tông đầu dùng khi giảng; `success` và
 * `caution` thêm vào cho các màn làm bài, nơi phải nói rõ "khớp khóa" hay
 * "chưa khớp" và cảnh báo quy chế thi.
 */
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
  success: {
    wrap: 'border-success/25 bg-success/[0.07]',
    title: 'text-success',
    icon: Check,
  },
  caution: {
    wrap: 'border-warning/25 bg-warning/[0.07]',
    title: 'text-warning',
    icon: AlertTriangle,
  },
} as const;

export type CalloutTone = keyof typeof calloutTone;

export function Callout({
  tone,
  title,
  children,
  className,
}: {
  tone: CalloutTone;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const { wrap, title: titleClass, icon: Icon } = calloutTone[tone];
  return (
    <aside className={cn('rounded-xl border p-4 sm:p-4.5', wrap, className)}>
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

/* ── Số liệu và trạng thái rỗng ──────────────────────────────────── */

/**
 * Một ô số liệu: trước thi (50 phút, 45 câu), trước khi nộp (đã làm, còn
 * trống) và sau khi chấm (điểm, số câu) đều là cùng một khối này.
 */
export function StatTile({
  icon,
  value,
  label,
  toneClassName,
}: {
  icon?: ReactNode;
  value: ReactNode;
  label: string;
  /** Màu của chữ số và biểu tượng, ví dụ `text-warning`. */
  toneClassName?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border/70 bg-muted/35 p-4',
        icon ? 'grid grid-cols-[2.25rem_1fr] items-center gap-x-3' : 'grid gap-1',
      )}
    >
      {icon && (
        <span
          className={cn(
            'row-span-2 grid size-9 place-items-center rounded-lg bg-background/70',
            toneClassName ?? 'text-muted-foreground',
          )}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      <b
        className={cn(
          'text-[clamp(1.1rem,1.9vw,1.4rem)] leading-none font-extrabold tracking-tight tabular-nums',
          toneClassName ?? 'text-foreground',
        )}
      >
        {value}
      </b>
      <span className="text-[12.5px] leading-snug text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

/** Chỗ trống có viền nét đứt: không có gì để hiện thì nói rõ bước tiếp theo. */
export function EmptyNote({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="grid justify-items-center gap-3 rounded-xl border border-dashed border-border px-5 py-9 text-center">
      <p className="max-w-[48ch] text-[14px] leading-relaxed text-muted-foreground text-pretty">
        {children}
      </p>
      {action}
    </div>
  );
}

/* ── Nút lọc ─────────────────────────────────────────────────────── */

const chipTone = {
  primary: 'border-primary/40 bg-primary/10 text-primary',
  destructive: 'border-destructive/40 bg-destructive/10 text-destructive',
  warning: 'border-warning/40 bg-warning/10 text-warning',
} as const;

/** Nút lọc một nhóm nội dung, kèm số lượng. Bật/tắt bằng `active`. */
export function FilterChip({
  id,
  active,
  count,
  tone = 'primary',
  onClick,
  children,
  className,
}: {
  id?: string;
  active: boolean;
  count?: number;
  tone?: keyof typeof chipTone;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      id={id}
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-[12.5px] font-bold transition-colors',
        active
          ? chipTone[tone]
          : 'border-border text-muted-foreground hover:bg-muted/50',
        className,
      )}
    >
      {children}
      {count !== undefined && (
        <span className="tabular-nums opacity-70">{count}</span>
      )}
    </button>
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
      <span className="sr-only">Đang tải nội dung…</span>
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
