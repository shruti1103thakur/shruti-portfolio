"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Please share a few more details (min. 10 characters).";
    }
    return next;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const text = `Hi Shruti, I'm ${form.name} (${form.email}).\n\n${form.message}`;
      const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, "_blank");
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <section id="contact" className="py-28 md:py-36 border-t border-hairline">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              heading="Have an idea? Let's build it."
              subheading="Whether you're building a product, launching a website or looking to improve an existing digital experience, let's create something meaningful."
            />

            <div className="mt-10 space-y-4">
              
             <a   href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-ink-muted hover:text-gilt transition-colors duration-300"
              >
                <Mail size={17} /> {profile.email}
              </a>
              
             <a   href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-ink-muted hover:text-gilt transition-colors duration-300"
              >
                <Phone size={17} /> {profile.phone}
              </a>
              
              <a  href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink-muted hover:text-gilt transition-colors duration-300"
              >
                <Linkedin size={17} /> LinkedIn Profile
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              
                <a href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 bg-gilt text-bg px-6 py-3.5 text-sm tracking-wide hover:bg-gilt-soft transition-colors duration-300"
              >
                <Mail size={16} /> Email Me
              </a>
              
              <a  href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-hairline px-6 py-3.5 text-sm tracking-wide text-ink hover:border-gilt/60 hover:text-gilt transition-colors duration-300"
              >
                <Linkedin size={16} /> View LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs tracking-[0.2em] uppercase text-ink-muted mb-2.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full bg-transparent border-b border-hairline focus:border-gilt outline-none py-3 text-ink placeholder:text-ink-muted/50 transition-colors duration-300"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-xs text-gilt-soft">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase text-ink-muted mb-2.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full bg-transparent border-b border-hairline focus:border-gilt outline-none py-3 text-ink placeholder:text-ink-muted/50 transition-colors duration-300"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-xs text-gilt-soft">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase text-ink-muted mb-2.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full bg-transparent border-b border-hairline focus:border-gilt outline-none py-3 text-ink placeholder:text-ink-muted/50 transition-colors duration-300 resize-none"
                  placeholder="Tell me a little about your project"
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-xs text-gilt-soft">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="group inline-flex items-center gap-2.5 bg-gilt text-bg px-7 py-3.5 text-sm tracking-wide hover:bg-gilt-soft transition-colors duration-300"
              >
                Send Message
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}