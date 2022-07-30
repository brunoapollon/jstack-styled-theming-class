import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description } = this.props;
    return (
      <Container>
        <h2>{title}</h2>
        <small>{description}</small>
      </Container>
    );
  }
}

Post.PropsTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
