import React from "react";
import "./ClientBanner.css";

export const ClientBanner = () => {
  return (
    <div className="OurClientBanner-main">
      <div className="OurClientBanner-content">
        <h1>Our Client</h1>
        <p>Our Client related 2 or 3 line</p>
      </div>
      <div className="OurClientBanner-image">
        <img
          src="Images/ourclientPhotos/banner.png"
          alt="Our Client page banner"
        />
      </div>
    </div>
  );
};
