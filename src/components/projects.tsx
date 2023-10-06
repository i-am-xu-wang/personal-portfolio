import React from "react";
import SectionHeading from "./sectionHeading";
import { projectsConfig } from "../lib/data";
import Project from "./project";

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
