import { Bricolage_Grotesque, IBM_Plex_Sans, Silkscreen } from "next/font/google";

export const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

export const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const pixelFont = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
});
