import urbanAdvisor from "../assets/urban_advisor.png";
import summarizer from "../assets/ai_summarizer.png";
import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const aboutMe = {
  p1: "After a few years in public accounting, I chose to follow my passion for software engineering. I earned my Master's in Computer Science from Virginia Tech, achieving a perfect GPA. Post-graduation, I joined Dyson as a software engineer and worked on developing the MyDyson Application. I'm drawn to coding primarily because of the satisfaction I get from leveraging my technical expertise to address real-world challenges.",
  p2: "Web development is my main focus, with a strong proficiency in Next.js and React. I've also expanded my skills into full-stack development. Beyond JavaScript, I code confidently in Java,Python and SQL query. ",
  p3: "Outside the coding sphere, I enjoy playing videos games(big PUBG and League of Legends ARAM player), making latte art and occasionally swimming.",
} as const;

export const projectsConfig = [
  {
    title: "Article Summarizer",
    description:
      "OpenAI Article Summarizer is front-end project powered by OpenAI GPT-4 to summarize articles. ",
    image: summarizer,
    skills: ["Typescript", "React", "Redux", "Vite", "TailwindCSS"],
    demoUrl: "https://superlative-fudge-8d14e1.netlify.app",
    codeUrl: "https://github.com/i-am-xu-wang/ai_summarizer",
  },
  {
    title: "Urban Advisor",
    description:
      "Urban Advisor is an advanced full-stack application designed to offer users insights into the quality of living in various areas, tailored to their specific household needs.",
    image: urbanAdvisor,
    skills: ["Django", "Python", "JQuery", "Ajax", "Chart.js", "SQLite"],
    demoUrl: "https://urban-advisor.herokuapp.com",
    codeUrl: "https://github.com/i-am-xu-wang/urban_advisor",
  },
];

export const skillsConfig = [
  "TypeScript/Javascript",
  "React",
  "Next.js",
  "Redux",
  "Node.js",
  "Express.js",
  "Python",
  "Java",
  "Spring Boot",
  "SQL",
  "Django",
  "Flask",
  "HTML",
  "CSS",
  "JQuery",
  "TailwindCSS",
  "Bootstrap",
  "Material UI",
  "Vite",
  "Webpack",
  "Jest",
  "Junit",
  "Mockito",
  "Git",
];

export const experienceConfig = [
  {
    title: "Software Engineer",
    company: "Dyson",
    location: "Shanghai, China",
    description:
      "I worked with a team of 10 engineers to develop the MyDyson Application. I was responsible for the development of the product user manual and instant control features.",
    icon: React.createElement(BsPersonWorkspace),
    date: "2022",
  },
  {
    title: "Masters student in Computer Science",
    company: "Virginia Tech",
    location: "Falls Church, VA",
    description:
      "My study in Virginia Tech was profound and successful (4.0 GPA hooray!). My concentration of study focuses on software engineering. I took courses in web development, data structure and algorithm, software testing and software design.",
    icon: React.createElement(GiGraduateCap),
    date: "2020",
  },
  {
    title: "Part-time student in Computer Science",
    company: "Northern Virginia Community College",
    location: "Sterling, VA",
    description:
      "While working in the local accounting firm, I took classes in the evening to learn the basics of computer science.",
    icon: React.createElement(BsPersonWorkspace),
    date: "2019",
  },
] as const;
