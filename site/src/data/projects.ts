// Projects data with titles, descriptions, features, and technologies
export const projects = [
  {
    title: "Pi Frame",
    description:
      "A DIY digital photo frame project for Raspberry Pi or similar Linux SBCs.",
    features: [
      "Displays images from a local folder directly to the framebuffer.",
      "Supports JPEG and PNG formats with automatic resizing.",
      "Configurable slideshow interval and systemd service support for auto-start on boot.",
    ],
    technologies: ["Go", "Linux framebuffer"],
    link: "https://github.com/Ragavaraaj/pi-frame",
  },
  {
    title: "DIY Photo Frame",
    description: "A simple DIY photo frame project written in Go.",
    features: [
      "Displays images on a screen with easy setup and customization.",
      "Ideal for creating personalized photo frames.",
    ],
    technologies: ["Go", "Gioui library"],
    link: "https://github.com/Ragavaraaj/diy-photoframe",
  },
  {
    title: "Morpho CMS",
    description:
      "A modern, extensible content management system built with Next.js.",
    features: [
      "Next.js 15 with React 18 and TypeScript.",
      "Dockerized MongoDB for local development.",
      "shadcn/ui for accessible, customizable UI components.",
      "Role-based access control, WYSIWYG editor, SEO, and analytics.",
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Docker", "shadcn/ui"],
    link: "https://github.com/Ragavaraaj/morpho-cms",
  },
];

// Section content
export const projectsContent = {
  title: "Personal Projects",
  subtitle:
    "Showcasing my passion and skills through personal development projects",
  labels: {
    features: "Features",
    technologies: "Technologies",
    viewButton: "View on GitHub",
  },
};

export type Projects = typeof projects;
export type ProjectsContent = typeof projectsContent;

export interface ProjectsPageData {
  projects: Projects;
  projectsContent: ProjectsContent;
}
