"use client";
import { projectsData } from "@/lib/data";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url
}: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group bg-gray-100 w-full max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative mb-6 sm:mb-8 last:mb-0 hover:bg-gray-200 transition-all dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
    >
      <div className="flex flex-col sm:flex-row h-full">
        {/* Text section */}
        <div className="p-5 sm:p-10 flex flex-col justify-between sm:max-w-[50%]">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl font-semibold hover:underline cursor-pointer"
            >
              {title}
            </Link>
            </h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
          </div>

          {/* Tags */}
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-6">
            {tags.map((tag, index) => (
              <li
                className="bg-black/70 px-3 py-1 text-[0.65rem] sm:text-[0.75rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="relative flex justify-center sm:justify-end sm:items-center w-full sm:w-[50%] p-4 sm:p-0">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="w-full max-w-[20rem] sm:max-w-[22rem] h-auto rounded-lg shadow-2xl 
              transition group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:rotate-2 group-hover:scale-[1.04]"
          />
        </div>
      </div>
    </motion.section>
  );
}
