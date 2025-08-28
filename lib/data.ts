import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import learnifyImg from "@/public/images/learnify.png"
import geniusImg from "@/public/images/genius.png"
import scribeImg from  "@/public/images/scribe.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "C",
  "C++",
  "Java",
  "Framer Motion",
  "Docker",
  "AWS"
] as const;

export const educationData = [
  {
    title: "Secondary",
    location: "Barasat PCS Govt.High School",
    description:
      "Successfully completed secondary standard studies and secured 86% in WBBSE examination.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2020",
  },
  {
    title: "Higher Secondary",
    location: "Barasat PCS Govt.High School ",
    description:
      "Successfully completed higher secondary standard studies and secured 85% in WBCHSE examination.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 -2022",
  },
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    location: "University of Engineering and Management, Kolkata",
    description:
      " Currently on the path of becoming a software engineer and learn new technologies everyday.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Learnify",
    description:
      "Learnify is a modern Learning Management System (LMS) SaaS application designed to provide seamless educational experiences.",
    tags: ['Next js','Tailwind','Inggest','Drizzle','Neon DB','Clerk','Google Gemini'],
    imageUrl: learnifyImg,
    url:'https://learnify-latest.vercel.app'
  },
  {
    title: "Scribe",
    description:
      "Scribe is a full-stack AI-powered note-taking SaaS application that enables users to interact with PDF documents through chat.",
    tags: ['Next js','Tailwind','Langchain','Convex','Clerk','Google Gemini'],
    imageUrl: geniusImg,
    url:'https://rag-pdf-chat.vercel.app'
  },
  {
    title: "Genius",
    description:
      "Genius is an AI-powered content generation application designed to streamline the creation of high-quality content.",
    tags: ['Next js','Tailwind','Langchain','Convex','Clerk','Google Gemini'],
    imageUrl: scribeImg,
    url:'https://genius-ashy.vercel.app'
  }
] as const;