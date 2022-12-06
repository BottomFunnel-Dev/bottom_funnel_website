import React from "react";
import "./UXReviesBanner.css";

export const UXReviesBanner = () => {
  return (
    <div className="UXReviesBanner-container">
      <div className="UXReviesBanner-content">
        <h1>Mobile app UX Review</h1>
        <p>
          Helping Businesses tackle usability and user experience challenges and
          craft better solutions.
        </p>
        <button>Book a Free Consultation</button>
      </div>
      <div className="UXReviesBanner-main">
        <img src="Images/UXReviewPhotos/banner.png" alt="Banner mobile image" />
      </div>
    </div>
  );
};
