import { Box, Typography, styled } from "@mui/material";

export const ProyectosSectionWrapperStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  scrollMarginTop: "100px",
  marginTop: "80px",
}));

export const ProyectosSectionLabelStyled = styled(Typography)(
  ({ theme }) => ({
    fontFamily: "var(--font-pixel)",
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: theme.palette.text.primary,
    marginBottom: "16px",
  })
);

export const ProyectosWrapperStyled = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "32px",
  width: "85%",
}));

export const ProyectoCardStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  flex: "1 1 300px",
  maxWidth: "360px",
  padding: "24px",
  backgroundColor: theme.palette.background.paper,
  border: `4px solid ${theme.palette.text.primary}`,
  boxShadow: `6px 6px 0 0 ${theme.palette.primary.main}`,
}));

export const ProyectoCardBodyStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  flexGrow: 1,
}));

export const ProyectoCardFooterStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

export const ProyectoPlaceholderBadgeStyled = styled(Typography)(
  ({ theme }) => ({
    fontFamily: "var(--font-pixel)",
    fontSize: "0.6rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: theme.palette.secondary.main,
    alignSelf: "flex-start",
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: "2px 6px",
  })
);

export const ProyectoImageFrameStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: "16 / 9",
  overflow: "hidden",
  border: `2px solid ${theme.palette.text.primary}`,
  backgroundColor: theme.palette.background.default,
}));

export const ProyectoTitleStyled = styled(Typography)(() => ({
  fontFamily: "var(--font-display)",
  fontWeight: 700,
}));

export const ProyectoDescriptionStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontFamily: "var(--font-body)",
}));

export const ProyectoTagsRowStyled = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
}));

export const ProyectoTagStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-pixel)",
  fontSize: "0.6rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.text.secondary}`,
  padding: "2px 6px",
}));

export const ProyectoLinkGroupStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "6px",
}));

export const ProyectoComingSoonNoteStyled = styled(Typography)(
  ({ theme }) => ({
    fontFamily: "var(--font-pixel)",
    fontSize: "0.65rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: theme.palette.text.secondary,
  })
);
