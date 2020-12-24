import React from "react";

import { __ReactRouterRedux } from "../react-router";

class Link extends React.Component {
  static contextType = __ReactRouterRedux;
  handleClick = (e) => {
    e.preventDefault();
    const { history } = this.context;
    const { to } = this.props;
    history.push(to);
  };
  render() {
    return <a onClick={(e) => this.handleClick(e)}>{this.props.children}</a>;
  }
}

export default Link;
