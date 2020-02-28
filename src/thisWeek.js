import React, { Component } from "react";
import Monday from "./components/monday";
import Tuesday from "./components/tuesday";
import Wednesday from "./components/wednesday";
import Thursday from "./components/thursday";
import Friday from "./components/friday";
import Saturday from "./components/saturday";

class thisWeek extends React.Component {
  render() {
    return (
      <div>
        <left>
          <h2>This Week's Events</h2>
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
    fetch("https://engineering.princeton.edu/newsletter/this-week")
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
export default thisWeek;
