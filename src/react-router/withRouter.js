import React from "react";

import ReactRouterContext from "./ReactRouterContext";

function withRouter(OldComponent) {
  return function (props) {
    <ReactRouterContext.Consumer>
      {(contextValue) => {
        return <OldComponent {...props} {...contextValue} />;
      }}
    </ReactRouterContext.Consumer>;
  };
}

export default withRouter;
