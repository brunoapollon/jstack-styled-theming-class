import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ToggleThemeContext = createContext({
  selectedTheme: "dark",
  onToggleTheme: () => {},
});

export class ToggleThemeProvider extends React.Component {
  state = {
    theme: localStorage.getItem("theme") || "dark",
  };
  handleToggleTheme = () => {
    this.setState(
      (prevState) => ({ theme: prevState.theme === "dark" ? "light" : "dark" }),
      () => {
        localStorage.setItem("theme", this.state.theme);
      }
    );
  };

  render() {
    return (
      <ToggleThemeContext.Provider
        value={{
          selectedTheme: this.state.theme,
          onToggleTheme: this.handleToggleTheme,
        }}
      >
        {this.props.children}
      </ToggleThemeContext.Provider>
    );
  }
}

ToggleThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
