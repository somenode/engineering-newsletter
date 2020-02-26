import React from "react";

const Thursday = ({ events }) => {
  var Thursday = events.reduce(function(filtered, event) {
    if (event.day === "Thu") {
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

  if (!Thursday.length) {
    return (
      <div class="card">
        <div class="card-body">
          <p class="card-text">No events for Thursday.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {Thursday.map((event, index) => {
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

export default Thursday;
