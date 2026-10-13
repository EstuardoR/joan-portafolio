"use client";

import { Button } from "@mui/material";
import {
  HeroActionsStyled,
  HeroDescriptionStyled,
  HeroNameStyled,
  HeroRoleStyled,
  HeroWrapperStyled,
} from "./styles";

// TODO(joan): reemplaza el contenido de ejemplo con tu propia voz.
// La estructura (rol -> nombre -> descripción -> acciones) es solo
// un punto de partida: cambia el layout, el orden o el markup como prefieras.
export const Hero = () => {
  return (
    <HeroWrapperStyled id="hero">
      <HeroRoleStyled>Frontend Engineer</HeroRoleStyled>
      <HeroNameStyled variant="h1">Joan Rodas</HeroNameStyled>
      <HeroDescriptionStyled>
        Diseño y desarrollo software que no se interpone en tu camino.
      </HeroDescriptionStyled>
      <HeroActionsStyled>
        <Button variant="contained">Ver proyectos</Button>
        <Button variant="outlined">Descargar CV</Button>
      </HeroActionsStyled>
    </HeroWrapperStyled>
  );
};
