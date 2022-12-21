import React from "react";
import "./AlcoholBanner.css";

export const AlcoholBanner = () => {
  return (
    <div className="alcohol-banner-main">
      <div className="alcohol-banner-content">
        <h1>Alcohol Delivery</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          dolores maiores saepe cumque. Quos sequi ullam nostrum impedit vel
          commodi sunt eos, ab laborum culpa praesentium minus obcaecati saepe
          necessitatibus!
        </p>
        <button>GET STARTED</button>
      </div>
      <div className="alcohol-banner-image">
        <img
          src="Images/alcoholPhotos/banner-background.png"
          alt="e-commerce banner image"
        />
        <div className="alcohol-banner-big-mobile">
          <img
            src="Images/alcoholPhotos/banner-big-mobile.png"
            alt="banner big mobile"
          />
        </div>
        <div className="alcohol-banner-small-mobile">
          <img
            src="Images/alcoholPhotos/banner-small-mobile.png"
            alt="banner small mobile"
          />
        </div>
      </div>
    </div>
  );
};
