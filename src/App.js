import React, { useMemo, useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes";
import {
  ToggleThemeContext,
  ToggleThemeProvider,
} from "./contexts/ToggleThemeContext";

function AppContent() {
  const { selectedTheme } = useContext(ToggleThemeContext);

  const currentTheme = useMemo(() => {
    return themes[selectedTheme] || themes.dark;
  }, [selectedTheme]);
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

function App() {
  return (
    <ToggleThemeProvider>
      <AppContent />
    </ToggleThemeProvider>
  );
}

export default App;
