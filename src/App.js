import React, { useMemo, useContext, Component } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes";
import {
  ToggleThemeContext,
  ToggleThemeProvider,
} from "./contexts/ToggleThemeContext";

class App extends Component {
  render() {
    return (
      <ToggleThemeProvider>
        <ToggleThemeContext.Consumer>
          {({ selectedTheme }) => (
            <ThemeProvider theme={themes[selectedTheme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </ThemeProvider>
          )}
        </ToggleThemeContext.Consumer>
      </ToggleThemeProvider>
    );
  }
}

export default App;
