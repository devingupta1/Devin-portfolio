"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0"
      style={{
        height: 2,
        background: "var(--color-primary)",
        transformOrigin: "left",
        scaleX,
        zIndex: 100,
      }}
    />
  );
}
