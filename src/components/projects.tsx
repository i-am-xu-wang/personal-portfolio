import React from "react";
import SectionHeading from "./sectionHeading";
import { projectsConfig } from "../lib/data";
import Image from "next/image";

export default function projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsConfig.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsConfig)[0];

function Project({ title, description, image, skills }: ProjectProps) {
  return (
    <section
      className="group last:bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 
    relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition sm:group-even:pl-8 
    dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex h-full flex-col sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>

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
      <Image
        src={image}
        alt={title}
        quality={95}
        className="absolute top-8 -right-40 w-[26.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40"
      />
    </section>
  );
}
