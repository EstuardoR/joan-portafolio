"use client";

import { SKILL_CATEGORIES } from "../../constants/skills.constants";
import {
  TecnologiasCategoryCardStyled,
  TecnologiasCategoryTitleStyled,
  TecnologiasChipStyled,
  TecnologiasChipsRowStyled,
  TecnologiasSectionLabelStyled,
  TecnologiasSectionWrapperStyled,
  TecnologiasWrapperStyled,
} from "./styles";

export const Tecnologias = () => {
  return (
    <TecnologiasSectionWrapperStyled id="tecnologias">
      <TecnologiasSectionLabelStyled>Tecnologías</TecnologiasSectionLabelStyled>
      <TecnologiasWrapperStyled>
        {SKILL_CATEGORIES.map((category) => (
          <TecnologiasCategoryCardStyled key={category.id}>
            <TecnologiasCategoryTitleStyled>
              {category.category}
            </TecnologiasCategoryTitleStyled>
            <TecnologiasChipsRowStyled>
              {category.items.map((item) => (
                <TecnologiasChipStyled key={item} label={item} />
              ))}
            </TecnologiasChipsRowStyled>
          </TecnologiasCategoryCardStyled>
        ))}
      </TecnologiasWrapperStyled>
    </TecnologiasSectionWrapperStyled>
  );
};
