import { Box, Typography, alpha, styled } from "@mui/material";
import type { ElementType } from "react";

export const NavBarWrapperStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  width: "100vw",
  zIndex: theme.zIndex.appBar,
  backgroundColor: alpha(theme.palette.background.default, 0.7),
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
}));

export const NavBarTopRowStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "14px 20px",
}));

export const NavBarNameStyled = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const NavBarLogoTextStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-pixel)",
  fontSize: "1rem",
  color: theme.palette.text.primary,
}));

export const NavBarSectionsStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "25px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const NavBarToggleButtonStyled = styled("button")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  fontFamily: "var(--font-pixel)",
  fontSize: "0.75rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
  border: `2px solid ${theme.palette.text.primary}`,
  borderRadius: theme.shape.borderRadius,
  padding: "6px 14px",
  cursor: "pointer",
  transition: "color 150ms ease, border-color 150ms ease",
  [theme.breakpoints.down("md")]: {
    display: "inline-flex",
  },
  "&:hover": {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
}));

export const NavBarMobileMenuStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  padding: "0 20px 20px",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const NavBarLinkStyled = styled(Typography)<{
  component?: ElementType;
  href?: string;
  onClick?: () => void;
}>(({ theme }) => ({
  fontFamily: "var(--font-pixel)",
  fontSize: "0.8rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: theme.palette.text.secondary,
  textDecoration: "none",
  cursor: "pointer",
  padding: "6px 0",
  transition: "color 150ms ease",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
