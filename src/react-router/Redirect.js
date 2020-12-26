import React from "react";

import ReactRouterContext from "./ReactRouterContext";
import Lifecycle from "./Lifecycle";

function Redirect(props) {
  const { to } = props;
  return <ReactRouterContext.Consumer>{(contextValue) => <Lifecycle onMount={() => contextValue.history.push(to)} />}</ReactRouterContext.Consumer>;
}

export default Redirect;
