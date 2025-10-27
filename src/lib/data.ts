import {
  BrainCircuit,
  Code,
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Twitter,
} from "lucide-react";
import { Icons } from "@/components/icons";

export const SITE_CONFIG = {
  name: "Rishabh Arya",
  url: "https://your-domain.com", // Replace with your domain
  ogImage: "https://your-domain.com/og.jpg", // Replace with your OG image URL
  description: "Full Stack MERN Developer & Project Manager with over four years’ experience architecting, building, and maintaining robust web applications.",
  socialLinks: {
    twitter: "#",
    github: "https://github.com/rishabh-work-ai",
    linkedin: "https://www.linkedin.com/in/rishabh-arya-mern/",
  },
  contact: {
    email: "rishabh.work.ai@gmail.com",
    phone: "+91-9027634330",
  },
};

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", href: SITE_CONFIG.socialLinks.github, icon: Github },
  { name: "LinkedIn", href: SITE_CONFIG.socialLinks.linkedin, icon: Linkedin },
  { name: "Twitter", href: SITE_CONFIG.socialLinks.twitter, icon: Twitter },
  { name: "Email", href: `mailto:${SITE_CONFIG.contact.email}`, icon: Mail },
];

export const EXPERIENCE_DATA = [
  {
    title: "Lead Full Stack Developer & Project Manager",
    company: "GenMantra Corp",
    date: "Feb 2025 - Present",
    description:
      "Designed, built, and launched scalable web apps for B2B/B2C clients. Led, mentored, and managed full-stack engineering teams. Oversaw Agile practices, CI/CD pipeline integration, and technical review.",
  },
  {
    title: "Senior MERN Developer & Team Lead",
    company: "SkillOnTime",
    date: "May 2023 - Nov 2024",
    description:
      "Architected EdTech/SaaS products with modular dashboards, authentication, and cloud deployment. Led cloud API development and technical best practices adoption.",
  },
  {
    title: "Full Stack Project Manager",
    company: "Techidata Solutions",
    date: "Apr 2022 - May 2023",
    description:
      "Delivered multiple multi-module applications and managed backend integrations, reporting, and optimization.",
  },
  {
    title: "Freelance MERN Consultant",
    company: "Various Startups",
    date: "Jun 2021 - Present",
    description: "Created SaaS, e-commerce, and education platforms for startups. Specialized in rapid MVP delivery, technical mentoring, and reusable codebase setup."
  }
];

export const SKILLS_DATA = {
  technical: [
    { name: "React.js", icon: Icons.react },
    { name: "Node.js", icon: Code },
    { name: "Express.js", icon: Code },
    { name: "MongoDB", icon: Code },
    { name: "Tailwind CSS", icon: Code },
    { name: "Material-UI", icon: Code },
    { name: "Docker", icon: Code },
    { name: "Git", icon: Github },
    { name: "Firebase", icon: Icons.firebase },
    { name: "AWS", icon: Code },
  ],
  soft: [
    { name: "Project Leadership" },
    { name: "Agile Scrum" },
    { name: "Team Mentoring" },
    { name: "Client Communication" },
    { name: "Problem Solving" },
    { name: "Collaboration" },
    { name: "Stakeholder Engagement" },
  ],
};

export const PROJECTS_DATA = [
  {
    id: "vinkap",
    title: "Vinkap Enterprise Platform",
    description:
      "Supports supply chain for bakeries and QSRs, streamlining ingredient sourcing and vendor onboarding. MERN-based dashboard with role management and real-time analytics.",
    link: "https://vinkap.in/",
    imagePlaceholderId: "project-vinkap"
  },
  {
    id: "manasvini",
    title: "Manasvini – Spandana Classical Arts Portal",
    description:
      "Portal for classical dance registration and video galleries. Enables class scheduling, user authentication, payment workflows, and dynamic content management.",
    link: "https://manaswini.com/3-levels-of-bharatanatyam-dance-classes-in-seattle/",
    imagePlaceholderId: "project-manasvini"
  },
  {
    id: "exaministry",
    title: "Exaministry EdTech Platform",
    description:
      "Education portal for exam prep, supporting adaptive courses, instructor/student roles, and analytics.",
    link: "https://exaministry.com",
    imagePlaceholderId: "project-exaministry"
  },
  {
    id: "dr-raja-rawal",
    title: "Dr. Raja Rawal - Appointment Booking",
    description:
      "An appointment and consultation management website offering real-time scheduling, reminders, and data visualization.",
    link: "https://dr-raja-rawal.vercel.app/",
    imagePlaceholderId: "project-dr-raja"
  },
];
