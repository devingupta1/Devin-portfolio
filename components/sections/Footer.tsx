"use client";

import { SITE } from "@/lib/projects";
import { useClipboard } from "@/lib/hooks/useClipboard";
import { AnimatePresence, motion } from "framer-motion";

export function Footer() {
  const { copied, copy } = useClipboard(2000);

  return (
    <footer
      id="footer"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "24px 32px",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* left — logo */}
        <span
          className="text-text-primary"
          style={{ fontSize: 14, fontWeight: 500 }}
        >
          dg.
        </span>

        {/* center — credit */}
        <span
          className="hidden sm:block font-mono"
          style={{ fontSize: 12, color: "var(--color-text-muted)" }}
        >
          Designed &amp; built by Devin Gupta · 2026
        </span>

        {/* right — links */}
        <div className="flex items-center gap-5">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-github"
            className="font-mono"
            style={{
              fontSize: 12,
              color: "var(--color-text-muted)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-primary-light)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-muted)";
            }}
          >
            GitHub
          </a>

          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-linkedin"
            className="font-mono"
            style={{
              fontSize: 12,
              color: "var(--color-text-muted)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-primary-light)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-muted)";
            }}
          >
            LinkedIn
          </a>

          <button
            onClick={() => copy(SITE.email)}
            id="footer-email"
            className="font-mono cursor-pointer"
            style={{
              fontSize: 12,
              color: "var(--color-text-muted)",
              transition: "color 0.2s",
              background: "none",
              border: "none",
              padding: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-primary-light)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-muted)";
            }}
            aria-label="Copy email address to clipboard"
          >
            {SITE.email}
          </button>
        </div>
      </div>

      {/* ── toast ─────────────────────────────────────────── */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 font-mono"
            style={{
              fontSize: 12,
              padding: "6px 16px",
              borderRadius: 8,
              background: "var(--color-surface-high)",
              border: "1px solid rgba(167,139,250,0.3)",
              color: "var(--color-primary-light)",
              zIndex: 200,
            }}
          >
            Email copied!
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
