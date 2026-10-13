"use client";

import { SECTIONS } from "../../constants/sections.constants";
import {
  NavBarLinkStyled,
  NavBarLogoTextStyled,
  NavBarNameStyled,
  NavBarSectionsStyled,
  NavBarWrapperStyled,
} from "./styles";

export const NavBar = () => {
  return (
    <NavBarWrapperStyled>
      <NavBarNameStyled>
        <NavBarLogoTextStyled>Joan Rodas</NavBarLogoTextStyled>
      </NavBarNameStyled>
      <NavBarSectionsStyled>
        {SECTIONS.map((s) => (
          <NavBarLinkStyled key={s.id}>{s.sectionName}</NavBarLinkStyled>
        ))}
      </NavBarSectionsStyled>
    </NavBarWrapperStyled>
  );
};
