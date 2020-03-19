import React from "react";
import moment from "moment";

const today = moment.currentDate;
var tuesDay = moment(today)
  .startOf("week")
  .add(2, "days")
  .format("dddd");
var tuesDate = moment(today)
  .startOf("week")
  .add(2, "days")
  .format("MMMM D");

var tues = tuesDay + ", " + tuesDate;

const Tuesday = ({ events }) => {
  var Tuesday = events.reduce(function(filtered, event) {
    if (event.monthDay === tues) {
      var time = event.time;
      var mapObj = {
        am: "a.m.",
        pm: "p.m."
      };
      time = time.replace(/am|pm/gi, function(matched) {
        return mapObj[matched];
      });
      var newDay = {
        nid: event.nid,
        title: event.title,
        day: event.day,
        monthDay: event.monthDay,
        time: time,
        building: event.building,
        roomDetails: event.roomDetails,
        otherLoc: event.otherLoc,
        speaker: event.speaker,
        department: event.department,
        center: event.center,
        series: event.series,
        urlRef: event.urlRef,
        cancelled: event.cancelled
      };
      filtered.push(newDay);
    }
    return filtered;
  }, []);

  if (!Tuesday.length) {
    return (
      <div class="card">
        <div class="card-body">
          <p class="card-text">No events for Tuesday.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {Tuesday.map((event, index) => {
        return (
          <div class="card">
            <h5 class="card-title">
              <a href={event.urlRef}>{event.title}</a>
            </h5>
            <div class="card-body">
              {event.cancelled ? (
                <p class="card-text alert">Cancelled</p>
              ) : null}
              {/* <p class="card-text">{event.monthDay}</p> */}
              <p class="card-text">{event.time}</p>
              {event.roomDetails ? (
                <p class="card-text">
                  <span class="label">Location: </span>
                  {event.building}, {event.roomDetails}
                </p>
              ) : event.building ? (
                <p class="card-text">
                  <span class="label">Location: </span>
                  {event.building}
                </p>
              ) : <p class="card-text">
                  <span class="label">Location: </span>
                  {event.otherLoc}
                </p> ? null : null}
              {event.speaker ? (
                <p class="card-text">
                  <span class="label">Speaker: </span>
                  {event.speaker}
                </p>
              ) : null}
              {event.department ? (
                <p class="card-text">
                  <span class="label">Department: </span>
                  {event.department}
                </p>
              ) : null}
              {event.center ? (
                <p class="card-text">
                  <span class="label">Center: </span>
                  {event.center}
                </p>
              ) : null}
              {event.series ? (
                <p class="card-text">
                  <span class="label">Series: </span>
                  {event.series}
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tuesday;
