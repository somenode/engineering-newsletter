import React from "react";

const Monday = ({ events }) => {
  var monday = events.reduce(function(filtered, event) {
    if (event.day === "Mon") {
      var newDay = {
        nid: event.nid,
        title: event.title,
        day: event.day,
        monthDay: event.monthDay,
        time: event.time,
        building: event.building,
        roomDetails: event.roomDetails,
        otherLoc: event.otherLoc,
        speaker: event.speaker,
        department: event.department,
        center: event.center,
        series: event.series,
        urlRef: event.urlRef
      };
      filtered.push(newDay);
    }
    return filtered;
  }, []);

  if (!monday.length) {
    return (
      <div class="card">
        <div class="card-body">
          <p class="card-text">No events for Monday.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h4>{monday.monthDay}</h4>
      {monday.map((event, index) => {
        return (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <a href={event.urlRef}>{event.title}</a>
              </h5>
              <p class="card-text">{event.monthDay}</p>
              <p class="card-text">{event.time}</p>
              {event.building ? (
                <p class="card-text">
                  <strong>Location: </strong>
                  {event.building}, {event.roomDetails}
                </p>
              ) : (
                <p class="card-text">
                  <strong>Location: </strong>
                  {event.otherLoc}
                </p>
              )}
              {event.speaker ? (
                <p class="card-text">
                  <strong>Speaker: </strong>
                  {event.speaker}
                </p>
              ) : null}
              {event.department ? (
                <p class="card-text">
                  <strong>Department: </strong>
                  {event.department}
                </p>
              ) : null}
              {event.center ? (
                <p class="card-text">
                  <strong>Center: </strong>
                  {event.center}
                </p>
              ) : null}
              {event.series ? (
                <p class="card-text">
                  <strong>Series: </strong>
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

export default Monday;
