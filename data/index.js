import { Code, Server, Database, Layout, Cloud } from 'lucide-react';

export const personalDetails = {
  name: "Aryan Kumar",
  role: "Software Developer",
  tagline: "Building scalable web applications with a focus on UX and performance.",
  about: "I am a software developer with a strong foundation in the MERN stack and Next.js. I have a passion for solving algorithmic challenges and designing intuitive user interfaces."
};

export const skills = [
  { name: "Programming Languages", icon: Code, items: ["Java", "Python", "Javascript","Typescript"] },
  { name: "Frontend", icon: Layout, items: ["React(Vite)", "Next.js", "Tailwind CSS", "UI/UX Design","JavaScript (ES6+)","TypeScript","Framer motion"] },
  { name: "Backend", icon: Server, items: ["Node.js", "Express.js", "REST APIs"] },
  { name: "Database", icon: Database, items: ["MongoDB", "PostgreSQL"] },
  { name: "DevOps & Tools", icon: Cloud, items: ["AWS", "Git", "Docker", "Algorithms"] },
  { name: "Computer Science Skills", icon: Code, items: ["Data Structures", "Algorithms", "Problem Solving","OOPS"] },
  { name: "Tools & Platforms", icon: Code,items: ["Git & GitHub", "VS Code", "MongoDB Atlas", "Figma","AWS","Vercel",""] },
  { name: "Soft Skills", icon: Code, items: ["Effective Communication", "Team Collaboration", "Adaptability", "Time Management"] },
  
];

export const projects = [
  {
    title: "NxtStep",
    description: "A comprehensive career counseling platform designed to help users navigate their professional paths.",
    tech: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/Arynkr07/NXTSTEP",
    status: "Completed"
  },
  {
    title: "Markdarshan",
    description: "Markdarshan Truck Routing is an intelligent logistics solution that optimizes truck routes for faster, safer, and more cost-efficient transportation.",
    tech: ["Nextjs", "Express.js", "Typescript", "Tailwind CSS","Google Maps API","Mongodb","Xg Boast Model"],
    link: "https://github.com/Akshaj-mishra/MARGDARSHAN",
    status: "In Development"
  },
  {    title: "Whiteboard",
    description: "A real-time collaborative whiteboard application enabling multiple users to draw, write, and brainstorm together online.",
    tech: ["React","CSS", "Socket.io", "Canvas API"],
    link: "https://github.com/Arynkr07/whiteboard",
    status: "Completed"
  },
  {
    title: "Alphashot",
    description: "A child-friendly educational game helping them to learn different alphabets by a simplistic 2D UI and a different object for each alphabet.",
    tech: ["C#","Blender", "Unity","Unity assets"],
    link: "https://github.com/Arynkr07/AlphaShot",
    status: "Completed"
  },
  {
    title: "Personal Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and experience as a software developer.",
    tech: ["React", "Javascript","Tailwind CSS", "Framer Motion"],
    link: "#",
    status: "Completed"
  }
];