"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { skillsConfig } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsConfig.map((skill) => (
          <motion.li
            key={skill}
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
