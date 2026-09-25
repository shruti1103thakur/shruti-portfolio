"use client";

import {
  Code2,
  Braces,
  FileCode2,
  FileType2,
  Atom,
  Layers,
  Wind,
  Server,
  Route,
  Database,
  Newspaper,
  Cpu,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";
import { Container, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  HTML: Code2,
  CSS: Braces,
  JavaScript: FileCode2,
  TypeScript: FileType2,
  "React.js": Atom,
  "Next.js": Layers,
  "Tailwind CSS": Wind,
  "Node.js": Server,
  "Express.js": Route,
  MongoDB: Database,
  WordPress: Newspaper,
  C: Cpu,
  Python: Terminal,
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 border-t border-hairline">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            heading="Technologies I work with."
            subheading="A focused toolkit for building fast, modern and maintainable web products end to end."
          />
        </Reveal>

        <div className="mt-16 md:mt-20 space-y-14">
          {skills.map((category, catIndex) => (
            <Reveal key={category.label} delay={catIndex * 0.08}>
              <div>
                <h3 className="text-xs tracking-[0.24em] uppercase text-ink-muted mb-6">
                  {category.label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category.items.map((item, i) => {
                    const Icon = iconMap[item] ?? Code2;
                    return (
                      <motion.div
                        key={item}
                        whileHover={{ y: -4, borderColor: "rgba(201,169,110,0.5)" }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="group flex items-center gap-3.5 border border-hairline bg-bg-soft px-5 py-5"
                      >
                        <Icon
                          size={19}
                          className="text-gilt/80 group-hover:text-gilt transition-colors duration-300 shrink-0"
                          strokeWidth={1.6}
                        />
                        <span className="text-sm md:text-[15px] text-ink">
                          {item}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
