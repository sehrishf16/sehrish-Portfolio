import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#6366F1",
    },

    secondary: {
      main: "#22C55E",
    },

    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },

    text: {
      primary: "#F8FAFC",
      secondary: "#CBD5E1",
    },
  },

  typography: {
    fontFamily: '"Space Grotesk", sans-serif',

    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
    },

    h2: {
      fontSize: "2.8rem",
      fontWeight: 700,
    },

    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },

    h4: {
      fontSize: "1.6rem",
      fontWeight: 600,
    },

    h5: {
      fontSize: "1.3rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 24px",
          fontWeight: 600,
          transition: "0.3s",

          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
