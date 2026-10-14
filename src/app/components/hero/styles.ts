import { Box, Typography, styled } from "@mui/material";

export const HeroWrapperStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "0 24px",
  scrollMarginTop: "100px",
}));

export const HeroRoleStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-pixel)",
  fontSize: "0.85rem",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: theme.palette.primary.main,
}));

export const HeroNameStyled = styled(Typography)(() => ({
  fontWeight: 800,
}));

export const HeroDescriptionStyled = styled(Typography)(({ theme }) => ({
  maxWidth: "480px",
  marginTop: "16px",
  color: theme.palette.text.secondary,
  fontFamily: "var(--font-pixel)"
}));

export const HeroActionsStyled = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
  marginTop: "32px",
}));

export const HeroCvGroupStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "6px",
}));

export const HeroCvNoteStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-pixel)",
  fontSize: "0.65rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: theme.palette.text.secondary,
}));
