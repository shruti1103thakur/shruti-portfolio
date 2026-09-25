"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Container, Eyebrow, MagneticButton } from "./ui";
import TextReveal from "./TextReveal";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/13522087-uhd_3840_2160_24fps.mp4"
          type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-bg/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/60" />
      </div>

      <motion.div style={{ y, opacity }} className="relative">
        <Container>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-7"
            >
              <Eyebrow>{profile.eyebrow}</Eyebrow>
            </motion.div>

            <TextReveal
              delay={0.3}
              className="font-serif text-display-lg text-ink"
              lines={["Building digital", "experiences that feel", "as good as they perform."]}
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="mt-7 max-w-lg text-ink-muted text-sm md:text-base leading-relaxed"
            >
              {profile.heroIntro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.25 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#projects" variant="primary">
                View My Work
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                Let&rsquo;s Talk
              </MagneticButton>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[11px] tracking-[0.24em] text-ink-muted uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-gilt" />
        </motion.div>
      </motion.div>
    </section>
  );
}