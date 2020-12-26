import React from "react";

import ReactRouterContext from "./ReactRouterContext";

import mathPath from "./matchPath";

class Route extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { path, children, component, render, exact, computedMatch } = this.props;
    return (
      <ReactRouterContext.Consumer>
        {(contextValue) => {
          const { location, history } = contextValue;
          const match = computedMatch ? computedMatch : mathPath(location.pathname, { exact, path });
          const routeProps = { location, history };
          if (match) {
            routeProps.match = match;
            if (children) {
              return children(routeProps);
            } else if (component) {
              return React.createElement(component, routeProps);
            } else if (render) {
              return render(routeProps);
            }
          } else {
            if (children) {
              return children(routeProps);
            }
            return null;
          }
        }}
      </ReactRouterContext.Consumer>
    );
  }
}

export default Route;
