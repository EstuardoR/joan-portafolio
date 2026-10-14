import { createTheme } from "@mui/material/styles";

// Paleta: base oscura tipo Letterboxd + acento verde de marca,
// con un segundo acento dorado (Balatro) para detalles puntuales.
// Tipografía: Silkscreen (pixel) para UI corta, Bricolage Grotesque
// (display) para títulos grandes, IBM Plex Sans (body) para lectura.
export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#14181C",
      paper: "#1C2227",
    },
    text: {
      primary: "#F2F2ED",
      secondary: "#8A98A3",
    },
    primary: {
      main: "#00E054",
      contrastText: "#0B0E10",
    },
    secondary: {
      main: "#FFB000",
      contrastText: "#0B0E10",
    },
  },
  shape: {
    borderRadius: 2,
  },
  typography: {
    fontFamily: "var(--font-body)",
    h1: { fontFamily: "var(--font-display)", fontWeight: 800 },
    h2: { fontFamily: "var(--font-display)", fontWeight: 700 },
    h3: { fontFamily: "var(--font-display)", fontWeight: 700 },
    h4: { fontFamily: "var(--font-display)", fontWeight: 700 },
    h5: { fontFamily: "var(--font-display)", fontWeight: 700},
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "var(--font-pixel)",
          fontSize: "0.8rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          boxShadow: "none",
          padding: "10px 20px",
        },
        contained: ({ theme }) => ({
          border: `2px solid ${theme.palette.common.black}`,
          boxShadow: `4px 4px 0 0 ${theme.palette.common.black}`,
          "&:hover": {
            boxShadow: `2px 2px 0 0 ${theme.palette.common.black}`,
            transform: "translate(2px, 2px)",
          },
        }),
        outlined: ({ theme }) => ({
          borderWidth: 2,
          borderColor: theme.palette.text.primary,
          boxShadow: `4px 4px 0 0 ${theme.palette.primary.main}`,
          "&:hover": {
            borderWidth: 2,
            boxShadow: `2px 2px 0 0 ${theme.palette.primary.main}`,
            transform: "translate(2px, 2px)",
          },
          "&.Mui-disabled": {
            borderWidth: 2,
            borderColor: theme.palette.text.secondary,
            color: theme.palette.text.secondary,
            boxShadow: "none",
            opacity: 0.6,
          },
        }),
      },
    },
  },
});
