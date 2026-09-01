/**
 * Anti-Cheat & Anti-Tamper Security Core
 * Chặn phím tắt DevTools, chuột phải, copy/paste, kéo-thả và phát hiện môi trường tự động hóa.
 *
 * Lưu ý phạm vi: đây là lớp phòng thủ phía client, mục tiêu là ngăn hành vi gian lận
 * tùy tiện trong lúc làm bài. Người dùng có kỹ thuật vẫn có thể vô hiệu hóa nó.
 */

export interface AntiCheatOptions {
  blockDevToolsKeys?: boolean;
  blockContextMenu?: boolean;
  blockCopyPaste?: boolean;
  blockSelect?: boolean;
  cloakingConsole?: boolean;
}

const DEFAULT_OPTIONS: AntiCheatOptions = {
  blockDevToolsKeys: true,
  blockContextMenu: true,
  blockCopyPaste: true,
  blockSelect: true,
  cloakingConsole: true,
};

// Đếm số instance đang bật để nhiều component cùng dùng không gỡ listener của nhau.
let activeInstances = 0;
let detachListeners: (() => void) | null = null;

// Giữ lại console gốc để khôi phục. Chỉ cloak các hàm dump object;
// console.warn / console.error để nguyên cho việc chẩn đoán lỗi thật.
const originalConsoleLog = typeof console !== "undefined" ? console.log : () => {};
const originalConsoleInfo = typeof console !== "undefined" ? console.info : () => {};
const originalConsoleDir = typeof console !== "undefined" ? console.dir : () => {};
const originalConsoleTable = typeof console !== "undefined" ? console.table : () => {};

/**
 * Kiểm tra dấu hiệu trình duyệt đang bị điều khiển tự động (Selenium, Puppeteer, Playwright)
 */
export function checkAutomationEnvironment(): { isAutomated: boolean; reason?: string } {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return { isAutomated: false };
  }

  if (navigator.webdriver) {
    return { isAutomated: true, reason: "Trình duyệt đang bị điều khiển tự động (navigator.webdriver)." };
  }

  const docElem = document.documentElement;
  if (
    docElem.getAttribute("webdriver") ||
    docElem.getAttribute("selenium") ||
    docElem.getAttribute("driver")
  ) {
    return { isAutomated: true, reason: "Phát hiện thuộc tính DOM của trình điều khiển tự động." };
  }

  const win = window as unknown as Record<string, unknown>;
  if (
    win._Selenium_IDE_Recorder ||
    win.callPhantom ||
    win._phantom ||
    win.__nightmare ||
    win.domAutomation ||
    win.domAutomationController
  ) {
    return { isAutomated: true, reason: "Phát hiện biến runtime của công cụ tự động hóa." };
  }

  return { isAutomated: false };
}

/**
 * Ngăn ứng dụng bị nhúng trong iframe (Frame Buster)
 */
export function enforceFrameBuster(): boolean {
  if (typeof window === "undefined") return true;
  try {
    if (window.top && window.top !== window.self) {
      window.top.location.href = window.self.location.href;
      return false;
    }
  } catch {
    // iframe khác origin: không đọc được window.top.location
    try {
      window.location.replace("about:blank");
    } catch {
      // Bỏ qua
    }
    return false;
  }
  return true;
}

/**
 * Che output console để hạn chế việc dump dữ liệu câu hỏi qua console
 */
export function cloakConsole(enable: boolean = true) {
  if (typeof window === "undefined") return;

  if (enable) {
    const noop = () => {};
    console.log = noop;
    console.info = noop;
    console.dir = noop;
    console.table = noop;
  } else {
    console.log = originalConsoleLog;
    console.info = originalConsoleInfo;
    console.dir = originalConsoleDir;
    console.table = originalConsoleTable;
  }
}

/**
 * Bật các listener chặn thao tác trên document/window.
 * Trả về hàm hủy; chỉ khi mọi instance đều hủy thì listener mới thực sự bị gỡ.
 * Instance đầu tiên quyết định options.
 */
export function initAntiCheat(options: AntiCheatOptions = DEFAULT_OPTIONS): () => void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

  activeInstances += 1;

  if (activeInstances === 1) {
    const opts = { ...DEFAULT_OPTIONS, ...options };

    if (opts.cloakingConsole && process.env.NODE_ENV === "production") {
      cloakConsole(true);
    }

    const handleContextMenu = (e: MouseEvent) => {
      if (opts.blockContextMenu) e.preventDefault();
    };

    const handleClipboard = (e: ClipboardEvent) => {
      if (opts.blockCopyPaste) e.preventDefault();
    };

    const handleDragStart = (e: DragEvent) => {
      if (opts.blockSelect) e.preventDefault();
    };

    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (opts.blockSelect && target && !["INPUT", "TEXTAREA"].includes(target.tagName)) {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!opts.blockDevToolsKeys) return;

      const isCtrlOrMeta = e.ctrlKey || e.metaKey;
      const isShift = e.shiftKey;
      const isAlt = e.altKey;

      // So khớp theo e.code (vị trí phím vật lý) trước: trên macOS, Option + I
      // sinh ra ký tự dead key chứ không phải "I", nên e.key một mình sẽ trượt.
      const isLetter = (letter: string) =>
        e.code === `Key${letter}` || (e.key || "").toUpperCase() === letter;

      const block = () => {
        e.preventDefault();
        e.stopPropagation();
      };

      if (e.key === "F12" || e.code === "F12") return block();

      // Inspect / Console / Inspect Element: Ctrl+Shift+X hoặc Cmd+Option+X
      if ((isCtrlOrMeta && (isShift || isAlt)) && ["I", "J", "C"].some(isLetter)) return block();

      // Console Firefox: Ctrl+Shift+K
      if (isCtrlOrMeta && isShift && isLetter("K")) return block();

      // View Source: Ctrl+U / Cmd+Option+U
      if (isCtrlOrMeta && isLetter("U")) return block();

      // Lưu trang / In trang
      if (isCtrlOrMeta && !isShift && !isAlt && (isLetter("S") || isLetter("P"))) return block();
    };

    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("copy", handleClipboard, { capture: true });
    document.addEventListener("cut", handleClipboard, { capture: true });
    document.addEventListener("paste", handleClipboard, { capture: true });
    document.addEventListener("dragstart", handleDragStart, { capture: true });
    document.addEventListener("selectstart", handleSelectStart, { capture: true });
    window.addEventListener("keydown", handleKeyDown, { capture: true });

    detachListeners = () => {
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("copy", handleClipboard, { capture: true });
      document.removeEventListener("cut", handleClipboard, { capture: true });
      document.removeEventListener("paste", handleClipboard, { capture: true });
      document.removeEventListener("dragstart", handleDragStart, { capture: true });
      document.removeEventListener("selectstart", handleSelectStart, { capture: true });
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      cloakConsole(false);
    };
  }

  let released = false;
  return () => {
    if (released) return;
    released = true;
    activeInstances = Math.max(0, activeInstances - 1);
    if (activeInstances === 0 && detachListeners) {
      detachListeners();
      detachListeners = null;
    }
  };
}
