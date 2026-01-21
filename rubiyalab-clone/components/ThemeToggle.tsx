"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  // 현재 실제 적용 테마를 안정적으로 계산
  const current = theme === "system" ? resolvedTheme : theme; // "light" | "dark" | undefined
  const isDark = current === "dark";

  const toggleTheme = () => {
    // 현재 적용 상태를 기준으로 다음 테마를 강제 지정
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-xs font-medium backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-black/40 dark:hover:bg-black/30"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">Toggle theme</span>

      {/* 디버그: 동작 확인되면 지우세요 */}
      <span className="ml-2 rounded-full border border-black/10 px-2 py-0.5 text-[10px] text-black/60 dark:border-white/10 dark:text-white/60">
        theme:{String(theme)} / resolved:{String(resolvedTheme)}
      </span>
    </button>
  );
}
