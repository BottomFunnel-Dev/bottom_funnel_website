import React from "react";
import "./CareerBanner.css";

export const CareerBanner = () => {
  return (
    <div className="Career-banner-main">
      <div className="Career-banner-content">
        <h1>Career</h1>
        <p>
          Welcome to Bottom Funnel, the world's leading app development company
          for fintech and startup companies. We pride ourselves on delivering
          unparalleled value to our partners, through our experience and
          expertise in the field.
        </p>
      </div>
      <div className="Career-Banner-image">
        <img src="Images/careerPhotos/banner.png" alt="Career banner" />
      </div>
    </div>
  );
};
