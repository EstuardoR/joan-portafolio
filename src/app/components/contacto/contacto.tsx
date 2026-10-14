"use client";

import { CONTACT_LINKS } from "../../constants/contact.constants";
import {
  ContactoLinkCardStyled,
  ContactoSectionLabelStyled,
  ContactoSectionWrapperStyled,
  ContactoWrapperStyled,
} from "./styles";

export const Contacto = () => {
  return (
    <ContactoSectionWrapperStyled id="contacto">
      <ContactoSectionLabelStyled>Contáctame</ContactoSectionLabelStyled>
      <ContactoWrapperStyled>
        {CONTACT_LINKS.map((link) => (
          <ContactoLinkCardStyled
            key={link.id}
            component="a"
            href={link.href}
            target={link.id !== "email" ? "_blank" : undefined}
            rel={link.id !== "email" ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </ContactoLinkCardStyled>
        ))}
      </ContactoWrapperStyled>
    </ContactoSectionWrapperStyled>
  );
};
