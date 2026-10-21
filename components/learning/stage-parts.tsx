'use client';

import { cn } from '@/lib/utils';

/**
 * Khối nội dung riêng của phần học tập: ý chính, thẻ thuật ngữ, danh sách
 * nguồn đọc. Những khối dùng chung với các màn làm bài (tiêu đề, callout, ô
 * số liệu, nút lọc, trạng thái tải) nằm ở `@/components/shared/section-parts`.
 */

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
