export interface ISection {
  slug: string;
  sectionName: string;
}

export const SECTIONS: ISection[] = [
  {
    slug: "sobre-mi",
    sectionName: "Sobre mí",
  },
  {
    slug: "tecnologias",
    sectionName: "Tecnologías",
  },
  {
    slug: "proyectos",
    sectionName: "Proyectos",
  },
  {
    slug: "contacto",
    sectionName: "Contáctame",
  },
];
