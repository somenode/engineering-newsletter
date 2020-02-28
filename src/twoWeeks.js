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
        <h3>Monday</h3>
        <Monday events={this.state.events} />
        <h3>Tuesday</h3>
        <Tuesday events={this.state.events} />
        <h3>Wednesday</h3>
        <Wednesday events={this.state.events} />
        <h3>Thursday</h3>
        <Thursday events={this.state.events} />
        <h3>Friday</h3>
        <Friday events={this.state.events} />
        <h3>Saturday</h3>
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
