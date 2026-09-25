# Shruti Thakur — Portfolio

A premium, editorial-style developer portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion and lucide-react.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css        Base styles, grain texture, focus states

components/
  Navbar.tsx          Sticky nav with scroll blur + animated mobile menu
  Hero.tsx            Full-screen hero with text reveal + parallax
  HeroVisual.tsx       Abstract animated hero graphic
  TextReveal.tsx       Line-by-line reveal animation primitive
  Reveal.tsx           Scroll-triggered fade-up wrapper
  About.tsx            Editorial about section + stats
  Experience.tsx       Vertical timeline
  Education.tsx        Education list
  Skills.tsx           Technology grid grouped by category
  Projects.tsx         Asymmetric project grid
  ProjectCard.tsx       Individual project card with hover states
  ProjectMedia.tsx      Screenshot loader with elegant fallback
  Services.tsx          "What I Bring" services list
  Contact.tsx           Contact section + validated form
  Footer.tsx            Footer
  CustomCursor.tsx       Desktop-only expanding cursor
  ui.tsx                 Shared primitives (Container, buttons, etc.)

data/
  portfolio.ts        All content — edit this file to update copy
```

## Adding real project screenshots

Drop screenshots into `/public/projects/` using these exact filenames
(referenced from `data/portfolio.ts`):

```
public/projects/collabzy.png
public/projects/ndglobal.png
public/projects/indian-luxury-house.png
public/projects/ndglobal-marbles.png
public/projects/manufacturing.png
```

Recommended size: 1600×1100px or larger, 16:11 aspect ratio. Until an image
is added, each project card shows a designed placeholder (grid pattern +
initials) instead of a broken image.

## Updating content

All personal information, experience, skills, and project data lives in
`data/portfolio.ts` — no need to touch component files to update copy.

## Build

```bash
npm run build
npm start
```
