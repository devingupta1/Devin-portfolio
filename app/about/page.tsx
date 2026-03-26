import type { Metadata } from "next";
import { Timeline } from "@/components/sections/About";
import { EXPERIENCE } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About",
  description:
    "Devin Gupta — CS junior at the University of Utah. Distributed systems, agentic AI, and full-stack engineering.",
};

const SKILLS = {
  Languages: ["Python", "TypeScript", "C++", "Kotlin", "Go", "SQL"],
  "AI + ML": ["LLMs", "RAG", "Multi-Agent Systems", "Knowledge Graphs"],
  Systems: ["Kubernetes", "Docker", "Terraform", "Prometheus", "gRPC"],
  Cloud: ["AWS", "GCP", "Vercel", "Databricks"],
};

export default function AboutPage() {
  return (
    <section className="pt-32 pb-24" id="about-page">
      <div className="mx-auto max-w-6xl px-6">
        {/* Bio */}
        <div className="max-w-2xl mb-24">
          <p className="font-mono text-sm tracking-widest uppercase text-primary-light mb-4">
            About
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-text-primary mb-6">
            Devin Gupta
          </h1>
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              I am a Computer Science junior at the University of Utah, where I
              focus on the intersection of high-performance systems and
              artificial intelligence.
            </p>
            <p>
              My work revolves around building software that is not only
              mathematically sound but also architecturally resilient,
              prioritizing engineering precision over trends.
            </p>
            <p>
              Outside of academia, I dedicate my time to exploring distributed
              systems, optimizing multi-agent LLM architectures, and shipping
              production-grade full-stack applications.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-24">
          <h2 className="font-mono text-sm tracking-widest uppercase text-text-muted mb-8">
            Technical Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-text-primary mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 font-mono text-sm text-text-muted"
                    >
                      <span className="inline-block w-[6px] h-[6px] bg-primary" style={{ borderRadius: "1px" }} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience timeline */}
        <div>
          <h2 className="font-mono text-sm tracking-widest uppercase text-text-muted mb-8">
            Professional Journey
          </h2>
          <Timeline experience={EXPERIENCE} />
        </div>
      </div>
    </section>
  );
}
