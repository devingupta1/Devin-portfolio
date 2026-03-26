"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { SITE } from "@/lib/projects";
import { useTextScramble } from "@/lib/hooks/useTextScramble";

/* ─── constants ────────────────────────────────────────────── */

const SCRAMBLE_LINE_1 = "I build systems";
const SCRAMBLE_LINE_2 = "that scale.";

const DOT_SPACING = 28;
const DOT_RADIUS = 1;
const DOT_COLOR: [number, number, number] = [167, 139, 250]; // a78bfa
const DOT_BASE_ALPHA = 0.12;
const GLOW_RADIUS = 150;

const SPOTLIGHT_SIZE = 400;

const STAT_CHIPS = [
  { label: "Hackathon winner" },
  { label: "2,000+ nodes" },
  { label: "3+ yrs" },
] as const;

/* ─── fade-up variant factory ──────────────────────────────── */

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  };
}

/* ─── component ────────────────────────────────────────────── */

export function Hero() {
  const reducedMotion = useReducedMotion();
  const skipAnim = reducedMotion ?? false;

  /* text scramble */
  const line1 = useTextScramble(SCRAMBLE_LINE_1, 800, skipAnim);
  const line2 = useTextScramble(SCRAMBLE_LINE_2, 800, skipAnim);

  /* refs */
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

  /* spotlight position (state so the div re-renders) */
  const [spot, setSpot] = useState<{ x: number; y: number }>({
    x: -9999,
    y: -9999,
  });

  /* ── canvas drawing ─────────────────────────────────────── */

  const drawDots = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    for (let x = DOT_SPACING / 2; x < width; x += DOT_SPACING) {
      for (let y = DOT_SPACING / 2; y < height; y += DOT_SPACING) {
        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let alpha = DOT_BASE_ALPHA;
        if (dist < GLOW_RADIUS) {
          // boost opacity within glow radius
          alpha += (1 - dist / GLOW_RADIUS) * 0.35;
        }

        ctx.beginPath();
        ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${DOT_COLOR[0]},${DOT_COLOR[1]},${DOT_COLOR[2]},${alpha})`;
        ctx.fill();
      }
    }
  }, []);

  /* ── resize observer for canvas ─────────────────────────── */

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    function resize() {
      if (!canvas || !section) return;
      const rect = section.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      drawDots();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(section);
    resize();

    return () => ro.disconnect();
  }, [drawDots]);

  /* ── mousemove handler ──────────────────────────────────── */

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouseRef.current = { x, y };
      setSpot({ x, y });

      // throttle canvas redraws to rAF
      requestAnimationFrame(drawDots);
    },
    [drawDots],
  );

  /* ── render ─────────────────────────────────────────────── */

  return (
    <section
      ref={sectionRef}
      role="banner"
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      id="hero"
    >
      {/* ── dot grid canvas ─────────────────────────────────── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* ── cursor spotlight ────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: SPOTLIGHT_SIZE,
          height: SPOTLIGHT_SIZE,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 65%)",
          left: spot.x,
          top: spot.y,
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />

      {/* ── content ─────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32">
        {/* availability badge */}
        <motion.div
          {...(skipAnim ? {} : fadeUp(0))}
          className="mb-8 inline-flex items-center gap-2 bg-surface-low px-4 py-2 ghost-border"
          style={{ borderRadius: "var(--radius-pill)" }}
        >
          <span
            className="inline-block h-2 w-2 rounded-full bg-emerald-400"
            style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
            aria-hidden="true"
          />
          <span className="font-mono text-xs tracking-wide text-text-muted">
            open to new roles
          </span>
        </motion.div>

        {/* headline */}
        <motion.h1
          {...(skipAnim ? {} : fadeUp(0.08))}
          className="font-semibold text-text-primary leading-[1.1]"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            letterSpacing: "-0.03em",
          }}
        >
          <span className="font-mono" aria-label={SCRAMBLE_LINE_1}>
            {line1}
          </span>
          <br />
          <span
            className="font-mono text-primary-light"
            aria-label={SCRAMBLE_LINE_2}
          >
            {line2}
          </span>
        </motion.h1>

        {/* subtitle */}
        <motion.p
          {...(skipAnim ? {} : fadeUp(0.16))}
          className="mt-6 max-w-xl text-base leading-relaxed text-text-muted md:text-lg"
        >
          CS @ University of Utah. Distributed systems, agentic AI, full-stack.
          I ship things that run in production.
        </motion.p>

        {/* buttons */}
        <motion.div
          {...(skipAnim ? {} : fadeUp(0.24))}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/work"
            aria-label="View my work — see all projects"
            id="hero-cta-work"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-sm tracking-wide text-white transition-colors hover:bg-primary-dim"
            style={{ borderRadius: "var(--radius-element)" }}
          >
            View my work →
          </Link>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Devin Gupta's LinkedIn profile"
            id="hero-cta-linkedin"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm tracking-wide text-text-muted ghost-border transition-colors hover:text-text-primary hover:bg-surface-high"
            style={{ borderRadius: "var(--radius-element)" }}
          >
            LinkedIn ↗
          </a>
        </motion.div>

        {/* stat chips */}
        <motion.div
          {...(skipAnim ? {} : fadeUp(0.32))}
          className="mt-16 flex flex-wrap gap-3"
        >
          {STAT_CHIPS.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-2 bg-surface-low px-4 py-2 ghost-border font-mono text-xs tracking-wide text-text-muted"
              style={{ borderRadius: "var(--radius-pill)" }}
            >
              <span
                className="inline-block w-[6px] h-[6px] bg-primary"
                style={{ borderRadius: "1px" }}
                aria-hidden="true"
              />
              {chip.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── keyframes (injected once) ───────────────────────── */}
      <style jsx global>{`
        @keyframes pulse-dot {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.25;
          }
        }
      `}</style>
    </section>
  );
}
