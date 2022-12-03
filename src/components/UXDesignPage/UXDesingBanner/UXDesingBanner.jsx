import React from "react";
import "./UXDesingBanner.css";

export const UXDesingBanner = () => {
  return (
    <div className="UXDesingBanner-container">
      <div className="UXDesingBanner-content">
        <h1>User Experience Design</h1>
        <p>
          Bottom Funnel is a tried and tested company that has been around for
          quite some time. They have delivered countless products, services and
          solutions to multiple businesses worldwide. With their expertise, they
          are able to come up with the best solution possible for every client.
        </p>
        <button>Book a Free Consultation</button>
      </div>
      <div className="UXDesingBanner-main">
        <img src="Images/UXDesignPhotos/banner.png" alt="Banner mobile image" />
        <img src="Images/UXDesignPhotos/design-key.png" alt="design-key.png" />
        <img src="Images/UXDesignPhotos/ps.png" alt="PS.png" />
        <img src="Images/UXDesignPhotos/ux.png" alt="ux.png" />
        <img src="Images/UXDesignPhotos/research.png" alt="research.png" />
      </div>
    </div>
  );
};
