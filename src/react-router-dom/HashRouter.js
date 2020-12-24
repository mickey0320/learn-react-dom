import React from "react";
import { createHashHistory } from "history";

import { Router } from "../react-router";

class HashRouter extends React.Component {
  history = createHashHistory();
  constructor(props) {
    super(props);
  }
  render() {
    return <Router history={this.history}>{this.props.children}</Router>;
  }
}

export default HashRouter;
