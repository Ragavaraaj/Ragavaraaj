// Achievements data with notable accomplishments throughout career
export const achievements = [
  "Successfully implemented publisher-subscriber models using AppSync and GraphQL.",
  "Suggested and implemented better architecture for production systems.",
  "Created reusable UI components and documented them in Storybook.",
  "Mentored junior developers and improved team productivity through knowledge sharing.",
  "Contributed to the migration of legacy systems to modern frameworks, ensuring scalability and maintainability.",
];

// Section content
export const achievementsContent = {
  title: "Achievements",
  subtitle: "Key accomplishments and contributions throughout my career",
};

export type Achievements = typeof achievements;
export type AchievementsContent = typeof achievementsContent;

export interface AchievementsPageData {
  achievements: Achievements;
  achievementsContent: AchievementsContent;
}