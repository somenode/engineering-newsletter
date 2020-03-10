import React from "react";
import moment from "moment";

const today = moment.currentDate;
var wedDay = moment(today)
  .startOf("week")
  .add(3, "days")
  .format("dddd");
var wedDate = moment(today)
  .startOf("week")
  .add(3, "days")
  .format("MMMM D");

var wed = wedDay + ", " + wedDate;

const Wednesday = ({ events }) => {
  var Wednesday = events.reduce(function(filtered, event) {
    if (event.monthDay === wed) {
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

  if (!Wednesday.length) {
    return (
      <div class="card">
        <div class="card-body">
          <p class="card-text">No events for Wednesday.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {Wednesday.map((event, index) => {
        return (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <a href={event.urlRef}>{event.title}</a>
              </h5>
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

export default Wednesday;
