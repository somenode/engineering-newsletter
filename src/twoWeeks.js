import React, { Component } from "react";
import Monday from "./components/monday";
import Tuesday from "./components/tuesday";
import Wednesday from "./components/wednesday";
import Thursday from "./components/thursday";
import Friday from "./components/friday";
import Saturday from "./components/saturday";
import moment from "moment";
import GridLoader from "react-spinners/GridLoader";

class twoWeeks extends Component {
  state = {
    events: [],
    loading: true
  };

  componentDidMount() {
    fetch("https://engineering.princeton.edu/newsletter/two-weeks")
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(events => {
        this.setState({ events: events, loading: false });
      })
      .catch(console.log);
  }
  render() {
    const today = this.state.currentDate;
    //Monday
    var monDay = moment(today)
      .startOf("week")
      .add(15, "days")
      .format("dddd");
    var monDate = moment(today)
      .startOf("week")
      .add(15, "days")
      .format("MMMM D");

    //Tuesday
    var tuesDay = moment(today)
      .startOf("week")
      .add(16, "days")
      .format("dddd");
    var tuesDate = moment(today)
      .startOf("week")
      .add(16, "days")
      .format("MMMM D");

    //Wednesday
    var wedDay = moment(today)
      .startOf("week")
      .add(17, "days")
      .format("dddd");
    var wedDate = moment(today)
      .startOf("week")
      .add(17, "days")
      .format("MMMM D");

    //Thursday
    var thursDay = moment(today)
      .startOf("week")
      .add(18, "days")
      .format("dddd");
    var thursDate = moment(today)
      .startOf("week")
      .add(18, "days")
      .format("MMMM D");

    //Friday
    var friDay = moment(today)
      .startOf("week")
      .add(19, "days")
      .format("dddd");
    var friDate = moment(today)
      .startOf("week")
      .add(19, "days")
      .format("MMMM D");

    //Saturday
    var satDay = moment(today)
      .startOf("week")
      .add(20, "days")
      .format("dddd");
    var satDate = moment(today)
      .startOf("week")
      .add(20, "days")
      .format("MMMM D");

    if (this.state.loading) {
      return (
        <center>
          <div className="sweet-loading">
            <GridLoader
              // css={override}
              size={"15px"}
              //size={"150px"} this also works
              color={"#EE4266"}
              loading={this.state.loading}
            />
          </div>
        </center>
      );
    } else {
      return (
        <div>
          <left>
            <h2>Events in Two Weeks</h2>
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
  }
}

export default twoWeeks;
