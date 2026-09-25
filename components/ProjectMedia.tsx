"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectMedia({
  image,
  name,
  index,
}: {
  image: string;
  name: string;
  index: number;
}) {
  const [errored, setErrored] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (errored) {
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-bg-raised overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.35]" viewBox="0 0 400 300" preserveAspectRatio="none">
          <defs>
            <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="rgba(245,241,234,0.06)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="400" height="300" fill={`url(#grid-${index})`} />
        </svg>
        <span className="font-serif text-6xl md:text-7xl text-ink-muted/25 select-none">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={`${name} — website preview`}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover object-top"
      onError={() => setErrored(true)}
    />
  );
}