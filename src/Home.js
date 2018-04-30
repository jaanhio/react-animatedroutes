import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";

class HomeComponent extends Component {
  handleClick = () => {
    this.props.history.push("/subpage");
  };

  render() {
    return (
      <div className="page" style={{ backgroundColor: "pink" }}>
        <h1>Home</h1>
        <p>Hello from home page</p>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default HomeComponent;
