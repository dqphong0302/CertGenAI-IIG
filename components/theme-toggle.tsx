"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { applyTheme, getInitialTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // oxlint-disable-next-line react/react-compiler -- one-time client bootstrap from localStorage/matchMedia, not derivable during render
    setTheme(getInitialTheme());
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  }

  return (
    <Button
      id="theme-toggle"
      variant="outline"
      size="icon"
      aria-label={theme === "dark" ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"}
      className={className}
      onClick={toggle}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </Button>
  );
}
