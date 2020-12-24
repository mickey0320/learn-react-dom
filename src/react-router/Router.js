import React from "react";
import ReactRouterContext from "./ReactRouterContext";

class Router extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location,
    };
    this.unsubscribe = props.history.listen((location) => {
      this.setState({ location });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const value = {
      history: this.props.history,
      location: this.state.location,
    };
    return <ReactRouterContext.Provider value={value}>{this.props.children}</ReactRouterContext.Provider>;
  }
}

export default Router;
