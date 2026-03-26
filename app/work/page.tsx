import type { Metadata } from "next";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Devin Gupta — distributed systems, agentic AI, and full-stack engineering.",
};

export default function WorkPage() {
  return (
    <section className="pt-32 pb-24" id="work-page">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm tracking-widest uppercase text-text-muted mb-2">
          All Projects
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-text-primary mb-12">
          Engineering Complexity into Clarity.
        </h1>
        <ProjectGrid projects={PROJECTS} showFilter />
      </div>
    </section>
  );
}
