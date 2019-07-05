import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return <div>VALUE: VALUE</div>;
  }
}

Counter = connect(mapStateToProps)(Counter);

export default Counter;
