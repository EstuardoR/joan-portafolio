import Box from "@mui/material/Box";
import { NavBar } from "./components/nav-bar/nav-bar";
import { Hero } from "./components/hero/hero";
import { AboutMe } from "./components/about-me/about-me";
import { Tecnologias } from "./components/tecnologias/tecnologias";
import { Proyectos } from "./components/proyectos/proyectos";
import { Contacto } from "./components/contacto/contacto";
import { Footer } from "./components/footer/footer";

export default function Home() {
  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          padding: "20px 20px 20px 20px",
        }}
      >
        <Hero />
        <AboutMe />
        <Tecnologias />
        <Proyectos />
        <Contacto />
      </Box>
      <Footer />
    </Box>
  );
}
