// Skills data grouped by category
export const skills = {
  frontend: [
    "React.js",
    "Redux-Saga",
    "Redux-Thunk",
    "Styled Components",
    "Storybook",
    "Tailwind CSS",
    "Material UI",
  ],
  backend: [
    "Node.js",
    "Nest.js",
    "Express",
    "Prisma ORM",
    "REST APIs",
    "GraphQL",
  ],
  devops: ["Docker", "AWS", "CI/CD pipelines"],
  tools: ["Git", "JIRA", "Jest", "Husky"],
  dataBase: ["PostgreSQL", "MySQL"],
};

// Professional highlights with title and description
export const highlights = [
  {
    title: "Microservices Architecture",
    description:
      "Designed and developed microservices for IoT mobility vehicles using Nest.js, ensuring scalability and maintainability.",
  },
  {
    title: "Frontend Expertise",
    description:
      "Created reusable UI components with React.js for multiple projects, focusing on accessibility and performance optimization.",
  },
  {
    title: "DevOps Integration",
    description:
      "Implemented CI/CD pipelines and containerized applications using Docker for streamlined deployment workflows.",
  },
  {
    title: "Full Stack Development",
    description:
      "Built end-to-end solutions from REST APIs with Node.js to responsive UIs with React, Redux, and modern CSS frameworks.",
  },
  {
    title: "Open Source Contributions",
    description:
      "Developed personal projects including a Go-based DIY photo frame for Raspberry Pi and a modern CMS with Next.js.",
  },
];

// About me content
export const aboutContent = {
  title: "About Me",
  subtitle:
    "My expertise in web development and passion for creating impactful digital experiences",
  description:
    "My professional journey spans diverse industries, from IoT mobility solutions to marketing platforms, where I've consistently delivered high-performance applications with exceptional user experiences. With expertise in both frontend and backend technologies, I excel at creating responsive interfaces while building robust, scalable systems. I thrive in Agile environments, leveraging DevOps practices to optimize workflows and lead teams to successful project completion. My approach combines technical excellence with a strong focus on user-centered design, ensuring solutions that are both powerful and intuitive.",
  skillsTitle: "Skills",
  skillsCategories: {
    frontend: "Frontend Development",
    backend: "Backend Development",
    devops: "DevOps & Deployment",
    tools: "Tools & Testing",
    dataBase: "Database",
  },
};

export type Skills = typeof skills;
export type Highlights = typeof highlights;
export type AboutContent = typeof aboutContent;

export interface AboutPageData {
  skills: Skills;
  highlights: Highlights;
  aboutContent: AboutContent;
}
