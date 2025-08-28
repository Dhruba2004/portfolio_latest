"use client"
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import {motion} from 'framer-motion';
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export default function About() {
  const {ref,inView} = useInView();
  const {setActiveSection}= useActiveSectionContext();
  useEffect(()=>{
    if(inView){
      setActiveSection("About");
    }
  },[inView,setActiveSection])
  
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
    id="about"
    ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
  I am a passionate Software Engineering undergrad from Kolkata, 🇮🇳 currently in the 
  final year of my B.Tech in Computer Science & Engineering at 
  <span className="font-medium"> University of Engineering & Management, Kolkata</span>. 
  My primary interest lies in{" "}
  <span className="font-medium">full-stack web development</span>, where I enjoy building 
  impactful applications and solving real-world problems.{" "}
  <span className="italic">What excites me most about programming</span> is its 
  problem-solving nature—I <span className="underline">love</span> the satisfaction of 
  cracking a tough challenge and seeing ideas come to life. 
  My core stack is{" "}
  <span className="font-bold">MongoDB, Express.js, React.js, and Node.js (MERN)</span>. 
  I am also proficient in{" "}
  <span className="font-bold">C, C++, Java, Python, and JavaScript</span>. 
  Beyond my core skills, I am continuously exploring{" "}
  <span className="font-bold">Cloud Computing, DevOps,</span> and emerging technologies 
  to expand my knowledge.
</p>

<p>
  <span className="italic">When I&apos;m not coding</span>, I enjoy playing video games, 
  watching movies, and spending quality time with my friends. I am always eager to learn, 
  grow, and take on opportunities that push my boundaries.
</p>

    </motion.section>
  );
}
