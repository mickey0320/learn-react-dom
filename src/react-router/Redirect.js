import React from "react";

import ReactRouterContext from "./ReactRouterContext";

class Redirect extends React.Component {
  static contextType = ReactRouterContext;
  componentWillMount() {
    const { history } = this.context;
    const { to } = this.props;
    history.push(to);
  }
  render() {
    return null;
  }
}

export default Redirect;
