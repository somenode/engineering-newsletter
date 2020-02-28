import React, { Component } from "react";

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
                <a href="/this-week">This Week's Events </a>
              </li>
              <li>
                <a href="/next-week">Next Week's Events</a>
              </li>
              <li>
                <a href="/two-weeks">Events Two Weeks From Now </a>
              </li>
            </ul>
          </navbar>
        </center>
      </div>
    );
  }
}
export default App;
