import React, { useContext } from "react";
import { ToggleThemeContext } from "../../contexts/ToggleThemeContext";

import { Container } from "./styles";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ToggleThemeContext.Consumer>
        {({ onToggleTheme, selectedTheme }) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button type="button" onClick={onToggleTheme}>
              {selectedTheme === "dark" ? "🌞" : "🌚"}
            </button>
          </Container>
        )}
      </ToggleThemeContext.Consumer>
    );
  }
}
