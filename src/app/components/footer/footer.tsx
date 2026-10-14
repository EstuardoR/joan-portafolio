"use client";

import { FooterTextStyled, FooterWrapperStyled } from "./styles";

export const Footer = () => {
  return (
    <FooterWrapperStyled>
      <FooterTextStyled>
        © {new Date().getFullYear()} Joan Rodas
      </FooterTextStyled>
      <FooterTextStyled>Hecho con Next.js y React</FooterTextStyled>
    </FooterWrapperStyled>
  );
};
