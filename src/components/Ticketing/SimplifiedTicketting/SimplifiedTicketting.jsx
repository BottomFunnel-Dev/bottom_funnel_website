import React from "react";
import "./SimplifiedTicketting.css";

export const SimplifiedTicketting = () => {
  return (
    <div className="simplifiedTicketting-container">
      <hr />
      <div>
        <div className="simplifiedTicketting-content">
          <h1>We've Simplified Ticketing For You!</h1>
          <p>
            Customer Issues from any Channels can be Converted into tickets.This Way none of Your Customers converstion slip through cracks.
          </p>
        </div>
        <div className="simplifiedTicketting-image">
          <img
            src="Images/ticketingPhotos/Tickets-4.png"
            alt="simplifiedTicketting"
          />
        </div>
      </div>
      <hr />
    </div>
  );
};
