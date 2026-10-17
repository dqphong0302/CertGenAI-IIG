'use client';

import { useState } from 'react';
import { BookOpenCheck, FolderClock, RotateCcw } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Attempt } from '@/lib/quiz';

export function HistoryPanel({
  attempts,
  pendingCount,
  loading,
  onOpen,
  onRetry,
  onRetryAll,
}: {
  attempts: Attempt[];
  pendingCount: number;
  loading: boolean;
  onOpen: (id: string) => void;
  onRetry: (ids: string[]) => void;
  onRetryAll: () => void;
}) {
  const [limit, setLimit] = useState(6);
  return (
    <section
      id="saved-papers"
      className="mt-7 grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]"
      aria-label="Bài làm và câu cần ôn"
    >
      <Card className="self-start border-primary/20 bg-primary/5 p-6">
        <BookOpenCheck size={26} className="text-primary" />
        <h2 className="mt-3 text-lg font-extrabold">Câu cần ôn lại</h2>
        <b className="my-2 block text-4xl font-extrabold text-primary">
          {pendingCount}
        </b>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Gồm câu chưa khớp khóa và bỏ trống. Làm đúng ở lần sau để đưa câu ra
          khỏi danh sách. Các bài mới dùng khóa IIG.
        </p>
        <Button
          id="retry-all-mistakes"
          className="mt-4 w-full"
          disabled={!pendingCount || loading}
          onClick={onRetryAll}
        >
          <RotateCcw size={15} />
          Luyện các câu cần ôn
        </Button>
      </Card>
      <Card className="min-w-0 p-5 sm:p-7">
        <div className="mb-4 flex items-center gap-3">
          <FolderClock className="text-primary" />
          <div>
            <h2 className="text-xl font-extrabold">Bài làm đã lưu</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {attempts.length} lượt · Xem lại đáp án đã chọn và giải thích từng
              câu.
            </p>
          </div>
        </div>
        {!attempts.length && (
          <p className="rounded-xl bg-muted/40 p-5 text-sm text-muted-foreground">
            Bài thi và buổi luyện tập sau khi nộp sẽ xuất hiện ở đây.
          </p>
        )}
        {attempts.slice(0, limit).map((a) => (
          <article key={a.id} className="border-t border-border py-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold">
                  {a.mode === 'exam' ? 'Thi thử mô phỏng' : 'Luyện tập'} ·{' '}
                  {a.correct}/{a.total} câu khớp khóa
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {new Date(a.date).toLocaleString('vi-VN')} ·{' '}
                  {Math.floor(a.duration / 60)}p {a.duration % 60}s
                </p>
              </div>
              <b className="rounded-lg bg-primary/10 px-3 py-2 text-sm text-primary">
                {a.mode === 'exam'
                  ? `${a.estimatedScore ?? a.correct * 20}/1000`
                  : `${a.percent}%`}
              </b>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                id={`open-paper-${a.id}`}
                size="sm"
                variant="outline"
                disabled={!a.hasPaper || loading}
                onClick={() => onOpen(a.id)}
              >
                Xem bài làm
              </Button>
              {a.wrongIds.length > 0 && (
                <Button
                  id={`retry-paper-${a.id}`}
                  size="sm"
                  variant="outline"
                  disabled={loading}
                  onClick={() => onRetry(a.wrongIds)}
                >
                  Ôn {a.wrongIds.length} câu cần xem lại
                </Button>
              )}
            </div>
            {!a.hasPaper && (
              <p className="mt-2 text-xs text-muted-foreground">
                Lượt cũ chỉ lưu điểm tổng kết; chưa có lựa chọn từng câu để mở
                lại.
              </p>
            )}
          </article>
        ))}
        {attempts.length > limit && (
          <Button
            id="history-show-more"
            className="mt-3"
            variant="outline"
            onClick={() => setLimit((n) => n + 10)}
          >
            Xem thêm {Math.min(10, attempts.length - limit)} bài
          </Button>
        )}
      </Card>
    </section>
  );
}
