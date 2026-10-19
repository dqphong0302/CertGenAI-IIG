'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronDown, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Khung trình chiếu dùng chung cho bài giảng và khái niệm.
 *
 * Nội dung của cả hai phần đều đã đúng khuôn một slide: một câu dẫn, ba đến
 * bốn ý chính ngắn, một ví dụ áp dụng, một bẫy thường gặp. Trước đây tất cả
 * đổ thẳng vào một thẻ cuộn dài nên người học nhận cả slide cùng lúc và
 * không biết đâu là ý phải nhớ.
 *
 * Ở đây slide được chia thành các **nhịp**: mở ra từng phần theo đúng thứ tự
 * giảng — ý chính trước, rồi áp dụng, rồi chỗ dễ nhầm, cuối cùng là câu ghi
 * nhớ. Phần đã mở vẫn nằm nguyên trên khung để đối chiếu, và ai muốn đọc
 * nhanh thì bật "Hiện cả slide".
 */

export type Beat = {
  id: string;
  /** Nhãn in hoa ở đầu nhịp, ví dụ "Ý chính", "Dễ nhầm". */
  label: string;
  /**
   * Chữ trên nút mở nhịp này. Dùng khi `label` lấy từ dữ liệu nên quá dài để
   * đặt lên nút, ví dụ "Thuật ngữ & Định nghĩa cốt lõi (Kiến trúc Ảnh)".
   */
  cta?: string;
  content: ReactNode;
};

export type BeatControls = {
  beats: Beat[];
  revealed: number;
  showAll: boolean;
  atEnd: boolean;
  revealNext: () => void;
  revealAll: () => void;
  setShowAll: (value: boolean) => void;
};

/**
 * Nhịp hiện tại của slide đang mở.
 *
 * `slideKey` là danh tính slide: đổi slide là nhịp quay về đầu. `showAll` là
 * lựa chọn của người học nên giữ nguyên khi chuyển slide.
 */
export function useBeats(slideKey: string, beats: Beat[]): BeatControls {
  const [showAll, setShowAll] = useState(false);
  const [state, setState] = useState<{ key: string; revealed: number }>({
    key: slideKey,
    revealed: 1,
  });

  // Ngay sau khi đổi slide, state vẫn thuộc slide trước: đọc lại ở render thay
  // vì đồng bộ bằng effect.
  const revealed =
    state.key === slideKey ? Math.min(state.revealed, beats.length) : 1;

  const revealNext = useCallback(() => {
    setState((current) => {
      const base = current.key === slideKey ? current.revealed : 1;
      return { key: slideKey, revealed: base + 1 };
    });
  }, [slideKey]);

  const revealAll = useCallback(() => {
    setState({ key: slideKey, revealed: beats.length });
  }, [slideKey, beats.length]);

  const effectiveRevealed = showAll ? beats.length : revealed;

  return useMemo(
    () => ({
      beats,
      revealed: effectiveRevealed,
      showAll,
      atEnd: effectiveRevealed >= beats.length,
      revealNext,
      revealAll,
      setShowAll,
    }),
    [beats, effectiveRevealed, showAll, revealNext, revealAll],
  );
}

/**
 * Phím điều khiển kiểu trình chiếu: → mở nhịp tiếp theo, hết nhịp thì sang
 * slide sau; ← lùi slide. Bỏ qua khi con trỏ đang ở trong ô nhập liệu.
 */
export function useSlideKeys({
  onAdvance,
  onBack,
}: {
  onAdvance: () => void;
  onBack: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement && target.isContentEditable)
      ) {
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        onAdvance();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        onBack();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onAdvance, onBack]);
}

/* ── Khung ───────────────────────────────────────────────────────── */

export function SlideCanvas({
  position,
  total,
  eyebrow,
  eyebrowClassName,
  meta,
  title,
  lead,
  controls,
  footer,
  accentClassName,
}: {
  position: number;
  total: number;
  eyebrow: string;
  eyebrowClassName?: string;
  /** Thông tin phụ ở góc phải (thời lượng, nhãn slide). */
  meta?: ReactNode;
  title: string;
  lead: string;
  controls: BeatControls;
  footer: ReactNode;
  /** Màu nền của thanh tiến độ và số nhịp. */
  accentClassName?: string;
}) {
  const { beats, revealed, showAll, atEnd, revealNext, setShowAll } = controls;

  return (
    <section
      aria-label={`Slide ${position} trên ${total}: ${title}`}
      className="flex min-h-[30rem] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
    >
      {/* Thanh tiến độ vị trí trong phần */}
      <div className="h-1 w-full bg-muted" aria-hidden="true">
        <div
          className={cn(
            'h-full transition-[width] duration-500',
            accentClassName ?? 'bg-primary',
          )}
          style={{ width: `${(position / Math.max(total, 1)) * 100}%` }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-9">
        <header>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p
              className={cn(
                'text-[11px] font-extrabold tracking-[0.14em] uppercase',
                eyebrowClassName ?? 'text-muted-foreground',
              )}
            >
              {eyebrow}
            </p>
            <span
              className="text-xs font-semibold text-muted-foreground tabular-nums"
              aria-hidden="true"
            >
              {position}/{total}
            </span>
            {meta && <div className="ml-auto">{meta}</div>}
          </div>

          <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] font-extrabold tracking-tight text-foreground text-balance">
            {title}
          </h2>
          {/* Câu dẫn: điều duy nhất phải nhớ nếu chỉ đọc được một dòng. */}
          <p className="mt-3 max-w-[60ch] text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-muted-foreground text-pretty">
            {lead}
          </p>
        </header>

        <div className="flex flex-1 flex-col gap-5">
          {beats.slice(0, revealed).map((beat, index) => (
            <BeatBlock
              key={beat.id}
              index={index}
              label={beat.label}
              accentClassName={accentClassName}
              isLatest={!showAll && index === revealed - 1 && revealed > 1}
            >
              {beat.content}
            </BeatBlock>
          ))}

          {!atEnd && (
            <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
              <button
                type="button"
                id="slide-reveal-next"
                onClick={revealNext}
                className={cn(
                  'inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-background px-4 text-[13px] font-bold text-foreground transition-colors hover:bg-muted',
                )}
              >
                <ChevronDown size={15} />
                {beats[revealed]?.cta ?? beats[revealed]?.label ?? 'Phần tiếp'}
                <kbd className="ml-1 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-semibold text-muted-foreground">
                  →
                </kbd>
              </button>
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="inline-flex h-10 items-center gap-1.5 px-2 text-[13px] font-semibold text-muted-foreground hover:text-foreground"
              >
                <Eye size={14} />
                Hiện cả slide
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-border/70 bg-muted/25">{footer}</div>
    </section>
  );
}

function BeatBlock({
  index,
  label,
  children,
  accentClassName,
  isLatest,
}: {
  index: number;
  label: string;
  children: ReactNode;
  accentClassName?: string;
  isLatest: boolean;
}) {
  return (
    <section
      aria-label={label}
      className={cn(
        'grid grid-cols-[1.75rem_1fr] gap-x-3.5 gap-y-2',
        isLatest && 'animate-in fade-in slide-in-from-bottom-2 duration-300',
      )}
    >
      <span
        className={cn(
          'mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg text-[11px] font-extrabold text-white tabular-nums',
          accentClassName ?? 'bg-primary',
        )}
        aria-hidden="true"
      >
        {index + 1}
      </span>
      <p className="self-center text-[11px] font-extrabold tracking-[0.12em] text-muted-foreground uppercase">
        {label}
      </p>
      <div className="col-start-2">{children}</div>
    </section>
  );
}

/* ── Khối nội dung bên trong một nhịp ────────────────────────────── */

/** Ý chính: đơn vị đọc chính của slide, cỡ chữ lớn hơn phần phụ. */
export function SlidePoints({ points }: { points: string[] }) {
  return (
    <ul className="grid gap-3">
      {points.map((point) => (
        <li
          key={point}
          className="grid grid-cols-[0.5rem_1fr] items-start gap-3 text-[clamp(0.9rem,1.35vw,1.0625rem)] leading-[1.65] text-foreground/90"
        >
          <span
            aria-hidden="true"
            className="mt-[0.6em] size-1.5 rounded-full bg-border"
          />
          <span className="text-pretty">{point}</span>
        </li>
      ))}
    </ul>
  );
}

/** Cặp nhãn — nội dung, dùng cho ví dụ áp dụng và khung phân tích. */
export function SlideDefinitions({
  items,
  tone = 'neutral',
}: {
  items: Array<{ label: string; value: string }>;
  tone?: 'neutral' | 'info';
}) {
  return (
    <dl className="grid gap-2">
      {items.map((item) => (
        <div
          key={`${item.label}-${item.value}`}
          className={cn(
            'rounded-xl border p-3.5',
            tone === 'info'
              ? 'border-info/20 bg-info/[0.05]'
              : 'border-border/70 bg-background/70',
          )}
        >
          <dt
            className={cn(
              'text-[13px] font-bold',
              tone === 'info' ? 'text-info' : 'text-foreground',
            )}
          >
            {item.label}
          </dt>
          <dd className="mt-1 text-[14.5px] leading-relaxed text-foreground/85 text-pretty">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Câu phải nhớ của slide — đóng lại nhịp cuối. */
export function SlideTakeaway({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-primary pl-4 text-[clamp(0.95rem,1.4vw,1.0625rem)] leading-[1.6] font-bold text-foreground text-pretty">
      {children}
    </p>
  );
}
