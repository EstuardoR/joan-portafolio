import { Box, Typography, styled } from "@mui/material";
import type { ElementType } from "react";

export const ContactoSectionWrapperStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  scrollMarginTop: "100px",
  marginTop: "80px",
}));

export const ContactoSectionLabelStyled = styled(Typography)(
  ({ theme }) => ({
    fontFamily: "var(--font-pixel)",
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: theme.palette.text.primary,
    marginBottom: "16px",
  })
);

export const ContactoWrapperStyled = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
}));

export const ContactoLinkCardStyled = styled(Box)<{
  component?: ElementType;
  href?: string;
  target?: string;
  rel?: string;
}>(({ theme }) => ({
  fontFamily: "var(--font-pixel)",
  fontSize: "0.85rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  textDecoration: "none",
  color: theme.palette.text.primary,
  padding: "14px 22px",
  backgroundColor: theme.palette.background.paper,
  border: `2px solid ${theme.palette.common.black}`,
  boxShadow: `4px 4px 0 0 ${theme.palette.common.black}`,
  transition: "transform 150ms ease, box-shadow 150ms ease",
  cursor: "pointer",
  "&:hover": {
    boxShadow: `2px 2px 0 0 ${theme.palette.common.black}`,
    transform: "translate(2px, 2px)",
  },
}));
