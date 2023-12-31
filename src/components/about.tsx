"use client";

import React from "react";
import { aboutMe } from "../lib/data";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Hi there 👋</SectionHeading>
      <div className="mb-3">
        {aboutMe.map((paragraph, index) => (
          <p key={index} className="font-medium mb-4">
            {paragraph}
            <br />
          </p>
        ))}
      </div>
    </motion.section>
  );
}
