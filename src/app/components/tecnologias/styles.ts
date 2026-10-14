import { Box, Chip, Typography, styled } from "@mui/material";

export const TecnologiasSectionWrapperStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  scrollMarginTop: "100px",
  marginTop: "80px",
}));

export const TecnologiasSectionLabelStyled = styled(Typography)(
  ({ theme }) => ({
    fontFamily: "var(--font-pixel)",
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: theme.palette.text.primary,
    marginBottom: "16px",
  })
);

export const TecnologiasWrapperStyled = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "24px",
  width: "80%",
}));

export const TecnologiasCategoryCardStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  minWidth: "220px",
  flex: "1 1 240px",
  padding: "24px",
  backgroundColor: theme.palette.background.paper,
  border: `3px solid ${theme.palette.text.primary}`,
  boxShadow: `5px 5px 0 0 ${theme.palette.primary.main}`,
}));

export const TecnologiasCategoryTitleStyled = styled(Typography)(
  ({ theme }) => ({
    fontFamily: "var(--font-pixel)",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: theme.palette.secondary.main,
  })
);

export const TecnologiasChipsRowStyled = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
}));

export const TecnologiasChipStyled = styled(Chip)(({ theme }) => ({
  fontFamily: "var(--font-body)",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  border: `2px solid ${theme.palette.text.primary}`,
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
}));
