'use client';

import { Download, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress as ProgressBar } from '@/components/ui/progress';
import {
  StageEyebrow,
  StatTile,
} from '@/components/shared/section-parts';
import { TOPICS, topicLabel } from '@/shared/domain';
import { fetchCourseOutline } from '@/lib/api/client';
import { useResource } from '@/lib/api/use-resource';

export function SidebarPanels({
  seen,
  total,
  accuracy,
  sessions,
  onExport,
  onImportClick,
  onReset,
  importRef,
  onImportFile,
}: {
  seen: number;
  total: number;
  accuracy: number;
  sessions: number;
  onExport: () => void;
  onImportClick: () => void;
  onReset: () => void;
  importRef: React.RefObject<HTMLInputElement | null>;
  onImportFile: (file?: File) => void;
}) {
  // Dùng chung bản mục lục đã nằm trong cache với phần học tập, nên thẻ này
  // không phát thêm một lượt gọi mạng nào.
  const outline = useResource('outline', () => fetchCourseOutline());
  const slideCount = (topic: (typeof TOPICS)[number]) =>
    outline.data?.concept.topics.find((entry) => entry.topic === topic)?.slides
      .length;

  return (
    <aside className="grid gap-4.5">
      <Card className="p-6">
        <StageEyebrow className="text-primary">Tiến độ tổng thể</StageEyebrow>
        <div className="my-3 flex items-baseline gap-1.5">
          <b className="text-[clamp(1.75rem,3.5vw,2rem)] leading-none font-extrabold tracking-tight text-foreground tabular-nums">
            {seen}
          </b>
          <span className="text-[13.5px] text-muted-foreground tabular-nums">
            / {total} câu đã gặp
          </span>
        </div>
        <ProgressBar value={(seen / total) * 100} />
        <div className="mt-4.5 grid grid-cols-2 gap-3">
          <StatTile value={`${accuracy}%`} label="Tỷ lệ chính xác" />
          <StatTile value={sessions} label="Phiên hoàn thành" />
        </div>
      </Card>

      <Card className="p-6">
        <StageEyebrow className="text-primary">
          4 khối kiến thức cốt lõi
        </StageEyebrow>
        <ol className="m-0 mt-4 grid list-none gap-0 p-0">
          {TOPICS.map((topic, index) => (
            <li
              key={topic}
              className="grid grid-cols-[1.75rem_1fr] items-center gap-2.5 border-t border-border/70 py-2.5 text-[13.5px] font-semibold text-foreground/85 first:border-t-0"
            >
              <span className="grid size-7 place-items-center rounded-lg bg-primary/10 text-[12px] font-extrabold text-primary tabular-nums">
                {index + 1}
              </span>
              {topicLabel[topic]}
              {slideCount(topic) ? ` (${slideCount(topic)} slide)` : ''}
            </li>
          ))}
        </ol>
      </Card>

      <Card className="p-6">
        <div className="grid grid-cols-[46px_1fr] gap-x-3.5">
          <span className="row-span-2 grid size-[46px] place-items-center rounded-xl bg-primary/10 text-primary">
            <Download size={22} />
          </span>
          <h3 className="mt-0.5 text-[16px] font-extrabold tracking-tight text-foreground">
            Dữ liệu trên máy
          </h3>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground">
            Tiến độ và bài làm lưu trên trình duyệt này. Xuất bản sao để giữ đáp
            án từng câu khi đổi máy hoặc xóa dữ liệu trình duyệt.
          </p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <Button id="export-data" variant="outline" onClick={onExport}>
            <Download size={14} /> Xuất bản sao
          </Button>
          <Button id="import-data" variant="outline" onClick={onImportClick}>
            <Upload size={14} /> Nhập bản sao
          </Button>
          <button
            id="reset-data"
            className="col-span-2 rounded-md p-2 text-[13px] font-semibold text-destructive transition-opacity hover:opacity-80 hover:underline"
            onClick={onReset}
          >
            Xóa lịch sử học tập
          </button>
        </div>
        <input
          ref={importRef}
          className="sr-only"
          type="file"
          accept="application/json"
          onChange={(event) => onImportFile(event.target.files?.[0])}
        />
      </Card>
    </aside>
  );
}
