export interface IContactLink {
  id: string;
  label: string;
  href: string;
}

export const CONTACT_LINKS: IContactLink[] = [
  { id: "email", label: "Email", href: "mailto:rrodasestuardo2004@gmail.com" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/joan-rodas/" },
  { id: "github", label: "GitHub", href: "https://github.com/EstuardoR" },
];
