import { Linkedin, Mail, Phone } from "lucide-react";
import { Container } from "./ui";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-14">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="font-serif text-2xl text-ink tracking-wide">
              SHRUTI THAKUR
            </p>
            <p className="mt-2 text-ink-muted text-sm">{profile.title}</p>
          </div>

          <div className="flex items-center gap-6">
            
           <a   href={`tel:${profile.phone.replace(/\s/g, "")}`}
              aria-label="Phone"
              className="text-ink-muted hover:text-gilt transition-colors duration-300"
            >
              <Phone size={18} />
            </a>
            
            <a  href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted hover:text-gilt transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
            
           <a   href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-ink-muted hover:text-gilt transition-colors duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-hairline flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted/70">
            © 2026 Shruti Thakur. All rights reserved.
          </p>
          <nav className="flex items-center gap-6 text-xs text-ink-muted/70">
            <a href="#home" className="hover:text-ink transition-colors duration-300">
              Home
            </a>
            <a href="#projects" className="hover:text-ink transition-colors duration-300">
              Work
            </a>
            <a href="#contact" className="hover:text-ink transition-colors duration-300">
              Contact
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}