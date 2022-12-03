import React from "react";
import "./UIDesingBanner.css";

export const UIDesingBanner = () => {
  return (
    <div className="UIDesingBanner-container">
      <div className="UIDesingBanner-content">
        <h1>User Interface Design</h1>
        <p>
          Bottom Funnel is a startup company that helps startups and business
          build their brand visually. We have built an interface that renders a
          visually-stimulating experience to the end users, so you can create
          the best possible user experience for your customers.
        </p>
        <button>Book a Free Consultation</button>
      </div>
      <div className="UIDesingBanner-main">
        <img src="Images/UIDesignPhotos/banner.png" alt="Banner mobile image" />
        <img
          src="Images/UIDesignPhotos/background.png"
          alt="Banner background cloud"
        />
      </div>
    </div>
  );
};
