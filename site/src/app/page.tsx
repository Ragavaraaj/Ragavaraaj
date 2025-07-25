import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  EducationSection,
  AchievementsSection,
  ContactSection,
  DownloadResumeSection,
} from "@/components/sections";

import { AboutPageData } from "@/data/about";
import { AchievementsPageData } from "@/data/achievements";
import { ContactPageData } from "@/data/contact";
import { DownloadPageData } from "@/data/download";
import { EducationPageData } from "@/data/education";
import { ExperiencePageData } from "@/data/experience";
import { HeroPageData } from "@/data/hero";
import { ProjectsPageData } from "@/data/projects";

interface Data {
  heroSectionData: HeroPageData;
  aboutSectionData: AboutPageData;
  experienceSection: ExperiencePageData;
  projectsSection: ProjectsPageData;
  educationSection: EducationPageData;
  achievementsSection: AchievementsPageData;
  downloadResumeSection: DownloadPageData;
  contactSection: ContactPageData;
}

async function getData() {
  const data: Data = {
    heroSectionData: await import("@/data/hero"),
    aboutSectionData: await import("@/data/about"),
    experienceSection: await import("@/data/experience"),
    projectsSection: await import("@/data/projects"),
    educationSection: await import("@/data/education"),
    achievementsSection: await import("@/data/achievements"),
    downloadResumeSection: await import("@/data/download"),
    contactSection: await import("@/data/contact"),
  };

  return data;
}

export default async function Page() {
  const {
    heroSectionData,
    aboutSectionData,
    experienceSection,
    projectsSection,
    educationSection,
    achievementsSection,
    downloadResumeSection,
    contactSection,
  } = await getData();

  return (
    <main className="max-w-[1500px] m-auto">
      <HeroSection {...heroSectionData} />
      <AboutSection {...aboutSectionData} />
      <ExperienceSection {...experienceSection} />
      <ProjectsSection {...projectsSection} />
      <EducationSection {...educationSection} />
      <AchievementsSection {...achievementsSection} />
      <DownloadResumeSection {...downloadResumeSection} />
      <ContactSection {...contactSection} />
    </main>
  );
}
