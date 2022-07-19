import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useStateLocal } from "../hooks/useStateLocal";

export const ToggleThemeContext = createContext({
  selectedTheme: "dark",
  onToggleTheme: () => {},
});

export function ToggleThemeProvider({ children }) {
  const [theme, setTheme] = useStateLocal("theme");

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  return (
    <ToggleThemeContext.Provider
      value={{ selectedTheme: theme, onToggleTheme: handleToggleTheme }}
    >
      {children}
    </ToggleThemeContext.Provider>
  );
}

ToggleThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
