import React from "react";

const Friday = ({ events }) => {
  var Friday = events.reduce(function(filtered, event) {
    if (event.day === "Fri") {
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

  if (!Friday.length) {
    return (
      <div class="card">
        <div class="card-body">
          <p class="card-text">No events for Friday.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {Friday.map((event, index) => {
        return (
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">
                <a href={event.urlRef}>{event.title}</a>
              </h3>
              <p class="card-text">{event.monthDay}</p>
              <p class="card-text">{event.time}</p>
              {event.building ? (
                <p class="card-text">
                  <span class="label">Location: </span>
                  {event.building}, {event.roomDetails}
                </p>
              ) : (
                <p class="card-text">
                  <span class="label">Location: </span>
                  {event.otherLoc}
                </p>
              )}
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

export default Friday;
