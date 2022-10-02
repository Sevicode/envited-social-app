import React from "react";

const EventPage = () => {
  return (
    <div className="EventPageContainer">
      <div>
        <img src="./images/cake.png" alt="Cake image" />
      </div>
      <div>
        <div className="title">
          <h1>Birthday Bash</h1>
          <p>Hosted by Elysia</p>
        </div>
        <div className="calendar">
          <div className="event-icon"><img src="./images/calendar.png" /></div>
          <div>
            <h1>18 August 6:00PM</h1>
            <p>to <b> 19 August 1:00PM </b>UTC+10</p>
          </div>
          <div className="arrow"><img src="./images/arrow.png" /></div>
        </div>
        <div className="address">
          <div className="event-icon"><img src="./images/map.png" /></div>
          <div>
            <h1>Street Name</h1>
            <p>Suburb, State, Postcode</p>
          </div>
          <div className="arrow"><img src="./images/arrow.png" /></div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
