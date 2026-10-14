import { Box, Typography, alpha, styled } from "@mui/material";
import type { ElementType } from "react";

export const NavBarWrapperStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "fixed",
  flexDirection: "row",
  width: "100vw",
  height: "fit-content",
  zIndex: theme.zIndex.appBar,
  backgroundColor: alpha(theme.palette.background.default, 0.7),
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
  padding: "10px",
}));

export const NavBarNameStyled = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  width: "20%",
  margin: "20px",
}));

export const NavBarLogoTextStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-pixel)",
  fontSize: "1rem",
  color: theme.palette.text.primary,
}));

export const NavBarSectionsStyled = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: "25px",
  margin: "20px",
  flex: 1,
}));

export const NavBarLinkStyled = styled(Typography)<{
  component?: ElementType;
  href?: string;
}>(({ theme }) => ({
  fontFamily: "var(--font-pixel)",
  fontSize: "0.8rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: theme.palette.text.secondary,
  textDecoration: "none",
  cursor: "pointer",
  transition: "color 150ms ease",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
