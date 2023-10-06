"use client";

import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import demo from "../assets/icon-demo.png";
import Link from "next/link";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectsConfig } from "../lib/data";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsConfig)[0];

export default function Project({
  title,
  description,
  image,
  skills,
  demoUrl,
  codeUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className=" last:bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 
      relative hover:bg-gray-200 transition sm:group-even:pl-8 
    dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex h-full flex-col sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <div className="flex py-2 justify-start">
            <a
              className="mr-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 hover:scale-[1.05] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={demo} alt="resume-icon" width="33" height="33" />
            </a>
            <a
              className=" text-gray-700 flex items-center gap-2 text-[1.35rem] hover:scale-[1.01] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack
            dark:bg-white/10 dark:text-white/60"
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size="2.25rem" />
            </a>
          </div>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {skills.map((skill, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <Link href={demoUrl}>
          <Image
            src={image}
            alt={title}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition  
            group-even:right-[initial] group-even:-left-40
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2"
          />
        </Link>
      </section>
    </motion.div>
  );
}
