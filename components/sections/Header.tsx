"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/projects";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass ghost-border border-t-0 border-x-0">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Primary navigation"
      >
        {/* Logo / name */}
        <Link
          href="/"
          className="font-mono text-sm tracking-widest uppercase text-text-primary hover:text-primary-light transition-colors"
          id="nav-logo"
        >
          {SITE.name}
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  id={`nav-${link.label}`}
                  className={`relative font-mono text-sm tracking-wide transition-colors ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}

          {/* CTA button */}
          <li>
            <a
              href={`mailto:${SITE.email}`}
              id="nav-cta"
              className="inline-flex items-center gap-2 bg-primary px-4 py-2 text-sm font-mono tracking-wide text-white transition-colors hover:bg-primary-dim"
              style={{ borderRadius: "var(--radius-element)" }}
            >
              say hello
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
