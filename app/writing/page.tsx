import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes, essays, and technical deep-dives by Devin Gupta.",
};

export default function WritingPage() {
  return (
    <section className="pt-32 pb-24" id="writing-page">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm tracking-widest uppercase text-primary-light mb-4">
          Writing
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-text-primary mb-6">
          Notes &amp; Explorations.
        </h1>
        <p className="text-text-muted leading-relaxed max-w-xl">
          Technical deep-dives, project retrospectives, and musings on
          distributed systems and AI. Coming soon.
        </p>

        {/* Empty state */}
        <div
          className="mt-16 ghost-border bg-surface-low flex items-center justify-center py-24"
          style={{ borderRadius: "var(--radius-card)" }}
        >
          <div className="text-center">
            <span className="font-mono text-4xl text-outline-variant mb-4 block">
              ◇
            </span>
            <p className="font-mono text-sm text-text-muted">
              No posts yet. Check back soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
