import React, { Component } from "react";
import Monday from "./components/monday";
import Tuesday from "./components/tuesday";
import Wednesday from "./components/wednesday";
import Thursday from "./components/thursday";
import Friday from "./components/friday";
import Saturday from "./components/saturday";

class twoWeeks extends Component {
  render() {
    return (
      <div>
        <left>
          <h2>Events in Two Weeks</h2>
        </left>
        <h2>Monday</h2>
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
        <Saturday events={this.state.events} />
      </div>
    );
  }

  state = {
    events: []
  };

  componentDidMount() {
    fetch("https://engineering.princeton.edu/newsletter/two-weeks")
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(events => {
        this.setState({ events: events });
      })
      .catch(console.log);
  }
}

export default twoWeeks;
