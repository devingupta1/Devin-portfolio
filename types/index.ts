/* ──────────────────────────────────────────────────────────
 * Shared types — single source of truth for the portfolio
 * ────────────────────────────────────────────────────────── */

/** Technology tag shown as a pill on project cards */
export type TechTag = string;

/** A single portfolio project */
export interface Project {
  /** URL-safe slug (used for routing + MDX file resolution) */
  slug: string;
  /** Display title */
  title: string;
  /** Short subtitle / one-liner */
  subtitle: string;
  /** Multi-sentence description */
  description: string;
  /** Year completed / shipped */
  year: number;
  /** Technology tags */
  tags: TechTag[];
  /** Whether to feature on the home page */
  featured: boolean;
  /** Optional live demo URL */
  liveUrl?: string;
  /** Optional GitHub repo URL */
  githubUrl?: string;
}

/** A single experience entry on the About page */
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

/** Navigation link in the header */
export interface NavLink {
  label: string;
  href: string;
}
