import React from "react";
import "./TicketingBanner.css";

export const TicketingBanner = () => {
  return (
    <div className="ticketingBanner-container">
      <div className="ticketingBanner-image">
        <img src="Images/ticketingPhotos/ticketing-animation.gif" alt="banner.webp" />
      </div>
      <div className="ticketingBanner-content">
        <h1>
          Use the power of <span>Collaborative Ticketing</span> and AI to deliver the best customer experience
        </h1>
        <hr />
        <p>
          Prioritize, categories and assign tickets to right agents and leverage the power of your entire organization to deliver customer delight
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};
