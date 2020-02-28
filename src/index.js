import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thisWeek from "./thisWeek";
import nextWeek from "./nextWeek";
import twoWeeks from "./twoWeeks";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const routing = (
  <Router>
    <Route path="/" component={App} />
    <Route path="/this-week" component={thisWeek} />
    <Route path="/next-week" component={nextWeek} />
    <Route path="/two-weeks" component={twoWeeks} />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
