import React, { useContext } from "react";
import { ToggleThemeContext } from "../../contexts/ToggleThemeContext";

import { Container } from "./styles";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ToggleThemeContext.Consumer>
        {({ onToggleTheme, selectedTheme }) => (
          <Container>
            <span>JStack's Blog. Todos os direitos reservados.</span>
            <button type="button" onClick={onToggleTheme}>
              {selectedTheme === "dark" ? "🌞" : "🌚"}
            </button>
          </Container>
        )}
      </ToggleThemeContext.Consumer>
    );
  }
}
