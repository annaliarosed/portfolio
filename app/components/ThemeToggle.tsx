"use client";

import { useState } from "react";
import styles from "./ThemeToggle.module.scss";

type Theme = "light" | "dark";

function resolveTheme(): Theme {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
  }

  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return "light";
}

function setTheme(next: Theme) {
  document.documentElement.setAttribute("data-theme", next);
  window.localStorage.setItem("theme", next);
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-2.2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6ZM11 1h2v3h-2V1Zm0 20h2v3h-2v-3ZM3.2 4.6l1.4-1.4 2.1 2.1-1.4 1.4-2.1-2.1Zm14.1 14.1 1.4-1.4 2.1 2.1-1.4 1.4-2.1-2.1ZM1 11h3v2H1v-2Zm20 0h3v2h-3v-2ZM4.6 20.8l-1.4-1.4 2.1-2.1 1.4 1.4-2.1 2.1Zm14.1-14.1-1.4-1.4 2.1-2.1 1.4 1.4-2.1 2.1Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M21 14.6A8.3 8.3 0 0 1 9.4 3a.9.9 0 0 1 1-1.2 9.8 9.8 0 1 0 11.8 11.8.9.9 0 0 1-1.2 1Z"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>(() => resolveTheme());

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const tooltip = `Switch to ${nextTheme} mode`;

  return (
    <button
      type="button"
      className={styles.fab}
      onClick={() => {
        const resolved = resolveTheme();
        const next: Theme = resolved === "dark" ? "light" : "dark";
        setTheme(next);
        setThemeState(next);
      }}
      aria-label={tooltip}
      data-tooltip={tooltip}
    >
      {nextTheme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

