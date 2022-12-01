import React from "react";
import "./EngagementBanner.css";

export const EngagementBanner = () => {
  return (
    <div className="EngagementBanner-container">
      <div className="EngagementBanner-image">
        <img
          src="Images/engagementPhotos/banner.png"
          alt="Engagement models banner human image"
        />
      </div>
      <div className="EngagementBanner-main">
        <h1>
          <span>Bottom Funnel</span> Ensures Flexible Engagement Models to Cater
          your Needs.
        </h1>
        <hr />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          illo sequi ad corporis commodi libero rem, perspiciatis molestiae vero
          odit voluptatum ea ipsam officia sint eum dolorum dolor asperiores
          reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Doloremque illo sequi ad corporis commodi libero rem, perspiciatis
          molestiae vero odit voluptatum ea ipsam officia sint eum dolorum dolor
          asperiores reiciendis.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};
