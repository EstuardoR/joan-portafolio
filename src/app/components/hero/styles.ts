import { Box, Typography, styled } from "@mui/material";

export const HeroWrapperStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "40px",
  padding: "0 24px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const HeroMainInfoStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  scrollMarginTop: "100px",
  [theme.breakpoints.down("md")]: {
    minHeight: "auto",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "120px",
    paddingBottom: "40px",
  },
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

export const HeroActionsStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  gap: "16px",
  marginTop: "32px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
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

export const HeroPixelArtStyled = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    marginBottom: "50px",
  }
}));

export const PixelArtWrapperStyled = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 'clamp(220px, 32vw, 380px)',
  aspectRatio: '1 / 1',
  borderRadius: '50%',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  border: `4px solid ${theme.palette.common.black}`,
  boxShadow: `6px 6px 0 0 ${theme.palette.primary.main}`,
}));