'use client';

import { useMemo, useState } from 'react';
import {
  BookOpenText,
  Copy,
  Download,
  ListChecks,
  Printer,
  Search,
  Timer,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EXAM_QUESTION_COUNT } from '@/lib/quiz';
import { foldText } from '@/shared/text';
import { fetchCramSheet } from '@/lib/api/client';
import { useResource } from '@/lib/api/use-resource';
import {
  Callout,
  StageError,
  StageEyebrow,
  StageHeading,
  StageSkeleton,
} from '@/components/shared/section-parts';

export function CramStage({
  onStartPractice,
  onStartExam,
}: {
  onStartPractice: () => void;
  onStartExam: () => void;
}) {
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState('');
  const sheet = useResource('cram', () => fetchCramSheet());

  const sections = useMemo(() => {
    const data = sheet.data?.sections ?? [];
    const needle = foldText(query.trim());
    if (!needle) return data;
    return data.filter((section) =>
      foldText(`${section.title} ${section.points.join(' ')}`).includes(needle),
    );
  }, [sheet.data, query]);

  async function copyAll() {
    const data = sheet.data?.sections ?? [];
    try {
      await navigator.clipboard.writeText(
        data
          .map(
            (section) =>
              `${section.title}\n${section.points.map((point) => `• ${point}`).join('\n')}`,
          )
          .join('\n\n'),
      );
      setNotice('Đã sao chép toàn bộ bản ghi nhớ.');
    } catch {
      setNotice('Trình duyệt không cho sao chép. Hãy tải bản Markdown bên dưới.');
    }
  }

  if (sheet.error) {
    return <StageError message={sheet.error} onRetry={sheet.reload} />;
  }
  if (!sheet.data) return <StageSkeleton lines={5} />;

  return (
    <section className="space-y-5" aria-labelledby="cram-title">
      <StageHeading
        id="cram-title"
        eyebrow={`Cập nhật ${sheet.data.updated}`}
        eyebrowClassName="text-primary"
        title="Ôn nhanh trước thi"
        lead="Một trang gói lại những ý dễ mất điểm nhất. Đọc lướt lần cuối trước khi vào phòng thi."
        actions={
          <>
            <a
              id="download-cram"
              href="/theory-handbook.md"
              download={`Cam_nang_GenAI_${sheet.data.updated.replaceAll('/', '-')}.md`}
              className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-3 text-xs font-semibold hover:bg-muted"
            >
              <Download size={14} />
              Tải Markdown
            </a>
            <Button size="sm" variant="outline" onClick={copyAll}>
              <Copy size={14} />
              Sao chép
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.print()}
              className="print:hidden"
            >
              <Printer size={14} />
              In
            </Button>
          </>
        }
      />

      {notice && (
        <output className="block text-xs font-medium text-primary">
          {notice}
        </output>
      )}

      <div className="relative print:hidden">
        <Search
          size={14}
          className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
        />
        <input
          id="cram-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Tìm trong bản ghi nhớ: few-shot, thiên lệch, PII…"
          aria-label="Tìm trong bản ghi nhớ"
          className="h-10 w-full rounded-xl border border-border bg-background pr-3 pl-9 text-sm focus:ring-2 focus:ring-primary/35 focus:outline-none"
        />
      </div>

      <div className="grid gap-3.5">
        {sections.map((section) => (
          <article
            key={section.id}
            id={`cram-${section.id}`}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <h3 className="text-[16px] font-extrabold tracking-tight text-foreground">
              {section.title}
            </h3>
            <ul className="mt-3 grid gap-2.5">
              {section.points.map((point) => (
                <li
                  key={point}
                  className="grid grid-cols-[0.9rem_1fr] items-start gap-2.5 text-[14.5px] leading-relaxed text-foreground/90"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 rounded-full bg-primary"
                  />
                  <span className="text-pretty">{point}</span>
                </li>
              ))}
            </ul>
            <a
              href={section.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-primary underline underline-offset-4"
            >
              <BookOpenText size={13} />
              {section.source}
            </a>
          </article>
        ))}

        {sections.length === 0 && (
          <p className="rounded-xl border border-dashed border-border py-8 text-center text-sm text-muted-foreground">
            Không có mục nào khớp “{query.trim()}”. Thử từ khóa khác.
          </p>
        )}
      </div>

      <Callout tone="info" title="Tài liệu đối chiếu">
        <p>
          Liên kết dẫn tới bản tài liệu gốc trong thư mục tham khảo. Đây là phần
          diễn giải tự học, không phải đính chính chính thức.
        </p>
        <ul className="mt-2 grid gap-1.5">
          {sheet.data.extraReferences.map((reference) => (
            <li key={reference.url}>
              <a
                href={reference.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline underline-offset-4"
              >
                {reference.label}
              </a>
            </li>
          ))}
        </ul>
      </Callout>

      <div className="flex flex-wrap gap-2 print:hidden">
        <Button id="cram-start-practice" onClick={onStartPractice}>
          <ListChecks size={15} />
          Chọn bài luyện
        </Button>
        <Button id="cram-start-exam" variant="outline" onClick={onStartExam}>
          <Timer size={15} />
          Thi thử {EXAM_QUESTION_COUNT} câu
        </Button>
      </div>

      <StageEyebrow className="text-muted-foreground print:block hidden">
        CertGenAI · Ôn nhanh {sheet.data.updated}
      </StageEyebrow>
    </section>
  );
}
