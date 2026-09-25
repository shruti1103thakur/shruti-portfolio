"use client";

import { Container, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-28 md:py-36 border-t border-hairline">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Education" heading="Academic background." />
        </Reveal>

        <div className="mt-16 md:mt-20 relative">
          <div
            className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-hairline"
            aria-hidden="true"
          />

          <ul className="space-y-14 md:space-y-16">
            {education.map((item, i) => (
              <li key={item.title} className="relative pl-10 md:pl-14">
                <Reveal delay={i * 0.1}>
                  <span
                    className="absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border border-gilt bg-bg"
                    aria-hidden="true"
                  >
                    <span className="absolute inset-[4px] rounded-full bg-gilt" />
                  </span>

                  <div className="grid md:grid-cols-[100px_1fr] gap-2 md:gap-10">
                    <p className="font-serif text-2xl text-ink-muted">
                      {item.year}
                    </p>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-serif text-2xl md:text-3xl text-ink">
                          {item.title}
                        </h3>
                        <span className="text-gilt text-sm tracking-wide">
                          {item.score}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-ink-muted/80 tracking-wide">
                        {item.institution}
                      </p>
                      <p className="mt-4 text-ink-muted leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}