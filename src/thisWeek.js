import React, { Component } from "react";
import Monday from "./components/monday";
import Tuesday from "./components/tuesday";
import Wednesday from "./components/wednesday";
import Thursday from "./components/thursday";
import Friday from "./components/friday";
import Saturday from "./components/saturday";
import moment from "moment";

class thisWeek extends React.Component {
  render() {
    const today = this.state.currentDate;

    //Monday
    var monDay = moment(today)
      .startOf("week")
      .add(1, "days")
      .format("dddd");
    var monDate = moment(today)
      .startOf("week")
      .add(1, "days")
      .format("MMMM D");
    //Tuesday
    var tuesDay = moment(today)
      .startOf("week")
      .add(2, "days")
      .format("dddd");
    var tuesDate = moment(today)
      .startOf("week")
      .add(2, "days")
      .format("MMMM D");
    //Wednesday
    var wedDay = moment(today)
      .startOf("week")
      .add(3, "days")
      .format("dddd");
    var wedDate = moment(today)
      .startOf("week")
      .add(3, "days")
      .format("MMMM D");
    //Thursday
    var thursDay = moment(today)
      .startOf("week")
      .add(4, "days")
      .format("dddd");
    var thursDate = moment(today)
      .startOf("week")
      .add(4, "days")
      .format("MMMM D");
    //Friday
    var friDay = moment(today)
      .startOf("week")
      .add(5, "days")
      .format("dddd");
    var friDate = moment(today)
      .startOf("week")
      .add(5, "days")
      .format("MMMM D");
    //Saturday
    var satDay = moment(today)
      .startOf("week")
      .add(6, "days")
      .format("dddd");
    var satDate = moment(today)
      .startOf("week")
      .add(6, "days")
      .format("MMMM D");

    // console.log(monDay);

    return (
      <div>
        <left>
          <h2>This Week's Events</h2>
        </left>
        <h3>
          {monDay}, {monDate}
        </h3>
        <Monday events={this.state.events} />
        <h3>
          {tuesDay}, {tuesDate}
        </h3>
        <Tuesday events={this.state.events} />
        <h3>
          {wedDay}, {wedDate}
        </h3>
        <Wednesday events={this.state.events} />
        <h3>
          {thursDay}, {thursDate}
        </h3>
        <Thursday events={this.state.events} />
        <h3>
          {friDay}, {friDate}
        </h3>
        <Friday events={this.state.events} />
        <h3>
          {satDay}, {satDate}
        </h3>
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
