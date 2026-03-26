"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/types";
import { ProjectCard } from "@/components/ui/ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  showFilter?: boolean;
}

export function ProjectGrid({ projects, showFilter = false }: ProjectGridProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, [projects]);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <div>
      {/* Tag filter bar */}
      {showFilter && (
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveTag(null)}
            className={`font-mono text-xs px-4 py-2 transition-colors ghost-border ${
              activeTag === null
                ? "bg-primary text-white border-primary"
                : "text-text-muted hover:text-text-primary hover:bg-surface-high"
            }`}
            style={{ borderRadius: "var(--radius-pill)" }}
            id="filter-all"
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`font-mono text-xs px-4 py-2 transition-colors ghost-border ${
                activeTag === tag
                  ? "bg-primary text-white border-primary"
                  : "text-text-muted hover:text-text-primary hover:bg-surface-high"
              }`}
              style={{ borderRadius: "var(--radius-pill)" }}
              id={`filter-${tag.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
