"use client";

import {
  AboutMeDescriptionStyled,
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
          <AboutMeDescriptionStyled>
            Llevo 2 años construyendo aplicaciones web y moviles. Me encargo de todo el proceso 
            desde la idea inicial hasta el ultimo color de la paleta. Para que obtengas un resultado autentico y creativo desde 
            el mas pequeño detalle, sin retrasos ni esperas de semanas interminables.
          </AboutMeDescriptionStyled>
          <AboutMeDescriptionStyled variant="h5">
          
          </AboutMeDescriptionStyled>
        </AboutMeTextWrapperStyled>
        {/* <AboutMePhotoFrameStyled>
          <Image src="/images/me.jpeg" alt="me" width={200} height={200} />
        </AboutMePhotoFrameStyled> */}
      </AboutMeWrapperStyled>
    </AboutMeSectionWrapperStyled>
  );
};
