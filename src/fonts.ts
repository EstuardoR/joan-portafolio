import { Bricolage_Grotesque, IBM_Plex_Sans, Silkscreen } from "next/font/google";

// Display: títulos grandes, peso editorial/cinematográfico.
export const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

// Body: texto de lectura (párrafos, case studies).
export const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

// Pixel: elementos de interfaz cortos (nav, botones, etiquetas) — guiño a Balatro.
export const pixelFont = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
});
