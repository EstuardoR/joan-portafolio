"use client";

import { Button } from "@mui/material";
import { PROJECTS } from "../../constants/projects.constants";
import {
  ProyectoCardBodyStyled,
  ProyectoCardFooterStyled,
  ProyectoCardStyled,
  ProyectoComingSoonNoteStyled,
  ProyectoDescriptionStyled,
  ProyectoImageFrameStyled,
  ProyectoLinkGroupStyled,
  ProyectoPlaceholderBadgeStyled,
  ProyectoTagStyled,
  ProyectoTagsRowStyled,
  ProyectoTitleStyled,
  ProyectosSectionLabelStyled,
  ProyectosSectionWrapperStyled,
  ProyectosWrapperStyled,
} from "./styles";
import Image from "next/image";

export const Proyectos = () => {
  return (
    <ProyectosSectionWrapperStyled id="proyectos">
      <ProyectosSectionLabelStyled>Proyectos</ProyectosSectionLabelStyled>
      <ProyectosWrapperStyled>
        {PROJECTS.map((project) => (
          <ProyectoCardStyled key={project.id}>
            {project.isPlaceholder && (
              <ProyectoPlaceholderBadgeStyled>
                Placeholder
              </ProyectoPlaceholderBadgeStyled>
            )}
            <ProyectoCardBodyStyled>
              <ProyectoImageFrameStyled>
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  unoptimized
                  style={{ objectFit: "contain" }}
                />
              </ProyectoImageFrameStyled>
              <ProyectoTitleStyled variant="h4">
                {project.title}
              </ProyectoTitleStyled>
              <ProyectoDescriptionStyled>
                {project.description}
              </ProyectoDescriptionStyled>
            </ProyectoCardBodyStyled>
            <ProyectoCardFooterStyled>
              <ProyectoTagsRowStyled>
                {project.tags.map((tag) => (
                  <ProyectoTagStyled key={tag}>{tag}</ProyectoTagStyled>
                ))}
              </ProyectoTagsRowStyled>
              {project.href === "#" ? (
                <ProyectoLinkGroupStyled>
                  <Button variant="outlined" disabled>
                    Ver proyecto
                  </Button>
                  <ProyectoComingSoonNoteStyled>
                    Próximamente
                  </ProyectoComingSoonNoteStyled>
                </ProyectoLinkGroupStyled>
              ) : (
                <Button
                  variant="outlined"
                  component="a"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver proyecto
                </Button>
              )}
            </ProyectoCardFooterStyled>
          </ProyectoCardStyled>
        ))}
      </ProyectosWrapperStyled>
    </ProyectosSectionWrapperStyled>
  );
};
