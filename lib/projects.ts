import type { Project, Experience, NavLink } from "@/types";

/* ──────────────────────────────────────────────────────────
 * Navigation
 * ────────────────────────────────────────────────────────── */

export const NAV_LINKS: NavLink[] = [
  { label: "work", href: "/work" },
  { label: "about", href: "/about" },
  { label: "writing", href: "/writing" },
];

/* ──────────────────────────────────────────────────────────
 * Projects – ordered by featured → year descending
 * ────────────────────────────────────────────────────────── */

export const PROJECTS: Project[] = [
  {
    slug: "dataforge",
    title: "DataForge",
    subtitle: "AI-Powered Data App Factory",
    description:
      "Built governed AI platform generating Databricks apps from natural language in under 60s. 3-agent LLM system: SQL Generator, Self-Healing Agent (3-retry), async Insight Generator. Hackathon Winner, 1st/50+ teams.",
    year: 2024,
    tags: ["Python", "Databricks", "LLMs", "SQL", "Unity Catalog"],
    featured: true,
  },
  {
    slug: "slo-guard",
    title: "SLO-Guard",
    subtitle: "Ephemeral Observability Platform",
    description:
      "Provisioned isolated Kubernetes namespaces per PR, ran k6 load tests, gated merges on SLO thresholds. Under 3-min MTTR via Grafana dashboards and Alertmanager.",
    year: 2025,
    tags: ["Kubernetes", "Terraform", "Prometheus", "Grafana", "k6"],
    featured: true,
  },
  {
    slug: "streameval",
    title: "StreamEval",
    subtitle: "Simulation Evaluation Pipeline",
    description:
      "Distributed C++/Python pipeline continuously running parameterized scenario tests, scoring software behavior against safety thresholds across distributed worker nodes.",
    year: 2025,
    tags: ["C++", "Python", "Kubernetes", "Prometheus", "Docker"],
    featured: true,
  },
  {
    slug: "music-recommendation",
    title: "Music Recommendation System",
    subtitle: "Full-Stack Recommendation Engine",
    description:
      "Full-stack recommendation engine processing 10,000+ Spotify tracks with cosine similarity. Top-10 results in under 200ms.",
    year: 2024,
    tags: ["TypeScript", "React", "FastAPI", "PostgreSQL", "Spotify API"],
    featured: false,
  },
  {
    slug: "athleteiq",
    title: "AthleteIQ",
    subtitle: "Android Sports Stats App",
    description:
      "Production-quality Android app surfacing live game stats via multi-screen, multi-module Kotlin architecture with reactive state management.",
    year: 2024,
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Retrofit"],
    featured: false,
  },
  {
    slug: "api-gateway",
    title: "API Gateway Service",
    subtitle: "High-Throughput Gateway",
    description:
      "High-throughput gateway with JWT auth, rate limiting, Redis caching. 150ms response improvement. 500 concurrent requests sustained under load testing.",
    year: 2024,
    tags: ["TypeScript", "Node.js", "Redis", "PostgreSQL", "Docker"],
    featured: false,
  },
];

/* ──────────────────────────────────────────────────────────
 * Helpers
 * ────────────────────────────────────────────────────────── */

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  PROJECTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

/* ──────────────────────────────────────────────────────────
 * Experience
 * ────────────────────────────────────────────────────────── */

export const EXPERIENCE: Experience[] = [
  {
    id: "ai-research",
    role: "AI Research Assistant",
    company: "University of Utah",
    period: "May 2025 – Present",
    bullets: [
      "Designed context-management protocols for 15+ node multi-agent LLM systems",
      "Identified 8 failure modes of context leakage",
      "Documented 12 attack surfaces with mitigation strategies",
    ],
  },
  {
    id: "network-ops",
    role: "Network Operations Engineer",
    company: "University of Utah",
    period: "Sep 2025 – Present",
    bullets: [
      "Built async pipeline polling 2,000+ switches via SNMP",
      "Integrated tracking into Nautobot, endpoint lookup under 5 seconds",
    ],
  },
  {
    id: "ml-intern",
    role: "Machine Learning Intern",
    company: "Garje Marathi",
    period: "May – Oct 2024",
    bullets: [
      "Integrated Knowledge Graphs into RAG system, +35% accuracy",
      "Cut graph load time 90% (33hrs → 3hrs) for 1M+ nodes",
      "Built FastAPI backend handling 100+ requests/min",
    ],
  },
];

/* ──────────────────────────────────────────────────────────
 * Site metadata
 * ────────────────────────────────────────────────────────── */

export const SITE = {
  name: "Devin Gupta",
  title: "Devin Gupta — Systems & AI Engineer",
  description:
    "CS junior at the University of Utah building distributed systems, agentic AI, and full-stack applications.",
  url: "https://devin-portfolio.vercel.app",
  email: "u1475642@utah.edu",
  linkedin: "https://www.linkedin.com/in/devin-gupta-/",
  github: "https://github.com/devin-gupta",
} as const;
