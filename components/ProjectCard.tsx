"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ProjectMedia from "./ProjectMedia";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className="group relative flex flex-col items-center text-center">
      <span className="text-[10px] tracking-[0.22em] uppercase text-ink-muted/70">
        {project.category}
      </span>
      <h3 className="mt-2 font-serif text-2xl md:text-[26px] text-ink">
        {project.name}
      </h3>

      
       <a href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="view"
        className="block w-full max-w-[280px] mx-auto mt-6"
        aria-label={`View ${project.name} live website`}
      >
        {/* Browser-window frame */}
        <div className="border border-hairline overflow-hidden bg-bg-raised">
          {/* Browser top bar: 3 dots + logo + url */}
          <div className="flex items-center gap-2.5 px-3 py-2 bg-[#1c1c1c] border-b border-hairline">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-ink-muted/25" />
              <span className="w-1.5 h-1.5 rounded-full bg-ink-muted/25" />
              <span className="w-1.5 h-1.5 rounded-full bg-ink-muted/25" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-1.5 bg-bg/60 rounded-sm px-2.5 py-1 min-w-0">
              <div className="relative w-3.5 h-3.5 shrink-0">
                {/* <Image
                  src={project.logo}
                  alt=""
                  fill
                  sizes="14px"
                  className="object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                /> */}
              </div>
              <span className="text-[9px] text-ink-muted/70 truncate">
                {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </div>
          </div>

          {/* Preview image */}
          <div className="relative overflow-hidden aspect-[3/2]">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectMedia image={project.image} name={project.name} index={index} />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </a>

      <p className="mt-6 text-ink-muted text-sm leading-relaxed max-w-xs">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] tracking-wide text-ink-muted border border-hairline px-2.5 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}