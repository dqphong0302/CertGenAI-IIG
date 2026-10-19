export const THEME_STORAGE_KEY = "certgenai:v1:theme";

export type Theme = "light" | "dark";

export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

// Bản sao chạy chặn của hàm trên nằm trong <script> ở index.html để không
// nháy sai theme trước khi React mount. Sửa ở đây thì sửa cả index.html.
