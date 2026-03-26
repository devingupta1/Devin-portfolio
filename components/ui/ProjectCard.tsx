"use client";

import { useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/types";

/* ─── constants ────────────────────────────────────────────── */

const MAX_TILT_DEG = 8;
const PERSPECTIVE = 700;

/* ─── component ────────────────────────────────────────────── */

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const skipTilt = reducedMotion ?? false;
  const cardRef = useRef<HTMLDivElement>(null);

  /* ── 3D tilt ────────────────────────────────────────────── */

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (skipTilt) return;
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      // normalise to -1…1
      const nx = (e.clientX - cx) / (rect.width / 2);
      const ny = (e.clientY - cy) / (rect.height / 2);

      card.style.transition = "transform 0.08s";
      card.style.transform = `perspective(${PERSPECTIVE}px) rotateY(${nx * MAX_TILT_DEG}deg) rotateX(${-ny * MAX_TILT_DEG}deg) scale(1.02)`;
    },
    [skipTilt],
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.4s ease";
    card.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)";
  }, []);

  const isFeatured = project.featured;
  const displayIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={skipTilt ? undefined : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-card)",
          padding: isFeatured ? 28 : 24,
          transition: "background 0.2s, border-color 0.2s",
        }}
        id={`project-card-${project.slug}`}
        /* hover styles applied via group + inline overrides */
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = "rgba(167,139,250,0.3)";
          el.style.background = "rgba(124,58,237,0.04)";
        }}
        onMouseOut={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = "var(--color-border)";
          el.style.background = "var(--color-surface)";
        }}
      >
        {/* featured badge */}
        {isFeatured && (
          <span
            className="absolute font-mono"
            style={{
              top: 16,
              right: 16,
              fontSize: 10,
              padding: "2px 8px",
              borderRadius: "var(--radius-pill)",
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(167,139,250,0.3)",
              color: "#a78bfa",
            }}
          >
            featured
          </span>
        )}

        {/* project number */}
        <span
          className="font-mono"
          style={{
            fontSize: 10,
            letterSpacing: "0.08em",
            color: "var(--color-text-muted)",
          }}
        >
          {displayIndex}
        </span>

        {/* title */}
        <h3
          className="mt-2 font-medium text-text-primary"
          style={{ fontSize: isFeatured ? 17 : 16 }}
        >
          {project.title}
        </h3>

        {/* description */}
        <p
          style={{
            fontSize: 13,
            color: "var(--color-text-muted)",
            lineHeight: 1.6,
            margin: "8px 0 16px",
          }}
        >
          {project.description}
        </p>

        {/* tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono"
              style={{
                fontSize: 10,
                padding: "2px 8px",
                borderRadius: 20,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--color-border)",
                color: "rgba(226,226,240,0.45)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* case study link */}
        <span
          className="mt-4 inline-flex items-center font-mono"
          style={{ fontSize: 12, color: "var(--color-primary-light)" }}
        >
          case study{" "}
          <span
            className="inline-block transition-all duration-200 group-hover:ml-1.5 ml-0"
            aria-hidden="true"
          >
            →
          </span>
        </span>
      </div>
    </motion.div>
  );
}
