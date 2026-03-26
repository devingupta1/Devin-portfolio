"use client";

import { useState, useEffect, useRef } from "react";

const CHARS = "!@#$%^&*<>?/|";

function getRandomChar(): string {
  return CHARS[Math.floor(Math.random() * CHARS.length)] ?? "?";
}

/**
 * Scrambles `text` on mount — each character starts as a random glyph
 * and resolves to the real character over `duration` ms.
 *
 * @param text     The target string to reveal
 * @param duration Total time (ms) for the full reveal
 * @param skip     If true, return the final text immediately (reduced-motion)
 */
export function useTextScramble(
  text: string,
  duration: number = 800,
  skip: boolean = false,
): string {
  const [display, setDisplay] = useState(() =>
    skip
      ? text
      : text
          .split("")
          .map((ch) => (ch === " " ? " " : getRandomChar()))
          .join(""),
  );

  // Per-character random resolve delay, generated once
  const delaysRef = useRef<number[]>([]);

  useEffect(() => {
    if (skip) {
      setDisplay(text);
      return;
    }

    // Generate random resolve timestamps (0 → duration * 0.75)
    delaysRef.current = text.split("").map(() => Math.random() * duration * 0.75);

    let frameId: number;
    const start = performance.now();

    function tick() {
      const elapsed = performance.now() - start;

      const next = text
        .split("")
        .map((realChar, i) => {
          if (realChar === " ") return " ";
          const charDelay = delaysRef.current[i] ?? 0;
          // Character is resolved once elapsed exceeds its delay
          if (elapsed >= charDelay + duration * 0.25) return realChar;
          // Still scrambling — swap to a new random char every ~50ms
          if (Math.floor(elapsed / 50) % 2 === 0) return getRandomChar();
          return getRandomChar();
        })
        .join("");

      setDisplay(next);

      if (elapsed < duration) {
        frameId = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    }

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [text, duration, skip]);

  return display;
}
