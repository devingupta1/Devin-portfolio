"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/types";

interface TimelineProps {
  experience: Experience[];
}

export function Timeline({ experience }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-3 top-2 bottom-2 w-px bg-outline-variant" />

      <div className="space-y-12">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-10"
          >
            {/* Dot */}
            <div className="absolute left-1.5 top-1.5 w-3 h-3 bg-primary" style={{ borderRadius: "2px" }} />

            {/* Period */}
            <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
              {exp.period}
            </span>

            {/* Role & company */}
            <h3 className="mt-2 text-lg font-semibold text-text-primary">
              {exp.role}
            </h3>
            <p className="text-sm text-primary-light">{exp.company}</p>

            {/* Bullets */}
            <ul className="mt-3 space-y-2">
              {exp.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="text-sm text-text-muted leading-relaxed flex gap-2"
                >
                  <span className="text-primary mt-1 shrink-0">▸</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
