import type { Metadata } from "next";
import { ThemeRegistry } from "./ThemeRegistry";
import { displayFont, bodyFont, pixelFont } from "@/fonts";

export const metadata: Metadata = {
  title: "Joan — Frontend Developer",
  description:
    "Portafolio de Joan, Frontend Developer especializado en React, TypeScript y Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${displayFont.variable} ${bodyFont.variable} ${pixelFont.variable}`}
    >
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
