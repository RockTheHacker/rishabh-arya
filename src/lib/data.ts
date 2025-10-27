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
  name: "Rishabh",
  url: "https://your-domain.com", // Replace with your domain
  ogImage: "https://your-domain.com/og.jpg", // Replace with your OG image URL
  description: "Interactive resume and portfolio for Rishabh, a developer specializing in web, app, and AI/ML development.",
  socialLinks: {
    twitter: "https://twitter.com/your-profile",
    github: "https://github.com/your-profile",
    linkedin: "https://www.linkedin.com/in/your-profile/",
  },
  contact: {
    email: "your-email@example.com",
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
    title: "Lead AI/ML Developer",
    company: "Innovate AI",
    date: "2021 - Present",
    description:
      "Leading the development of AI-powered solutions, specializing in Genkit and Firebase integrations. Designed and implemented scalable machine learning models and created intuitive user interfaces for complex applications.",
  },
  {
    title: "Full-Stack Developer",
    company: "Creative Solutions Agency",
    date: "2019 - 2021",
    description:
      "Developed and maintained full-stack web applications for a variety of clients. Worked with React, Next.js, and Node.js to build responsive and performant user experiences. Managed databases and deployed applications to cloud services.",
  },
  {
    title: "Junior Web Developer",
    company: "Tech Starters Inc.",
    date: "2017 - 2019",
    description:
      "Assisted in the development of front-end features for various web platforms. Gained proficiency in HTML, CSS, and JavaScript, and contributed to team projects in an agile environment.",
  },
];

export const SKILLS_DATA = {
  technical: [
    { name: "TypeScript", icon: Icons.typescript },
    { name: "JavaScript", icon: Icons.javascript },
    { name: "React", icon: Icons.react },
    { name: "Next.js", icon: Icons.nextjs },
    { name: "Firebase", icon: Icons.firebase },
    { name: "Genkit", icon: Icons.genkit },
    { name: "Web Development", icon: Code },
    { name: "App Development", icon: Smartphone },
    { name: "AI/ML", icon: BrainCircuit },
  ],
  soft: [
    { name: "Problem Solving" },
    { name: "Communication" },
    { name: "Teamwork" },
    { name: "Adaptability" },
    { name: "Creativity" },
  ],
};

export const PROJECTS_DATA = [
  {
    id: "plant-diagnosis-app",
    title: "AI Plant Diagnosis App",
    description:
      "A mobile-friendly web app that uses machine learning to diagnose plant diseases from images. Built with Next.js and a custom-trained model.",
    link: "#",
    imagePlaceholderId: "project1"
  },
  {
    id: "ai-chatbot",
    title: "Customer Service Chatbot",
    description:
      "An intelligent chatbot for e-commerce sites that handles customer queries, processes orders, and provides support. Powered by Google's Gemini.",
    link: "#",
    imagePlaceholderId: "project2"
  },
  {
    id: "portfolio-builder",
    title: "Interactive Resume Builder",
    description:
      "A platform that allows users to create stunning, interactive portfolio websites like this one, without writing any code. Features a drag-and-drop interface.",
    link: "#",
    imagePlaceholderId: "project3"
  },
];
