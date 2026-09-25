"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative hidden lg:block w-full h-full" aria-hidden="true">
      {/* Champagne glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gilt blur-[140px]"
      />

      {/* Fine geometric grid */}
      <svg
        viewBox="0 0 400 520"
        className="absolute inset-0 w-full h-full"
        fill="none"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={40 + i * 65}
            y1="0"
            x2={40 + i * 65}
            y2="520"
            stroke="rgba(245,241,234,0.06)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}

        {/* Diagonal accent line, drawn on */}
        <motion.line
          x1="20"
          y1="480"
          x2="380"
          y2="60"
          stroke="rgba(201,169,110,0.55)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Traveling node along the diagonal */}
        <motion.circle
          r="4"
          fill="#C9A96E"
          initial={{ cx: 20, cy: 480, opacity: 0 }}
          animate={{ cx: [20, 380, 20], cy: [480, 60, 480], opacity: 1 }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.6,
          }}
        />

        {/* Thin circle ring */}
        <motion.circle
          cx="230"
          cy="180"
          r="90"
          stroke="rgba(245,241,234,0.10)"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>

      {/* Floating type fragment */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-16 right-6 text-right"
      >
        <p className="font-serif italic text-ink-muted/60 text-sm tracking-wide">
          Est. Portfolio — 2026
        </p>
      </motion.div>
    </div>
  );
}
