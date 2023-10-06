"use client";

import React from "react";
import { aboutMe } from "../lib/data";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";

export default function about() {
  //const { ref } = useSectionInView("About");
  return (
    <motion.section
      //ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-3">
        <p className="font-medium mb-8">
          {aboutMe.p1}
          <br />
        </p>
        <p className="font-medium mb-8">
          {aboutMe.p2}
          <br />
        </p>
        <span className="font-medium">{aboutMe.p3}</span>
      </div>
    </motion.section>
  );
}
