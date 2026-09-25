"use client";

import { Container, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section className="py-28 md:py-36 border-t border-hairline">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Capabilities" heading="What I Bring" />
        </Reveal>

        <div className="mt-16 md:mt-20 border-t border-hairline">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="group grid md:grid-cols-[100px_1fr] gap-4 md:gap-10 py-9 border-b border-hairline items-baseline">
                <span className="font-serif text-xl text-ink-muted/60">
                  {service.number}
                </span>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="font-serif text-2xl md:text-3xl text-ink transition-colors duration-300 group-hover:text-gilt">
                    {service.title}
                  </h3>
                  <p className="text-ink-muted text-sm md:text-base md:max-w-md">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
