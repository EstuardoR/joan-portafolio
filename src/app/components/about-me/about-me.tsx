"use client";

import Image from "next/image";
import {
  AboutMeDescriptionStyled,
  AboutMeLeadStyled,
  AboutMePhotoFrameStyled,
  AboutMeSectionLabelStyled,
  AboutMeSectionWrapperStyled,
  AboutMeTextWrapperStyled,
  AboutMeWrapperStyled,
} from "./styles";

export const AboutMe = () => {
  return (
    <AboutMeSectionWrapperStyled id="sobre-mi">
      <AboutMeSectionLabelStyled>Sobre mí</AboutMeSectionLabelStyled>
      <AboutMeWrapperStyled>
        <AboutMeTextWrapperStyled>
          <AboutMeLeadStyled>
            Construyo experiencias digitales con atención al detalle.
          </AboutMeLeadStyled>
          <AboutMeDescriptionStyled>
            Llevo 2 años creando aplicaciones web y móviles, acompañando cada
            proyecto desde la idea inicial hasta el último detalle de la
            interfaz. Me gusta cuidar tanto la experiencia como el código que
            hay detrás, para entregar resultados auténticos sin vueltas
            innecesarias.
          </AboutMeDescriptionStyled>
        </AboutMeTextWrapperStyled>
        
        <AboutMePhotoFrameStyled>
          <Image
            src="/images/fullbody.jpeg"
            alt="Joan Rodas"
            fill
            sizes="240px"
            quality={90}
            style={{ objectFit: "cover" }}
          />
        </AboutMePhotoFrameStyled>
      </AboutMeWrapperStyled>
    </AboutMeSectionWrapperStyled>
  );
};
