"use client";

import { Button } from "@mui/material";
import {
  HeroActionsStyled,
  HeroDescriptionStyled,
  HeroMainInfoStyled,
  HeroNameStyled,
  HeroPixelArtStyled,
  HeroRoleStyled,
  HeroWrapperStyled,
  PixelArtWrapperStyled,
} from "./styles";
import Image from "next/image";

export const Hero = () => {
  return (
    <HeroWrapperStyled id="hero">
      <HeroMainInfoStyled>
        <HeroRoleStyled>Frontend Engineer</HeroRoleStyled>
        <HeroNameStyled variant="h1">Joan Rodas</HeroNameStyled>
        <HeroDescriptionStyled>
          Diseño y desarrollo software que no se interpone en tu camino.
        </HeroDescriptionStyled>
        <HeroActionsStyled>
          <Button variant="contained" component="a" href="#proyectos">
            Ver proyectos
          </Button>
          <Button
            variant="outlined"
            component="a"
            href="/documents/cv-joan-rodas.pdf"
            download="Joan-Rodas-CV.pdf"
          >
            Descargar CV
          </Button>
        </HeroActionsStyled>
      </HeroMainInfoStyled>

      <HeroPixelArtStyled>
        <PixelArtWrapperStyled>
          <Image
            src="/images/rostro_animado.gif"
            alt="Pixel art de Joan Rodas"
            fill
            unoptimized
            style={{ objectFit: "cover" }}
          />
        </PixelArtWrapperStyled>
      </HeroPixelArtStyled>
    </HeroWrapperStyled>
  );
};
