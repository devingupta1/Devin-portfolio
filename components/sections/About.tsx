"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/projects";

/* ─── data ─────────────────────────────────────────────────── */

const BIO =
  "I'm a CS junior at the University of Utah obsessed with distributed systems and agentic AI. I build things that run at scale — from multi-agent LLM pipelines to Kubernetes infrastructure. Currently doing AI research and network engineering at Utah while looking for internships where I can ship hard things.";

/** Two bullets per experience entry (abbreviated for card) */
const TIMELINE: {
  role: string;
  company: string;
  period: string;
  bullets: [string, string];
}[] = [
  {
    role: "AI Research Assistant",
    company: "University of Utah",
    period: "May 2025–Present",
    bullets: [
      "Context protocols for 15+ node multi-agent LLM systems",
      "Documented 12 attack surfaces with mitigation strategies",
    ],
  },
  {
    role: "Network Ops Engineer",
    company: "University of Utah",
    period: "Sep 2025–Present",
    bullets: [
      "Async pipeline polling 2,000+ switches via SNMP",
      "Endpoint lookup cut to under 5 seconds via Nautobot",
    ],
  },
  {
    role: "ML Intern",
    company: "Garje Marathi",
    period: "May–Oct 2024",
    bullets: [
      "Knowledge Graphs into RAG system, +35% accuracy",
      "Graph load time cut 90% — 33hrs to 3hrs for 1M+ nodes",
    ],
  },
];

const SKILLS: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "TypeScript", "C++", "Go", "Java", "SQL"] },
  { label: "AI + ML", items: ["LLMs", "RAG", "Agentic AI", "PyTorch", "LangChain"] },
  { label: "Systems", items: ["Distributed Systems", "Kubernetes", "Docker", "Terraform"] },
  { label: "Cloud", items: ["AWS", "Prometheus", "Grafana", "GitHub Actions", "CI/CD"] },
];

/* ─── component ────────────────────────────────────────────── */

export function About() {
  return (
    <section className="py-24" id="about">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: 64 }}
        >
          {/* ── LEFT COLUMN ──────────────────────────────────── */}
          <div>
            {/* bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--color-text-muted)",
                marginBottom: 48,
              }}
            >
              {BIO}
            </motion.p>

            {/* timeline */}
            <div className="flex flex-col gap-8">
              {TIMELINE.map((entry, i) => (
                <motion.div
                  key={entry.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                  style={{
                    borderLeft: "2px solid var(--color-primary)",
                    paddingLeft: 16,
                  }}
                >
                  {/* role */}
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {entry.role}
                  </p>

                  {/* company + period */}
                  <p
                    className="font-mono"
                    style={{
                      fontSize: 12,
                      color: "var(--color-text-muted)",
                      marginTop: 2,
                    }}
                  >
                    {entry.company} · {entry.period}
                  </p>

                  {/* bullets */}
                  <ul style={{ marginTop: 6 }}>
                    {entry.bullets.map((b) => (
                      <li
                        key={b}
                        style={{
                          fontSize: 12,
                          color: "var(--color-text-muted)",
                          lineHeight: 1.6,
                        }}
                      >
                        – {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — skills ────────────────────────── */}
          <div className="flex flex-col gap-8">
            {SKILLS.map((group) => (
              <div key={group.label}>
                {/* group label */}
                <p
                  className="font-mono uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "var(--color-text-muted)",
                    marginBottom: 10,
                  }}
                >
                  {group.label}
                </p>

                {/* pills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
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
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
