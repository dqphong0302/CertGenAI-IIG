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
  Callout,
  StageHeading,
  StatTile,
} from '@/components/shared/section-parts';
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
    <section className="space-y-5" aria-labelledby="exam-title">
      <StageHeading
        id="exam-title"
        eyebrow="Mô phỏng phòng thi thực tế"
        eyebrowClassName="text-warning"
        title="IIG Certiport Generative AI"
        lead="Làm bài liền mạch 50 phút, không hiện đáp án trong lúc thi và có bảng tổng quan xem lại trước khi nộp bài."
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatTile
          icon={<Clock3 size={20} />}
          value="50 phút"
          label="Thời gian làm bài"
          toneClassName="text-warning"
        />
        <StatTile
          icon={<BookOpenCheck size={20} />}
          value={`${EXAM_QUESTION_COUNT} câu`}
          label="Trộn ngẫu nhiên"
          toneClassName="text-warning"
        />
        <StatTile
          icon={<Target size={20} />}
          value={`${EXAM_PASS_SCORE}/${EXAM_MAX_SCORE}`}
          label="Mốc điểm đạt"
          toneClassName="text-warning"
        />
      </div>

      <Callout tone="caution" title="Quy chế bài kiểm tra mô phỏng">
        <ul className="m-0 grid list-disc gap-1.5 pl-5">
          <li>
            Mỗi câu trọn vẹn tương đương{' '}
            <b>{EXAM_POINTS_PER_QUESTION} điểm</b>; điểm tối đa là{' '}
            {EXAM_MAX_SCORE} điểm.
          </li>
          <li>
            <b>Tính điểm lẻ từng câu nhỏ</b>: các câu ma trận, ghép nối, chọn
            nhiều đáp án được cộng điểm tỷ lệ theo từng ý/dòng trả lời đúng.
          </li>
          <li>
            Cần đạt tối thiểu{' '}
            <b>
              {EXAM_PASS_SCORE}/{EXAM_MAX_SCORE} điểm
            </b>{' '}
            (tương đương quy đổi <b>31.5/{EXAM_QUESTION_COUNT} câu đúng</b>) để
            đạt mốc {EXAM_PASS_SCORE} điểm.
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
      </Callout>

      {error && (
        <Callout tone="trap" title="Chưa bắt đầu được">
          {error}
        </Callout>
      )}

      <Button
        id="start-exam"
        className="h-13 w-full text-[15px] font-bold shadow-lg shadow-primary/25"
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
      <p className="text-center text-[12.5px] leading-relaxed text-muted-foreground">
        Mô phỏng chuẩn Certiport Generative AI: 45 câu / 50 phút, tính điểm lẻ
        từng câu nhỏ; kết quả chính thức do hệ thống Certiport chấm.
      </p>
    </section>
  );
}
