import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Home from "./Home";
import Subpage from "./Subpage";
import PageShell from "./PageShell";

class App extends Component {
  render() {
    const firstChild = props => {
      const childrenArray = React.Children.toArray(props.children);
      return childrenArray[0] || null;
    };

    return (
      <div className="App">
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/subpage">Subpage</Link>
        </div>
        <Route path="/" exact component={PageShell(Home)} />
        <Route path="/subpage" exact component={PageShell(Subpage)} />
      </div>
    );
  }
}

export default App;
