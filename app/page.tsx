import { Hero } from "@/components/sections/Hero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Hero />

      {/* Featured projects section */}
      <section className="bg-surface-lowest py-24" id="featured-projects">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-sm tracking-widest uppercase text-text-muted mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary mb-12">
            Engineering Complexity into Clarity.
          </h2>
          <ProjectGrid projects={featured} />
        </div>
      </section>
    </>
  );
}
