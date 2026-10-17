'use client';

import { useState } from 'react';
import {
  BookOpenText,
  Download,
  ExternalLink,
  FileText,
  Search,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { REFERENCE_MATERIALS } from '@/lib/reference-materials';
import { topicLabel, type Topic } from '@/lib/quiz';

const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .toLowerCase();

export function ReferenceLibrary() {
  const [search, setSearch] = useState('');
  const [topic, setTopic] = useState<Topic | 'all'>('all');
  const documents = REFERENCE_MATERIALS.filter(
    (doc) =>
      (topic === 'all' || doc.topics.includes(topic)) &&
      normalize(`${doc.title} ${doc.filename} ${doc.description}`).includes(
        normalize(search),
      ),
  );
  return (
    <section aria-labelledby="references-heading">
      <span className="text-xs font-bold uppercase tracking-wide text-primary">
        THƯ VIỆN TỰ HỌC · 4 TÀI LIỆU
      </span>
      <h2 id="references-heading" className="mt-2 text-2xl font-extrabold">
        Tài liệu tham khảo
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Bản tài liệu từ thư mục thamkhao của bạn. Học giáo trình trước, làm bài
        tập rồi quay lại ví dụ thực hành. Số trang bên dưới là số trang PDF tính
        từ 1.
      </p>
      <p className="mt-3 rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm leading-relaxed">
        Bài luyện và bài thi mới chấm theo <b>đáp án IIG</b>. Tài liệu giúp hiểu
        khái niệm và ứng dụng; cách dùng thuật ngữ có thể khác nhau giữa các tài
        liệu.
      </p>
      <div className="my-5 grid gap-3 sm:grid-cols-2">
        <label htmlFor="reference-search" className="text-xs font-semibold">
          <span className="mb-2 flex items-center gap-2">
            <Search size={14} />
            Tìm tài liệu
          </span>
          <Input
            id="reference-search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Tên tài liệu hoặc nội dung…"
          />
        </label>
        <label htmlFor="reference-topic" className="text-xs font-semibold">
          <span className="mb-2 block">Nhóm kiến thức</span>
          <select
            id="reference-topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value as Topic | 'all')}
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
          >
            <option value="all">Tất cả chủ đề</option>
            {Object.entries(topicLabel)
              .filter(([id]) => id !== 'all')
              .map(([id, label]) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div className="space-y-4">
        {documents.map((doc) => (
          <article
            key={doc.id}
            className="rounded-2xl border border-border bg-muted/20 p-4 sm:p-5"
          >
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <FileText size={21} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-primary">
                  {doc.format}
                  {doc.pages
                    ? ` · ${doc.pages} trang`
                    : ' · Mẫu có thể chỉnh sửa'}
                </p>
                <h3 className="mt-1 font-bold">{doc.title}</h3>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {doc.description}
            </p>
            <p className="mt-2 break-words text-xs leading-relaxed text-muted-foreground">
              {doc.filename}
            </p>
            <div className="my-4 flex flex-wrap gap-2">
              <a
                id={`reference-open-${doc.id}`}
                href={doc.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-9 items-center gap-2 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground"
              >
                <ExternalLink size={14} />
                {doc.format === 'PDF' ? 'Mở tài liệu' : 'Mở / tải Word'}
              </a>
              <a
                id={`reference-download-${doc.id}`}
                href={doc.url}
                download={doc.filename}
                className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-border px-3 text-xs font-semibold"
              >
                <Download size={14} />
                Tải bản gốc
              </a>
            </div>
            <div className="border-t border-border pt-3">
              <p className="mb-2 flex items-center gap-2 text-xs font-bold">
                <BookOpenText size={14} />
                Gợi ý đọc
              </p>
              <ul className="space-y-2">
                {doc.reading.map((entry) => (
                  <li key={entry.title}>
                    <a
                      id={`reference-reading-${doc.id}-${entry.page ?? 'word'}`}
                      href={doc.url + (entry.page ? `#page=${entry.page}` : '')}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-primary underline underline-offset-4"
                    >
                      {entry.title}
                      {entry.page ? ` · trang ${entry.page}` : ''}
                    </a>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {entry.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        {!documents.length && (
          <p className="py-8 text-center text-sm text-muted-foreground">
            Không có tài liệu phù hợp. Hãy đổi từ khóa hoặc chọn tất cả chủ đề.
          </p>
        )}
      </div>
    </section>
  );
}
