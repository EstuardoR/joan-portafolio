import { Box, Typography, styled } from "@mui/material";

export const FooterWrapperStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  padding: "24px 20px",
  borderTop: `2px solid ${theme.palette.text.secondary}`,
  marginTop: "80px",
}));

export const FooterTextStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-pixel)",
  fontSize: "0.7rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: theme.palette.text.secondary,
}));
