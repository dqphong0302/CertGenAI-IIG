import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Attempt, difficultyLabel, EXAM_PASS_SCORE, topicLabel } from "@/lib/quiz";

export function HistoryPanel({ attempts }: { attempts: Attempt[] }) {
  if (attempts.length === 0) return null;

  return (
    <Card className="mt-7 p-7">
      <div className="mb-1">
        <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase">
          LỊCH SỬ HỌC TẬP GẦN ĐÂY
        </span>
        <h2 className="mt-0.5 text-xl font-extrabold tracking-tight text-foreground">Kết quả các lượt làm bài</h2>
      </div>
      <div>
        {attempts.slice(0, 6).map((attempt) => {
          const scoreTone =
            attempt.percent >= 70 ? "good" : attempt.percent >= 50 ? "mid" : "low";
          return (
            <div key={attempt.id} className="grid grid-cols-[46px_1fr_auto] items-center gap-4 border-t border-border py-3.5 first:border-t-0">
              <span
                className={cn(
                  "grid size-[42px] place-items-center rounded-lg border text-[13px] font-extrabold",
                  scoreTone === "good" && "border-success/25 bg-success/10 text-success",
                  scoreTone === "mid" && "border-warning/25 bg-warning/10 text-warning",
                  scoreTone === "low" && "border-destructive/25 bg-destructive/10 text-destructive",
                )}
              >
                {attempt.mode === "exam" ? attempt.estimatedScore ?? Math.round(attempt.percent * 10) : `${attempt.percent}%`}
              </span>
              <div>
                <b className="text-[13px] font-bold text-foreground">
                  {attempt.mode === "practice" ? "Tập luyện tự do" : "Thi thử mô phỏng"} ·{" "}
                  {attempt.mode === "exam"
                    ? `${attempt.correct}/${attempt.total} câu · ${
                        (attempt.estimatedScore ?? 0) >= EXAM_PASS_SCORE ? "Đạt chuẩn" : "Cần cố gắng"
                      }`
                    : `${attempt.topic && attempt.topic !== "all" ? `${topicLabel[attempt.topic]} · ` : ""}${
                        difficultyLabel[attempt.difficulty]
                      }`}
                </b>
                <small className="mt-0.5 block text-[11px] text-muted-foreground">
                  {new Date(attempt.date).toLocaleString("vi-VN")}
                </small>
              </div>
              <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                {Math.floor(attempt.duration / 60)}p {attempt.duration % 60}s
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
