"use client";

import React from "react";
import Image from "next/image";
import profile from "../assets/profile.png";
import resume from "../assets/icon-resume.png";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

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
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I am Xu. <br /> I&rsquo;m a software developer with a passion for
          creating responsive and user-friendly web applications. <br />
          Dive in to see some of the projects I&rsquo;m most proud of.
        </motion.h1>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://drive.google.com/file/d/1muAgcQKtp09Q5TiS2cBRiX_QIuQm4l15/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={resume} alt="resume-icon" width="33" height="33" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/xu-wang-vt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin size="1.75rem" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/i-am-xu-wang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare size="1.75rem" />
        </a>
      </motion.div>
    </section>
  );
}
