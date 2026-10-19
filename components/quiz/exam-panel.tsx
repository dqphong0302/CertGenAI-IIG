'use client';

import {
  BookOpenCheck,
  ChevronRight,
  Clock3,
  LoaderCircle,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  EXAM_MAX_SCORE,
  EXAM_PASS_SCORE,
  EXAM_POINTS_PER_QUESTION,
  EXAM_QUESTION_COUNT,
} from '@/lib/quiz';

export function ExamPanel({
  error,
  loading,
  onStart,
}: {
  error: string;
  loading: boolean;
  onStart: () => void;
}) {
  return (
    <>
      <div className="mb-7 grid grid-cols-[54px_1fr] items-start gap-4.5">
        <span className="grid size-[54px] place-items-center rounded-2xl border border-warning/25 bg-warning/10 text-warning shadow-sm">
          <Clock3 size={26} />
        </span>
        <div>
          <span className="text-[11px] font-extrabold tracking-widest text-warning uppercase">
            MÔ PHỎNG PHÒNG THI THỰC TẾ
          </span>
          <h2 className="mt-0.5 text-2xl font-extrabold tracking-tight text-foreground">
            IIG Certiport Generative AI
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Làm bài liền mạch 50 phút, không hiện đáp án trong lúc thi và có
            bảng tổng quan xem lại trước khi nộp bài.
          </p>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="grid grid-cols-[36px_1fr] items-center gap-x-3 rounded-xl border border-border bg-muted/40 p-4">
          <Clock3 className="row-span-2 size-6 text-warning" />
          <b className="text-base font-extrabold text-foreground">50 phút</b>
          <span className="text-[11px] text-muted-foreground">
            Thời gian làm bài
          </span>
        </div>
        <div className="grid grid-cols-[36px_1fr] items-center gap-x-3 rounded-xl border border-border bg-muted/40 p-4">
          <BookOpenCheck className="row-span-2 size-6 text-warning" />
          <b className="text-base font-extrabold text-foreground">
            {EXAM_QUESTION_COUNT} câu
          </b>
          <span className="text-[11px] text-muted-foreground">
            Trộn ngẫu nhiên
          </span>
        </div>
        <div className="grid grid-cols-[36px_1fr] items-center gap-x-3 rounded-xl border border-border bg-muted/40 p-4">
          <Target className="row-span-2 size-6 text-warning" />
          <b className="text-base font-extrabold text-foreground">
            {EXAM_PASS_SCORE}/{EXAM_MAX_SCORE}
          </b>
          <span className="text-[11px] text-muted-foreground">
            Mốc điểm đạt
          </span>
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-warning/25 bg-warning/10 p-5">
        <h3 className="mb-2.5 text-xs font-extrabold tracking-wide text-warning uppercase">
          Quy chế bài kiểm tra mô phỏng
        </h3>
        <ul className="m-0 grid list-disc gap-1.5 pl-5 text-xs leading-relaxed text-foreground/80">
          <li>
            Mỗi câu trọn vẹn tương đương{' '}
            <b>{EXAM_POINTS_PER_QUESTION} điểm</b>; điểm tối đa là{' '}
            {EXAM_MAX_SCORE} điểm.
          </li>
          <li>
            <b>Tính điểm lẻ từng câu nhỏ</b>: Các câu ma trận, ghép nối, chọn nhiều đáp án được cộng điểm tỷ lệ theo từng ý/dòng trả lời đúng.
          </li>
          <li>
            Cần đạt tối thiểu{' '}
            <b>
              {EXAM_PASS_SCORE}/{EXAM_MAX_SCORE} điểm
            </b>{' '}
            (tương đương quy đổi <b>31.5/{EXAM_QUESTION_COUNT} câu đúng</b>) để đạt mốc {EXAM_PASS_SCORE} điểm.
          </li>
          <li>
            Bài đang làm được lưu trên trình duyệt; sau khi nộp, bạn mở lại được
            lựa chọn từng câu, xem điểm lẻ từng ý nhỏ và giải thích chi tiết.
          </li>
          <li>
            Bạn có thể đánh dấu cờ (Flag) để xem lại và thay đổi đáp án trước
            khi bấm Nộp bài.
          </li>
        </ul>
      </div>

      {error && <p className="mb-4 text-sm text-destructive">{error}</p>}

      <Button
        id="start-exam"
        className="h-13 w-full bg-gradient-to-br from-stone-800 to-stone-950 text-[15px] font-bold text-white shadow-lg shadow-stone-900/25 hover:from-stone-900 hover:to-black dark:from-stone-100 dark:to-white dark:text-stone-900"
        onClick={onStart}
        disabled={loading}
      >
        {loading ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <>
            <span>Bắt đầu bài thi {EXAM_QUESTION_COUNT} câu (50 phút)</span>
            <ChevronRight size={18} />
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Mô phỏng chuẩn Certiport Generative AI: 45 câu / 50 phút, tính điểm lẻ từng câu nhỏ; kết quả chính thức do hệ thống Certiport chấm.
      </p>
    </>
  );
}
