"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/projects";

/* ─── constants ────────────────────────────────────────────── */

const LINKS = [
  { label: "work", href: "/work" },
  { label: "about", href: "/about" },
  { label: "writing", href: "/writing" },
] as const;

const SCROLL_THRESHOLD = 80;

/* ─── component ────────────────────────────────────────────── */

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  /* ── scroll listener ────────────────────────────────────── */

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();             // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ── render ─────────────────────────────────────────────── */

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        padding: scrolled ? "14px 32px" : "20px 32px",
        background: scrolled ? "rgba(9,9,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
      aria-label="Primary navigation"
      id="main-nav"
    >
      {/* logo */}
      <Link
        href="/"
        className="text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        style={{ fontWeight: 500, fontSize: 16 }}
        id="nav-logo"
        aria-label="Devin Gupta — home"
      >
        dg.
      </Link>

      {/* right side */}
      <div className="flex items-center gap-6">
        {LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-${link.label}`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              style={{
                fontSize: 13,
                letterSpacing: "0.01em",
                color: isActive
                  ? "var(--color-text-primary)"
                  : "var(--color-text-muted)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = "var(--color-primary-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isActive
                  ? "var(--color-text-primary)"
                  : "var(--color-text-muted)";
              }}
            >
              {link.label}
            </Link>
          );
        })}

        {/* say hello CTA */}
        <a
          href={`mailto:${SITE.email}`}
          id="nav-cta"
          className="font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Send email to Devin Gupta"
          style={{
            fontSize: 13,
            padding: "5px 14px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.12)",
            color: "var(--color-text-muted)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(124,58,237,0.1)";
            e.currentTarget.style.borderColor = "rgba(167,139,250,0.3)";
            e.currentTarget.style.color = "var(--color-primary-light)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
            e.currentTarget.style.color = "var(--color-text-muted)";
          }}
        >
          say hello
        </a>
      </div>
    </nav>
  );
}
