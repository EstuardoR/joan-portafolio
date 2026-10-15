"use client";

import { useState } from "react";
import { SECTIONS } from "../../constants/sections.constants";
import {
  NavBarLinkStyled,
  NavBarLogoTextStyled,
  NavBarMobileMenuStyled,
  NavBarNameStyled,
  NavBarSectionsStyled,
  NavBarToggleButtonStyled,
  NavBarTopRowStyled,
  NavBarWrapperStyled,
} from "./styles";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavBarWrapperStyled>
      <NavBarTopRowStyled>
        <NavBarNameStyled>
          <NavBarLogoTextStyled>Joan Rodas</NavBarLogoTextStyled>
        </NavBarNameStyled>
        <NavBarSectionsStyled>
          {SECTIONS.map((s) => (
            <NavBarLinkStyled key={s.slug} component="a" href={`#${s.slug}`}>
              {s.sectionName}
            </NavBarLinkStyled>
          ))}
        </NavBarSectionsStyled>
        <NavBarToggleButtonStyled
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Cerrar" : "Menú"}
        </NavBarToggleButtonStyled>
      </NavBarTopRowStyled>
      {open && (
        <NavBarMobileMenuStyled>
          {SECTIONS.map((s) => (
            <NavBarLinkStyled
              key={s.slug}
              component="a"
              href={`#${s.slug}`}
              onClick={() => setOpen(false)}
            >
              {s.sectionName}
            </NavBarLinkStyled>
          ))}
        </NavBarMobileMenuStyled>
      )}
    </NavBarWrapperStyled>
  );
};
