export const profile = {
  name: "Shruti Thakur",
  title: " Full-Stack Developer",
  eyebrow: " FULL-STACK DEVELOPER",
  intro:
    "I build modern, high-performance digital experiences with clean interfaces, thoughtful interactions and scalable web technologies.",
  heroIntro:
    "I'm Shruti Thakur, a developer focused on creating modern, responsive and scalable digital experiences using Next.js, React and modern web technologies.",
  email: "shruti1103thakur@gmail.com",
  phone: "+91 79747 04670",
  whatsapp: "917974704670",
  github: "https://github.com/",
  linkedin: "https://in.linkedin.com/in/shruti-thakur-245259286",
};

export const stats = [
  { value: "01+", label: "Years Experience" },
  { value: "05+", label: "Selected Projects" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Passion for Web" },
];

export const experience = [
  {
    year: "2025",
    company: "Techcoinfotech",
    role: "Frontend Developer",
    duration: "June 2025 — July 15, 2026",
    description:
      "Worked on modern responsive web interfaces, frontend development, reusable UI components and client-focused web experiences.",
  },
  {
    year: "2026",
    company: "ND Global",
    role: "Developer",
    duration: "August 2026 — Present",
    description:
      "Working on modern websites and web applications using contemporary frontend and full-stack technologies, with focus on responsive UI, performance and user experience.",
  },
  
];

export const education = [
  {
    year: "2020",
    title: "12th — Science (PCM)",
    institution: "Madhya Pradesh Board of Secondary Education (MPBSE)",
    score: "72%",
    description:
      "Completed higher secondary education with Physics, Chemistry and Mathematics, building the analytical foundation for a career in technology.",
  },
  {
    year: "2023",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "DAVV University, INDORE",
    score: "69%",
    description:
      "Studied core computer science fundamentals — programming, data structures and web technologies — laying the groundwork for full-stack development.",
  },
  {
    year: "2023",
    title: "Master of Computer Applications (MCA)",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    score: "85%",
    description:
      "Specialized in advanced application development and modern web technologies, sharpening frontend and full-stack engineering skills.",
  },
];

export type SkillCategory = {
  label: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    label: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    label: "Database",
    items: ["MongoDB","SQL"],
  },
  {
    label: "Automation",
    items: [
      "n8n",
      "CRM Automation",
      "Webhooks",
      "HubSpot",
      "Google Sheets Integration",
      "Gmail Automation",
      "API Integration",
    ],
  },
  {
    label: "CMS",
    items: ["WordPress"],
  },
  {
    label: "Programming",
    items: ["C", "Python"],
  },
];



export type Project = {
  number: string;
  name: string;
category: string;
  url: string;
  description: string;
  stack: string[];
  image: string;
  size: "large" | "small";
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Collabzy",
    category: "Influencer & Brand Platform",
    url: "https://collabzy.in/",
    description:
      "A modern web platform connecting brands and influencers, designed around collaboration, discovery and digital partnerships.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS" ,"Node js"],
    image: "/collabzy.png",
    size: "large",
  },
    {
  number: "07",
  name: "CRM Lead Automation",
  category: "CRM & Business Automation",
  url: "https://marble-nd.vercel.app/",
  description:
    "An end-to-end lead automation system connecting a Next.js website with n8n, HubSpot CRM, Google Sheets and Gmail. Website enquiries are captured through webhooks and automatically synced to CRM, spreadsheets and email notifications.",
  stack: ["Next.js", "n8n", "HubSpot", "Google Sheets", "Gmail", "Webhooks"],
  image: "/crm-automation.png",
  size: "large",
},
  {
    number: "02",
    name: "ND Global",
    category: "IT & Technology Platform",
    url: "https://ndglobal.in/",
    description:
      "A professional corporate website designed for ND Global with a modern business-focused interface and responsive user experience.",
    stack: ["React", "Tailwind CSS", "Node.js", "Next js","Typescript"],
    image: "/WhatsApp Image 2026-08-11 at 17.19.24.jpeg",
    size: "small",
  },
  {
    number: "03",
    name: "Indian Luxury House",
    category: "Luxury & Lifestyle",
    url: "https://www.indianluxuryhouse.com/",
    description:
      "A premium luxury-focused website with an elegant visual presentation and polished responsive experience.",
    stack: ["Next.js", "Tailwind CSS","Node js" ,"React js"],
    image: "/indian.png",
    size: "small",
  },
  
  {
    number: "04",
    name: "ND Global Marbles",
    category: "Marble & Stone",
    url: "https://ndglobal-marbles.vercel.app/",
    description:
      "A premium marble/business website showcasing products and services through a modern visual interface.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS","Node js "],
    image: "/WhatsApp Image 2026-09-05 at 17.06.01 (1).jpeg",
    size: "large",
  },
  {
    number: "05",
    name: "Manufacturing Website",
    category: "Manufacturing & Industry",
    url: "https://manufacturingnd.netlify.app/",
    description:
      "A professional manufacturing-industry website focused on presenting company information, products and business services.",
    stack: ["HTML", "CSS", "JavaScript","Next js "],
    image: "/WhatsApp Image 2026-09-05 at 17.06.01.jpeg",
    size: "small",
  },
   {
    number: "06",
    name: "ND Saffron Table",
    category: "Cafe & Restaurant",
    url: "https://nd-saffron-table.netlify.app/",
    description:
      "A warm, inviting website for a café, designed to showcase the menu, ambience and dining experience with a clean and modern interface.",
    stack: ["HTML", "CSS", "JavaScript","Next js"],
    image: "/WhatsApp Image 2026-09-05 at 17.28.16.jpeg",
  
    size: "small",
  },
];

export const services = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Modern responsive interfaces using React, Next.js and TypeScript.",
  },
  {
    number: "02",
    title: "Full-Stack Development",
    description: "Building complete web applications using Node.js, Express and MongoDB.",
  },
  {
    number: "03",
    title: "Website Development",
    description:
      "Professional business and corporate websites focused on performance and user experience.",
  },
   {
    number: "05",
    title: "CRM Automation & Integrations",
    description:
      "Automating lead management and connecting websites with CRM, email, spreadsheets and business tools using n8n, HubSpot, webhooks and APIs.",
  },
  {
    number: "04",
    title: "UI Implementation",
    description: "Converting design concepts into polished, responsive interfaces.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
