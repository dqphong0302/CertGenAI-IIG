"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { checkAutomationEnvironment, enforceFrameBuster, initAntiCheat } from "@/lib/anticheat";

/**
 * Một hành vi rời màn hình thường bắn nhiều sự kiện cùng lúc
 * (visibilitychange + blur, hoặc fullscreenchange + blur).
 * Gộp chúng trong khoảng này để chỉ tính đúng một lần vi phạm.
 */
const STRIKE_COOLDOWN_MS = 1500;

export interface UseAntiCheatOptions {
  enabled?: boolean;
  isExamMode?: boolean;
  maxStrikes?: number;
  onMaxStrikesReached?: (strikes: number) => void;
}

export function useAntiCheat({
  enabled = true,
  isExamMode = false,
  maxStrikes = 3,
  onMaxStrikesReached,
}: UseAntiCheatOptions = {}) {
  const [strikes, setStrikes] = useState(0);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [warningReason, setWarningReason] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [automationReason, setAutomationReason] = useState("");

  const strikesRef = useRef(0);
  const lastStrikeAtRef = useRef(0);
  const maxReachedRef = useRef(false);
  const wasFullscreenRef = useRef(false);
  const onMaxStrikesReachedRef = useRef(onMaxStrikesReached);

  // Đồng bộ callback qua effect, không ghi ref trong lúc render.
  useEffect(() => {
    onMaxStrikesReachedRef.current = onMaxStrikesReached;
  });

  /**
   * Ghi nhận một lần vi phạm. Mọi side-effect nằm ngoài updater của setState
   * để React không thể chạy lại chúng hai lần.
   */
  const registerStrike = useCallback(
    (reason: string) => {
      const now = Date.now();
      if (now - lastStrikeAtRef.current < STRIKE_COOLDOWN_MS) return;
      lastStrikeAtRef.current = now;

      const next = strikesRef.current + 1;
      strikesRef.current = next;

      setStrikes(next);
      setWarningReason(reason);
      setIsWarningOpen(true);

      if (next >= maxStrikes && !maxReachedRef.current) {
        maxReachedRef.current = true;
        onMaxStrikesReachedRef.current?.(next);
      }
    },
    [maxStrikes],
  );

  /** Mở cảnh báo mà không tính là vi phạm (ví dụ: phát hiện môi trường tự động hóa). */
  const showWarning = useCallback((reason: string) => {
    setWarningReason(reason);
    setIsWarningOpen(true);
  }, []);

  // Frame buster + phát hiện automation: luôn chạy một lần khi mount.
  useEffect(() => {
    enforceFrameBuster();
    const auto = checkAutomationEnvironment();
    if (auto.isAutomated) {
      // oxlint-disable-next-line react/react-compiler -- chỉ đọc được ở client sau khi mount
      setAutomationReason(auto.reason ?? "Phát hiện môi trường tự động hóa.");
    }
  }, []);

  // Các listener chặn thao tác (F12, chuột phải, copy/paste...).
  useEffect(() => {
    if (!enabled) return;
    return initAntiCheat();
  }, [enabled]);

  // Theo dõi fullscreen; thoát fullscreen giữa giờ thi tính là một vi phạm.
  useEffect(() => {
    if (typeof document === "undefined") return;

    const handleFullscreenChange = () => {
      const active = Boolean(document.fullscreenElement);
      setIsFullscreen(active);
      if (active) {
        wasFullscreenRef.current = true;
      } else if (wasFullscreenRef.current && enabled && isExamMode) {
        registerStrike("Phát hiện thoát khỏi chế độ toàn màn hình.");
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [enabled, isExamMode, registerStrike]);

  // Giám sát chuyển tab / mất tiêu điểm, chỉ trong chế độ thi.
  useEffect(() => {
    if (!enabled || !isExamMode) return;

    let blurTimer: ReturnType<typeof setTimeout> | null = null;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        registerStrike("Phát hiện chuyển sang ứng dụng hoặc tab khác.");
      }
    };

    const handleWindowBlur = () => {
      // Hoãn một nhịp để bỏ qua popup hệ thống chớp nhoáng.
      // Nếu visibilitychange đã tính rồi thì cooldown sẽ chặn lần đếm thứ hai.
      blurTimer = setTimeout(() => {
        if (!document.hasFocus()) {
          registerStrike("Phát hiện cửa sổ làm bài mất tiêu điểm (Window Blur).");
        }
      }, 500);
    };

    const handleWindowFocus = () => {
      if (blurTimer) clearTimeout(blurTimer);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);

    return () => {
      if (blurTimer) clearTimeout(blurTimer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, [enabled, isExamMode, registerStrike]);

  /**
   * Phải gọi đồng bộ ngay trong handler của cú click thì trình duyệt mới cho phép.
   */
  const requestFullscreen = useCallback(() => {
    try {
      if (typeof document !== "undefined" && document.documentElement.requestFullscreen) {
        void document.documentElement.requestFullscreen().catch(() => {});
      }
    } catch {
      // Trình duyệt từ chối nếu không xuất phát từ thao tác người dùng
    }
  }, []);

  const exitFullscreen = useCallback(() => {
    try {
      if (typeof document !== "undefined" && document.fullscreenElement) {
        wasFullscreenRef.current = false;
        void document.exitFullscreen().catch(() => {});
      }
    } catch {
      // Bỏ qua
    }
  }, []);

  const dismissWarning = useCallback(() => {
    setIsWarningOpen(false);
  }, []);

  const resetStrikes = useCallback(() => {
    strikesRef.current = 0;
    lastStrikeAtRef.current = 0;
    maxReachedRef.current = false;
    wasFullscreenRef.current = false;
    setStrikes(0);
    setWarningReason("");
    setIsWarningOpen(false);
  }, []);

  /** Khôi phục số vi phạm khi tiếp tục một phiên thi đã lưu (chặn việc F5 để xóa vi phạm). */
  const restoreStrikes = useCallback(
    (value: number) => {
      const safe = Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
      strikesRef.current = safe;
      lastStrikeAtRef.current = 0;
      maxReachedRef.current = safe >= maxStrikes;
      wasFullscreenRef.current = false;
      setStrikes(safe);
      setIsWarningOpen(false);
    },
    [maxStrikes],
  );

  return {
    strikes,
    maxStrikes,
    isWarningOpen,
    warningReason,
    isFullscreen,
    isAutomated: Boolean(automationReason),
    automationReason,
    showWarning,
    dismissWarning,
    resetStrikes,
    restoreStrikes,
    requestFullscreen,
    exitFullscreen,
  };
}
