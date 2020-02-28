import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <center>
          <h1>
            <a href="/">Engineering Newsletter</a>
          </h1>
          <navbar>
            <ul>
              <li>
                <NavLink to="/this-week">This Week</NavLink>
              </li>
              <li>
                <NavLink to="/next-week">Next Week</NavLink>
              </li>
              <li>
                <NavLink to="/two-weeks">Two Weeks from Now</NavLink>
              </li>
            </ul>
          </navbar>
        </center>
      </div>
    );
  }
}
export default App;
