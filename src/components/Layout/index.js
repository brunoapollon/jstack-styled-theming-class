import React from "react";
import { useTheme } from "styled-components";

import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }
}
