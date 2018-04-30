import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";

class SubpageComponent extends Component {
  render() {
    return (
      <div className="page" style={{ backgroundColor: "orange" }}>
        <h1>Subpage</h1>
        <p>Hello from a sub page!</p>
      </div>
    );
  }
}

export default SubpageComponent;
