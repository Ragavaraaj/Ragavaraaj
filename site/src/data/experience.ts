// Experience data with work history, projects, and responsibilities
export const experiences = [
  {
    title: "Fullstack Developer",
    company: "Qburst, Chennai",
    period: "Nov 2021 - Present",
    responsibilities: [
      "Expertise in React.js and Node.js development.",
      "Developed scalable backend systems and reusable frontend components.",
      "Migrated legacy systems to modern frameworks.",
      "Proposed innovative solutions and built POCs for client projects.",
      "Wrote comprehensive test cases for all projects to ensure high-quality deliverables.",
    ],
    projects: [
      {
        name: "WWJ Corp. Software Engineering",
        period: "Oct 2024 - Present",
        details: [
          "Developed and maintained a marketing website using Next.js and Tailwind CSS.",
          "Created reusable components adhering to coding standards and optimized for scalability.",
          "Enhanced SEO performance and integrated analytics tools for better user insights.",
          "Conducted thorough testing to ensure functionality and performance.",
        ],
      },
      {
        name: "WeWork Website Maintenance and Support",
        period: "Jan 2024 - Apr 2024",
        details: [
          "Maintained and supported a marketing site built on WordPress.",
          "Resolved CSS-related issues and improved WordPress functionality.",
          "Developed custom plugins to extend WordPress capabilities and improve client workflows.",
          "Wrote test cases to validate plugin functionality and ensure seamless integration.",
        ],
      },
      {
        name: "WHILL Service Development",
        period: "Apr 2022 - Sep 2024",
        details: [
          "Designed and developed microservices for mobility vehicles and related services.",
          "Built REST APIs using Nest.js and deployed them on AWS, ensuring security and data integrity.",
          "Integrated IoT devices with backend services for real-time data processing.",
          "Conducted unit and integration testing to validate API reliability and performance.",
        ],
      },
      {
        name: "Prechex Redesign",
        period: "Mar 2022 - Apr 2022",
        details: [
          "Created ReactJS components for a UI Kit used by the SPA team for the Prechex website.",
          "Developed responsive components for both PC and mobile devices.",
          "Collaborated with designers to ensure pixel-perfect implementation of UI components.",
          "Wrote test cases for UI components to ensure cross-browser compatibility and responsiveness.",
        ],
      },
      {
        name: "ChatBot",
        period: "2023 - Present",
        details: [
          "Designed and developed a chatbot using Kotlin, Dialogflow, and React.js.",
          "Created conversational flows and optimized backend performance.",
          "Implemented advanced NLP features to improve chatbot accuracy and user experience.",
          "Conducted end-to-end testing to ensure seamless communication between frontend and backend.",
        ],
      },
    ],
  },
  {
    title: "React Developer",
    company: "TCS, Chennai",
    period: "Jul 2019 - Nov 2021",
    responsibilities: [
      "Expertise in Swift and React.js for frontend development.",
      "Established coding standards and reusable components.",
      "Proposed innovative ideas in frontend and DevOps workflows.",
      "Wrote detailed test cases for all projects to ensure robust functionality.",
    ],
    projects: [
      {
        name: "Resources Maintenance App",
        period: "Oct 2020 - Nov 2021",
        details: [
          "Built a hybrid app for technicians to report hardware issues and capture geolocation-tagged images.",
          "Implemented offline support and reusable components to enhance app functionality.",
          "Integrated geolocation tagging with real-time reporting features for better issue tracking.",
          "Conducted testing to validate offline functionality and geolocation accuracy.",
        ],
      },
      {
        name: "Mobile Plan Management App",
        period: "Aug 2019 - Oct 2020",
        details: [
          "Developed features for plan management and user authentication/authorization.",
          "Integrated third-party services and created custom functionalities.",
          "Optimized code for better performance and user experience.",
          "Conducted extensive testing to ensure reliable plan management operations.",
        ],
      },
    ],
  },
];

// Section content
export const experienceContent = {
  title: "Work Experience",
  subtitle: "My professional journey and key projects",
};

export type Experiences = typeof experiences;
export type ExperienceContent = typeof experienceContent;

export interface ExperiencePageData {
  experiences: Experiences;
  experienceContent: ExperienceContent;
}
