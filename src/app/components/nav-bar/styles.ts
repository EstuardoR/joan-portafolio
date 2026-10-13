import { Box, Typography, styled } from "@mui/material";

export const NavBarWrapperStyled = styled(Box)(() => ({
  display: "flex",
  position: "fixed",
  flexDirection: "row",
  width: "100vw",
  height: "fit-content",
  backgroundColor: "transparent",
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

export const NavBarLinkStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-pixel)",
  fontSize: "0.8rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: theme.palette.text.secondary,
  cursor: "pointer",
  transition: "color 150ms ease",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
