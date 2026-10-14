export interface IProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  img: string;
  isPlaceholder: boolean;
}

export const PROJECTS: IProject[] = [
  {
    id: "one",
    title: "Pixel Coffee",
    description:
      "Pixel Coffee es un sitio web dedicado a una cafetería con tematica de pixel art, una experiencia visual con estetica retro",
    tags: ["React", "Javascript", "CSS"],
    href: "https://pixel-coffee-one.vercel.app/",
    img: "/images/pixel-coffee.png",
    isPlaceholder: false,
  },
  {
    id: "two",
    title: "Algorithm Agent",
    description:
      "Algorithm Agent es una aplicación que integra el Api de Gemini logrando una conversación fluida con una interfaz de usuario muy agradable e intuitiva.",
    tags: ["React", "Typescript", "Vite", "Gemini API/Integration"],
    href: "https://algorithm-agent.vercel.app/",
    img: "/images/algorithm-agent.png",
    isPlaceholder: false,
  },
  {
    id: "three",
    title: "MetaCritic Games",
    description:
      "MetaCritic Games es una aplicación movil que permite a los usuarios revisar la calificación de los juegos más recientes, actualmente se encuentra en desarrollo.",
    tags: ["React Native", "Typescript", "Expo"],
    href: "#",
    img: "/images/metacritic_games.png",
    isPlaceholder: false,
  },
];
