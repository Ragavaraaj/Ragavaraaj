// Hero section data for the landing page
export const heroContent = {
  name: "Ragavaraaj Dhurairaj",
  title: "Senior Full Stack Developer",
  description:
    "With over 6 years of expertise in React.js and 3 years in Node.js development. Adept at crafting dynamic user interfaces, building scalable backend systems, and implementing DevOps practices.",
  buttons: {
    primary: {
      text: "View Experience",
      link: "#experience",
    },
    secondary: {
      text: "Contact Me",
      link: "#contact",
    },
  },
  avatar: {
    src: "/profile.jpg",
    alt: "Ragavaraaj Dhurairaj",
    fallback: "RD",
  },
};

export type HeroContent = typeof heroContent;

export interface HeroPageData {
  heroContent: HeroContent;
}