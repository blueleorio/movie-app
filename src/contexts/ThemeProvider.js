import React, { createContext, useState } from "react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

import lightTheme from "@mui/material/styles/createTheme";

const DARK_PRIMARY = {
  lighter: "#4A5568",
  light: "#3E4656",
  main: "#303645",
  dark: "#21252E",
  darker: "#15171E",
  contrastText: "#FFF",
};
const DARK_SECONDARY = {
  lighter: "#546E7A",
  light: "#455A64",
  main: "#37474F",
  dark: "#263238",
  darker: "#1C2529",
  contrastText: "#FFF",
};
const DARK_SUCCESS = {
  lighter: "#536E7A",
  light: "#455A64",
  main: "#389E34",
  dark: "#2D7D2D",
  darker: "#1E5725",
  contrastText: "#FFF",
};

const DARK_THEME_OPTIONS = {
  palette: {
    mode: "dark", // Set the overall theme mode to dark
    primary: DARK_PRIMARY,
    secondary: DARK_SECONDARY,
    success: DARK_SUCCESS,
    background: {
      default: "#121212", // Set a dark background color
    },
  },
  typography: {
    fontFamily: ["'Roboto', sans-serif"], // Adjust font for better readability
  },
  shape: { borderRadius: 8 }, // Keep rounded corners for consistency
};

const DARK_THEME = createTheme(DARK_THEME_OPTIONS);
const LIGHT_THEME = createTheme(lightTheme);

export const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Initial theme

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
