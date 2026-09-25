"use client";

import { motion } from "framer-motion";

/**
 * Reveals each line of text with a staggered upward mask animation.
 * Pass an array of strings, one per visual line.
 */
export default function TextReveal({
  lines,
  className = "",
  delay = 0,
}: {
  lines: string[];
  className?: string;
  delay?: number;
}) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.11,
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
