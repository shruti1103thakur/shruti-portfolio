"use client";

import { Container, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 border-t border-hairline">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Work"
            heading="Selected Work"
            subheading="A selection of websites and digital experiences I've built."
            align="center"
          />
        </Reveal>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}