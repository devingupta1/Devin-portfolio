"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SHOW_THRESHOLD = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > SHOW_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          id="back-to-top"
          className="fixed cursor-pointer"
          style={{
            bottom: 24,
            right: 24,
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 8,
            background: "transparent",
            transition: "background 0.2s, border-color 0.2s",
            zIndex: 50,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(124,58,237,0.1)";
            e.currentTarget.style.borderColor = "rgba(167,139,250,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
          }}
        >
          {/* arrow-up SVG */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            strokeWidth="1.5"
            stroke="var(--color-text-muted)"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M8 13V3" />
            <path d="M3.5 7L8 2.5L12.5 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
