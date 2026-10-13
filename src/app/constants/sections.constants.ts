interface ISection {
  id: number;
  sectionName: string;
  route: string;
}

export const SECTIONS: ISection[] = [
  {
    id: 1,
    sectionName: "Sobre mi",
    route: "/#",
  },
  {
    id: 2,
    sectionName: "Tecnologías",
    route: "/#",
  },
  {
    id: 3,
    sectionName: "Proyectos",
    route: "/#",
  },
  {
    id: 4,
    sectionName: "Contactame",
    route: "/#",
  },
];
