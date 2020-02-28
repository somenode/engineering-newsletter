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
        {/* <h2>Monday</h2>
        <Monday events={this.state.events} />
        <h2>Tuesday</h2>
        <Tuesday events={this.state.events} />
        <h2>Wednesday</h2>
        <Wednesday events={this.state.events} />
        <h2>Thursday</h2>
        <Thursday events={this.state.events} />
        <h2>Friday</h2>
        <Friday events={this.state.events} />
        <h2>Saturday</h2>
        <Saturday events={this.state.events} /> */}
      </div>
    );
  }

  // state = {
  //   events: []
  // };

  // componentDidMount() {
  //   fetch("https://engineering.princeton.edu/newsletter/this-week")
  //     .then(res => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then(events => {
  //       this.setState({ events: events });
  //     })
  //     .catch(console.log);
  // }
}
export default App;
