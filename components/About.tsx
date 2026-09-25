"use client";

import { Container, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import { stats } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 border-t border-hairline">
      <Container>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              heading="A developer who cares about both code and experience."
            />
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="text-ink-muted text-base md:text-lg leading-relaxed max-w-2xl">
                I’m Shruti Thakur, a Full-Stack Developer focused on building
                modern, responsive, scalable, and user-focused digital
                experiences.
              </p>

              <br />

              <p className="text-ink-muted text-base md:text-lg leading-relaxed max-w-2xl">
                I work with React.js, Next.js, TypeScript, JavaScript, Node.js,
                Express.js, MongoDB, and Tailwind CSS to build complete web
                applications from frontend interfaces to backend systems and
                APIs.
              </p>

              <p className="text-ink-muted text-base md:text-lg leading-relaxed max-w-2xl mt-5">
                Along with web development, I also work on CRM automation and
                business integrations. I have built automated lead workflows
                connecting websites with n8n, HubSpot CRM, Google Sheets, and
                Gmail using webhooks and APIs.
              </p>

              <p className="mt-5 text-ink-muted text-base md:text-lg leading-relaxed max-w-2xl">
                I started my professional journey at Techcoinfotech, where I
                worked on responsive interfaces and real-world web projects.
                I’m currently working with ND Global, developing modern
                websites and web applications while expanding my expertise
                across full-stack development and automation.
              </p>

              <p className="mt-5 text-ink-muted text-base md:text-lg leading-relaxed max-w-2xl">
                Beyond writing code, I care about performance, usability,
                clean architecture, and the overall experience a digital
                product delivers. I enjoy building solutions that are not only
                functional, but also scalable, intuitive, and visually refined.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10 border-t border-hairline pt-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl md:text-4xl text-gilt">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-ink-muted tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
