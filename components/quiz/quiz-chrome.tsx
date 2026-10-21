'use client';

import type { ReactNode } from 'react';
import { ArrowLeft, Clock3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress as ProgressBar } from '@/components/ui/progress';

/**
 * Thanh trên của các màn làm bài. Màn câu hỏi và bảng tổng quan trước khi nộp
 * trước đây dựng riêng hai thanh gần giống nhau nên chiều cao, cỡ chữ và viên
 * đếm giờ lệch nhau mỗi lần chuyển qua lại. Giờ cả hai dùng chung khối này.
 */

export function formatClock(totalSeconds: number) {
  const safe = Math.max(0, totalSeconds);
  const minutes = Math.floor(safe / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (safe % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

/** Viên đếm giờ. Dưới 5 phút thì chuyển sang tông cảnh báo và nháy. */
export function TimerPill({
  seconds,
  low,
  prefix,
}: {
  seconds: number;
  low: boolean;
  /** "Còn" khi đang đếm ngược trong bài thi; bỏ trống khi đếm xuôi. */
  prefix?: string;
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-full px-3 py-1.5 text-[14px] font-extrabold tabular-nums sm:px-3.5',
        low
          ? 'animate-pulse border border-destructive/25 bg-destructive/10 text-destructive'
          : 'bg-muted text-foreground',
      )}
    >
      <Clock3 size={16} />
      {prefix && <span className="hidden sm:inline">{prefix} </span>}
      {formatClock(seconds)}
    </div>
  );
}

export function QuizTopBar({
  exitId,
  onExit,
  title,
  shortTitle,
  progress,
  children,
}: {
  exitId: string;
  onExit: () => void;
  /** Dòng mô tả vị trí hiện tại, hiện từ `sm` trở lên. */
  title: string;
  /** Bản ngắn cho màn hẹp. */
  shortTitle: string;
  /** Phần trăm đã trả lời; bỏ trống thì không vẽ thanh tiến độ. */
  progress?: number;
  /** Phần bên phải: huy hiệu chống gian lận, đồng hồ, đổi nền sáng/tối. */
  children: ReactNode;
}) {
  return (
    <header className="sticky top-0 z-50 grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-border bg-background/90 px-4 shadow-sm backdrop-blur-md sm:h-19 sm:gap-6 sm:px-[max(1.5rem,calc((100vw-1180px)/2))]">
      <button
        id={exitId}
        type="button"
        onClick={onExit}
        className="flex items-center gap-2 rounded-lg px-2 py-2 text-[13px] font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-3"
      >
        <ArrowLeft size={16} />
        <span className="hidden sm:inline">Thoát</span>
      </button>

      <div className="hidden min-w-0 grid-cols-[auto_1fr] items-center gap-3.5 text-[13px] font-bold text-foreground sm:grid">
        <span className="truncate">{title}</span>
        {progress !== undefined && <ProgressBar value={progress} />}
      </div>

      <span className="min-w-0 truncate text-[13px] font-bold text-foreground sm:hidden">
        {shortTitle}
      </span>

      <div className="flex items-center gap-2">{children}</div>
    </header>
  );
}
