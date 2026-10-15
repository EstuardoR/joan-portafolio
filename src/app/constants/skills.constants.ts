export interface ISkillCategory {
  id: string;
  category: string;
  items: string[];
}

export const SKILL_CATEGORIES: ISkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "HTML5",
      "Zustand",
      "Jest",
      "Tanstack Query",
      "React Native",
      "Expo",
    ],
  },
  {
    id: "UI/UX",
    category: "UI Y Animación",
    items: [
      "Material UI",
      "Styled Components",
      "Framer Motion",
      "CSS Modules",
      "Responsive Design",
    ],
  },
  {
    id: "herramientas",
    category: "Herramientas",
    items: [
      "Git",
      "Github",
      "Bitbucket",
      "Jira",
      "Sentry",
      "Growthbook",
      "Postman",
    ],
  },
];
