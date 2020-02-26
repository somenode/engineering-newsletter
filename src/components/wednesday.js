import React from "react";

const Wednesday = ({ events }) => {
  var Wednesday = events.reduce(function(filtered, event) {
    if (event.day === "Wed") {
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
        urlRef: event.urlRef
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
              <h5 class="card-title">{event.title}</h5>
              <p class="card-text">{event.monthDay}</p>
              <p class="card-text">{event.time}</p>
              <p class="card-text">{event.building}</p>
              <p class="card-text">{event.roomDetails}</p>
              <p class="card-text">{event.otherLoc}</p>
              <p class="card-text">{event.speaker}</p>
              <p class="card-text">{event.department}</p>
              <p class="card-text">{event.center}</p>
              <p class="card-text">
                <a href="{event.urlRef}">{event.urlRef}</a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Wednesday;
