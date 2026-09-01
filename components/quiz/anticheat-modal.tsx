"use client";

import { useEffect, useRef } from "react";
import { AlertTriangle, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AntiCheatModalProps {
  isOpen: boolean;
  strikes: number;
  maxStrikes: number;
  reason?: string;
  onDismiss: () => void;
}

export function AntiCheatModal({
  isOpen,
  strikes,
  maxStrikes,
  reason,
  onDismiss,
}: AntiCheatModalProps) {
  const dismissRef = useRef<HTMLButtonElement>(null);

  // Đưa tiêu điểm vào nút xác nhận để đóng được bằng bàn phím.
  useEffect(() => {
    if (isOpen) dismissRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  const isFinalStrike = strikes >= maxStrikes;

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="anticheat-title"
      aria-describedby="anticheat-reason"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-destructive/40 bg-card p-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-destructive/15 text-destructive">
            <ShieldAlert className="h-6 w-6" />
          </div>
          <div>
            <h3 id="anticheat-title" className="text-lg font-bold text-foreground">
              {isFinalStrike ? "Đã đạt giới hạn vi phạm!" : "Cảnh báo vi phạm quy chế!"}
            </h3>
            <p className="text-xs text-muted-foreground">
              Hệ thống giám sát thi cử Anti-Cheat tự động
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-sm">
          <div id="anticheat-reason" className="flex items-start gap-2 text-destructive font-medium">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>{reason || "Phát hiện rời khỏi phòng thi hoặc chuyển tab."}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Mọi hành vi chuyển cửa sổ, thoát toàn màn hình, mở công cụ lập trình (DevTools) hoặc rời khỏi bài thi đều được ghi nhận vào nhật ký bảo mật.
          </p>
        </div>

        {strikes > 0 && (
          <div className="mt-4 flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2 text-xs">
            <span className="text-muted-foreground">Số lần cảnh báo vi phạm:</span>
            <span className="font-bold text-destructive">
              {strikes} / {maxStrikes} lần
            </span>
          </div>
        )}

        {isFinalStrike && (
          <p className="mt-4 text-center text-xs font-semibold text-destructive">
            Bài thi của bạn đã được tự động kết thúc và nộp điểm.
          </p>
        )}

        <div className="mt-6 flex justify-end gap-2">
          <Button
            ref={dismissRef}
            variant="destructive"
            className="w-full font-semibold shadow-md"
            onClick={onDismiss}
          >
            {isFinalStrike ? "Xem kết quả bài thi" : "Tôi đã hiểu và quay lại làm bài"}
          </Button>
        </div>
      </div>
    </div>
  );
}
