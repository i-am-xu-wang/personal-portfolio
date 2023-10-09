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

export const aboutMe = [
  "Once upon a tech-time, I traded spreadsheets for code sheets, swapping the world of public accounting for the magical world of software engineering. 🧙‍♂️✨With a Master's from Virginia Tech, I joined Dyson as a software engineer.",
  "What lights up my keyboard? Web development! Particularly when it involves Next.js and React. They're like the peanut butter and jelly of my code sandwich. But I'm not just about the frontend life. I've ventured into the enchanted forests of full-stack too. Whether it's the rhythmic flow of JavaScript, the ancient runes of Java, the pythonic spells of Python, or the commanding chants of SQL, I've got a trick up my sleeve. ",
  "When I'm not weaving digital tapestries, you can find me in the gaming arena, battling it out in PUBG or chilling in the lanes of LoL's ARAM. And for those quieter moments? Crafting latte masterpieces ☕️ or making a splash in the pool. ",
  "Looking to mix some fun with function? Let's make coding magic together!",
] as const;

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
      "I worked with a team of 10 engineers to develop the MyDyson Application. I primarily worked on developing product user manual and instant control features.",
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
