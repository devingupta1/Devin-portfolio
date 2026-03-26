"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center dot-grid"
      id="hero"
    >
      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm tracking-widest uppercase text-primary-light mb-6"
        >
          Systems &amp; AI Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-text-primary max-w-3xl"
          style={{ letterSpacing: "-0.04em" }}
        >
          I build systems that scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-text-muted max-w-xl leading-relaxed"
        >
          CS @ University of Utah. Distributed systems, agentic AI, full-stack.
          I ship things that run in production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="/work"
            id="hero-cta-work"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-sm tracking-wide text-white transition-colors hover:bg-primary-dim"
            style={{ borderRadius: "var(--radius-element)" }}
          >
            View Work →
          </a>
          <a
            href="/about"
            id="hero-cta-about"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm tracking-wide text-text-muted ghost-border transition-colors hover:text-text-primary hover:bg-surface-high"
            style={{ borderRadius: "var(--radius-element)" }}
          >
            About Me
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 border-t border-border bg-surface-lowest/80"
      >
        <div className="mx-auto max-w-6xl px-6 py-6 flex gap-12 md:gap-24">
          {[
            { value: "6+", label: "Projects Shipped" },
            { value: "3+", label: "Years Experience" },
            { value: "15+", label: "Technologies" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-mono text-2xl font-semibold text-primary-light">
                {stat.value}
              </span>
              <span className="font-mono text-xs text-text-muted uppercase tracking-widest mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
