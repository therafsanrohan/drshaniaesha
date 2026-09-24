"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    try {
      const nextTheme = (resolvedTheme || theme) === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    } catch (e) {
      console.warn("Theme persistence warning:", e);
    }
  };

  if (!mounted) {
    return (
      <div 
        className="w-10 h-10 rounded-full border border-border/40 bg-surface/40 shrink-0" 
        aria-hidden="true"
      />
    );
  }

  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="relative p-2.5 min-w-[44px] min-h-[44px] rounded-full border border-border/60 bg-surface/80 dark:bg-surface/60 text-foreground hover:bg-surface-hover hover:border-accent/40 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40 flex items-center justify-center group shrink-0"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <div className="relative w-4.5 h-4.5 flex items-center justify-center">
        <Sun 
          className={`absolute h-4.5 w-4.5 text-amber-500 dark:text-amber-400 transition-all duration-300 transform ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`} 
        />
        <Moon 
          className={`absolute h-4.5 w-4.5 text-slate-700 transition-all duration-300 transform ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 text-slate-800"
          }`} 
        />
      </div>
    </button>
  );
}
