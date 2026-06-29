"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 overflow-hidden group"
      style={{
        background: isDark
          ? "rgba(255,255,255,0.06)"
          : "rgba(255,244,230,0.85)",
        borderColor: isDark
          ? "rgba(255,255,255,0.12)"
          : "rgba(196,144,15,0.25)",
        boxShadow: isDark
          ? "none"
          : "0 2px 12px rgba(196,144,15,0.15)",
      }}
    >
      {/* Animated icon swap */}
      <span
        className="absolute inset-0 flex items-center justify-center text-base transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-90deg)",
        }}
      >
        🌙
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center text-base transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? "scale(0.5) rotate(90deg)" : "scale(1) rotate(0deg)",
        }}
      >
        ☀️
      </span>

      {/* Ripple on hover */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: isDark ? "rgba(212,160,23,0.08)" : "rgba(196,144,15,0.12)" }}
      />
    </button>
  );
}
