import React from "react";

import ReactRouterContext from "./ReactRouterContext";
import matchPath from "./matchPath";

class Switch extends React.Component {
  static contextType = ReactRouterContext;
  render() {
    const { location } = this.context;
    let match = null;
    for (let child of this.props.children) {
      match = matchPath(location.pathname, {
        exact: child.props.exact,
        path: child.props.path,
      });
      if (match) {
        return React.cloneElement(child, { ...child.props, computedMatch: match });
      }
    }

    return null;
  }
}

export default Switch;
