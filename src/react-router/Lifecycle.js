import React from "react";

class Lifecycle extends React.Component {
  componentWillMount() {
    if (this.props.onMount) {
      this.props.onMount(this);
    }
  }
  render() {
    return null;
  }
}

export default Lifecycle;
