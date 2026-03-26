import { SITE } from "@/lib/projects";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-lowest">
      {/* Contact CTA */}
      <section
        className="mx-auto max-w-6xl px-6 py-24 text-center"
        id="contact-cta"
      >
        <p className="font-mono text-sm tracking-widest uppercase text-text-muted mb-4">
          Interested in collaborating?
        </p>
        <h2 className="text-4xl font-semibold tracking-tight text-text-primary mb-8">
          Let&apos;s build something together.
        </h2>
        <a
          href={`mailto:${SITE.email}`}
          id="footer-cta-email"
          className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-sm tracking-wide text-white transition-colors hover:bg-primary-dim"
          style={{ borderRadius: "var(--radius-element)" }}
        >
          say hello →
        </a>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="font-mono text-xs text-text-muted">
            Designed &amp; built by {SITE.name} · {currentYear}
          </span>

          <div className="flex items-center gap-6">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted hover:text-text-primary transition-colors"
              id="footer-github"
            >
              GitHub
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted hover:text-text-primary transition-colors"
              id="footer-linkedin"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="font-mono text-xs text-text-muted hover:text-text-primary transition-colors"
              id="footer-email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
