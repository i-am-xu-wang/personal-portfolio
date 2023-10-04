"use client";

import React from "react";
import Image from "next/image";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

export default function intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 1,
            }}
          >
            <Image
              src={profile}
              alt="profile"
              width="200"
              height="200"
              quality="100"
              className="h-30 w-30 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
        <motion.p
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I am Xu. <br /> I&rsquo;m a software developer with a passion for
          creating responsive and user-friendly web applications. <br />
          Dive in to see some of the projects I&rsquo;m most proud of.
        </motion.p>
      </div>
      <div></div>
    </section>
  );
}
