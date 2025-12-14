import { Code, Server, Database, Layout, Cloud } from 'lucide-react';

export const personalDetails = {
  name: "Aryan Kumar",
  role: "Software Developer",
  tagline: "Building scalable web applications with a focus on UX and performance.",
  about: "I am a software developer with a strong foundation in the MERN stack and Next.js. I have a passion for solving algorithmic challenges and designing intuitive user interfaces."
};

export const skills = [
  { name: "Frontend", icon: Layout, items: ["React", "Next.js", "Tailwind CSS", "UI/UX Design"] },
  { name: "Backend", icon: Server, items: ["Node.js", "Express.js", "REST APIs"] },
  { name: "Database", icon: Database, items: ["MongoDB", "PostgreSQL"] },
  { name: "DevOps & Tools", icon: Cloud, items: ["AWS", "Git", "Docker", "Algorithms"] },
];

export const projects = [
  {
    title: "NxtStep",
    description: "A comprehensive career counseling platform designed to help users navigate their professional paths.",
    tech: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "#",
    status: "Completed"
  },
  {
    title: "Travel Planner",
    description: "An interactive tool for travelers to plan city-based trips with detailed budget allocation and local guide integration.",
    tech: ["React", "Node.js", "Map APIs"],
    link: "#",
    status: "In Development"
  }
];