import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ColorModeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,

          primary: {
            main: "#6366F1",
          },

          secondary: {
            main: "#22C55E",
          },

          background: {
            default: mode === "dark" ? "#0F172A" : "#F8FAFC",
            paper: mode === "dark" ? "#1E293B" : "#FFFFFF",
          },
        },

        typography: {
          fontFamily: "Poppins",
        },

        shape: {
          borderRadius: 12,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider
      value={{
        mode,
        colorMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}