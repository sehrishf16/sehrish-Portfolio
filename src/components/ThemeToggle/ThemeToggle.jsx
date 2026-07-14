import { useContext } from "react";

import IconButton from "@mui/material/IconButton";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { ColorModeContext } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { mode, colorMode } = useContext(ColorModeContext);

  return (
    <IconButton
      color="inherit"
      onClick={colorMode.toggleColorMode}
    >
      {mode === "dark" ? (
        <LightModeIcon />
      ) : (
        <DarkModeIcon />
      )}
    </IconButton>
  );
}