// Education data with degrees, institutions, and years
export const education = [
  {
    degree: "Master of Technology (M.Tech.) - Computational Science",
    institution: "SRM University, Chennai",
    year: "Expected 2024",
  },
  {
    degree: "Bachelor of Engineering (B.E.) - Computer Science",
    institution: "Gojan School of Business and Technology, Chennai",
    year: "2015 - 2019",
  },
];

// Section content
export const educationContent = {
  title: "Education",
  subtitle: "My academic qualifications and educational background",
};

export type Education = typeof education;
export type EducationContent = typeof educationContent;

export interface EducationPageData {
  education: Education;
  educationContent: EducationContent;
}
