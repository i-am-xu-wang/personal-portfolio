import urbanAdvisor from "../assets/urban_advisor.png";
import summarizer from "../assets/ai_summarizer.png";

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
  },
  {
    title: "Urban Advisor",
    description:
      "Urban Advisor is an advanced full-stack application designed to offer users insights into the quality of living in various areas, tailored to their specific household needs.",
    image: urbanAdvisor,
    skills: ["Django", "Python", "JQuery", "Ajax", "Chart.js", "SQLite"],
  },
];
