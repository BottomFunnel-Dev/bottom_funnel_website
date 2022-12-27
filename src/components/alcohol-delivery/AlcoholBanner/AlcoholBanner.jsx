import React from "react";
import "./AlcoholBanner.css";

export const AlcoholBanner = () => {
  return (
    <div className="alcohol-banner-main">
      <div className="alcohol-banner-content">
        <h1>Alcohol Delivery</h1>
        <p>
        There's no need to run out and purchase alcohol anymore! With alcohol delivery services, you can have all the wine, beer, and liquor your heart desires delivered right to your door.
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
