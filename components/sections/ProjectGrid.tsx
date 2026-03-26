"use client";

import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

/* ─── component ────────────────────────────────────────────── */

export function ProjectGrid() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects">
      {/* ── section header ─────────────────────────────────── */}
      <p
        className="font-mono uppercase"
        style={{
          fontSize: 10,
          letterSpacing: "0.1em",
          color: "var(--color-text-muted)",
          marginBottom: 24,
        }}
      >
        selected work
      </p>

      {/* ── featured grid (3-col desktop) ──────────────────── */}
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(0, 1fr))",
        }}
      >
        {/* responsive overrides via Tailwind classes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-full">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* ── divider + more projects ────────────────────────── */}
      {rest.length > 0 && (
        <>
          <div className="my-16 flex items-center gap-4">
            <div
              className="flex-1"
              style={{
                height: 1,
                background: "var(--color-border)",
              }}
            />
            <p
              className="font-mono uppercase shrink-0"
              style={{
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "var(--color-text-muted)",
              }}
            >
              more projects
            </p>
            <div
              className="flex-1"
              style={{
                height: 1,
                background: "var(--color-border)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i + featured.length}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
