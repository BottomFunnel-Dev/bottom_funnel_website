import React from "react";
import "./UXReviesBanner.css";

export const UXReviesBanner = () => {
  return (
    <div className="UXReviesBanner-container">
      <div className="UXReviesBanner-content">
        <h1>Mobile app UX Review</h1>
        <p>
          Bottom Funnel is a company that embodies innovation and creativity.
          We're driven by a vision to create cutting-edge products and services
          that exceed expectations. With our team of experts, we craft
          brilliance together and deliver experiences that are ever-evolving.
        </p>
        <button>Book a Free Consultation</button>
      </div>
      <div className="UXReviesBanner-main">
        <img src="Images/UXReviewPhotos/banner.png" alt="Banner mobile image" />
      </div>
    </div>
  );
};
