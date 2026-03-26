import type { Metadata } from "next";
import { ProjectGrid } from "@/components/sections/ProjectGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Devin Gupta — distributed systems, agentic AI, and full-stack engineering.",
};

export default function WorkPage() {
  return (
    <section className="pt-32 pb-24" id="work-page">
      <div className="mx-auto max-w-6xl px-6">
        <ProjectGrid />
      </div>
    </section>
  );
}
