"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-surface-low ghost-border transition-colors hover:bg-surface p-6"
      style={{ borderRadius: "var(--radius-card)" }}
      id={`project-card-${project.slug}`}
    >
      {/* Year badge */}
      <span className="font-mono text-xs text-text-muted">
        {project.year}
      </span>

      {/* Title */}
      <h3 className="mt-3 text-xl font-semibold text-text-primary group-hover:text-primary-light transition-colors">
        {project.title}
      </h3>

      {/* Subtitle */}
      <p className="mt-1 text-sm text-text-muted">{project.subtitle}</p>

      {/* Description */}
      <p className="mt-4 text-sm text-text-muted leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 bg-surface-highest font-mono text-xs text-text-muted px-3 py-1 ghost-border"
            style={{ borderRadius: "var(--radius-pill)" }}
          >
            <span className="inline-block w-[6px] h-[6px] bg-primary" style={{ borderRadius: "1px" }} />
            {tag}
          </span>
        ))}
      </div>

      {/* Hover arrow */}
      <span className="absolute top-6 right-6 text-text-muted group-hover:text-primary-light group-hover:translate-x-1 transition-all font-mono text-sm">
        →
      </span>
    </motion.article>
  );
}
