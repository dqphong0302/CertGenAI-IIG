'use client';

import { useMemo, useState } from 'react';
import {
  BookOpenText,
  Download,
  ExternalLink,
  FileText,
  Search,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { TOPICS, topicLabel, type Topic } from '@/shared/domain';
import { foldText } from '@/shared/text';
import { fetchReferences } from '@/lib/api/client';
import { useResource } from '@/lib/api/use-resource';
import {
  Callout,
  StageError,
  StageEyebrow,
  StageHeading,
  StageSkeleton,
} from '@/components/shared/section-parts';

export function ReferenceStage() {
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState<Topic | 'all'>('all');
  const references = useResource('references', () => fetchReferences());

  const documents = useMemo(() => {
    const data = references.data ?? [];
    const needle = foldText(query.trim());
    return data.filter(
      (doc) =>
        (topic === 'all' || doc.topics.includes(topic)) &&
        (!needle ||
          foldText(`${doc.title} ${doc.filename} ${doc.description}`).includes(
            needle,
          )),
    );
  }, [references.data, query, topic]);

  if (references.error) {
    return (
      <StageError message={references.error} onRetry={references.reload} />
    );
  }
  if (!references.data) return <StageSkeleton lines={4} />;

  return (
    <section className="space-y-5" aria-labelledby="references-title">
      <StageHeading
        id="references-title"
        eyebrow={`Thư viện tự học · ${references.data.length} tài liệu`}
        eyebrowClassName="text-primary"
        title="Tài liệu tham khảo"
        lead="Bản gốc của giáo trình và bài tập. Học giáo trình trước, làm bài tập, rồi quay lại ví dụ thực hành. Số trang là số trang PDF tính từ 1."
      />

      <Callout tone="note" title="Lưu ý khi đối chiếu">
        Bài luyện và bài thi chấm theo <b>đáp án IIG</b>. Tài liệu giúp hiểu
        khái niệm và cách ứng dụng; cách dùng thuật ngữ có thể khác nhau giữa
        các tài liệu.
      </Callout>

      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search
            size={14}
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
          />
          <input
            id="reference-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Tên tài liệu hoặc nội dung…"
            aria-label="Tìm tài liệu"
            className="h-10 w-full rounded-xl border border-border bg-background pr-3 pl-9 text-sm focus:ring-2 focus:ring-primary/35 focus:outline-none"
          />
        </div>
        <select
          id="reference-topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value as Topic | 'all')}
          aria-label="Nhóm kiến thức"
          className="h-10 rounded-xl border border-border bg-background px-3 text-sm font-medium focus:ring-2 focus:ring-primary/35 focus:outline-none"
        >
          <option value="all">Tất cả chủ đề</option>
          {TOPICS.map((item) => (
            <option key={item} value={item}>
              {topicLabel[item]}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-3.5">
        {documents.map((doc) => (
          <article
            key={doc.id}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex items-start gap-3.5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <FileText size={21} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="font-bold">
                    {doc.format}
                  </Badge>
                  <span className="text-[11px] font-medium text-muted-foreground tabular-nums">
                    {doc.pages
                      ? `${doc.pages} trang`
                      : 'Mẫu có thể chỉnh sửa'}
                  </span>
                </div>
                <h3 className="mt-1.5 text-[16px] leading-snug font-extrabold tracking-tight text-foreground">
                  {doc.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground text-pretty">
                  {doc.description}
                </p>
                <p className="mt-1.5 text-[12px] break-words text-muted-foreground/80">
                  {doc.filename}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                id={`reference-open-${doc.id}`}
                href={doc.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-3.5 text-xs font-bold text-primary-foreground hover:opacity-90"
              >
                <ExternalLink size={14} />
                {doc.format === 'PDF' ? 'Mở tài liệu' : 'Mở / tải Word'}
              </a>
              <a
                id={`reference-download-${doc.id}`}
                href={doc.url}
                download={doc.filename}
                className="inline-flex h-9 items-center gap-2 rounded-lg border border-border px-3.5 text-xs font-semibold hover:bg-muted"
              >
                <Download size={14} />
                Tải bản gốc
              </a>
            </div>

            <div className="mt-4 border-t border-border/70 pt-3.5">
              <StageEyebrow className="flex items-center gap-1.5 text-muted-foreground">
                <BookOpenText size={13} />
                Gợi ý đọc
              </StageEyebrow>
              <ul className="mt-2.5 grid gap-2.5">
                {doc.reading.map((entry) => (
                  <li key={entry.title}>
                    <a
                      href={doc.url + (entry.page ? `#page=${entry.page}` : '')}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        'text-[14px] font-semibold text-primary underline underline-offset-4',
                      )}
                    >
                      {entry.title}
                      {entry.page ? ` · trang ${entry.page}` : ''}
                    </a>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">
                      {entry.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        {documents.length === 0 && (
          <p className="rounded-xl border border-dashed border-border py-8 text-center text-sm text-muted-foreground">
            Không có tài liệu phù hợp. Đổi từ khóa hoặc chọn tất cả chủ đề.
          </p>
        )}
      </div>
    </section>
  );
}
