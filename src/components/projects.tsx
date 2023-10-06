"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { projectsConfig } from "../lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hook";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section id="projects" ref={ref} className="scroll-mt-28">
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
