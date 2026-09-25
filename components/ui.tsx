"use client";

import { ReactNode, useRef, useState } from "react";
import { motion, MotionProps } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-[11px] md:text-xs tracking-[0.28em] text-gilt font-medium uppercase">
      <span className="h-px w-6 bg-gilt/70" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      {eyebrow && (
        <div className="mb-5">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="font-serif text-display-md text-ink text-balance">{heading}</h2>
      {subheading && (
        <p className="mt-5 text-ink-muted text-base md:text-lg max-w-xl leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
}

/** Magnetic button: subtly follows the cursor within its bounds. */
export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
  ...rest
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
} & MotionProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.25, y: relY * 0.35 });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const base =
    "relative inline-flex items-center gap-2.5 px-7 py-3.5 text-sm tracking-wide transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-gilt text-bg hover:bg-gilt-soft"
      : "border border-hairline text-ink hover:border-gilt/60 hover:text-gilt";

  const props = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <motion.a
      ref={ref}
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className={`${base} ${styles} ${className}`}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

export function ArrowLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const props = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };
  return (
    <Link
      {...props}
      className="group inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-300"
    >
      <span className="link-underline">{children}</span>
      <ArrowUpRight
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
