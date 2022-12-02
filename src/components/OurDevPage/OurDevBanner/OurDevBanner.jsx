import React from "react";
import "./OurDevBanner.css";

export const OurDevBanner = () => {
  return (
    <div className="OurDevBanner-container">
      <div className="OurDevBanner-image">
        <img
          src="Images/ourDevPhotos/banner.png"
          alt="Vetting banner human image"
        />
      </div>
      <div className="OurDevBanner-main">
        <h1>
          <span>Bottom Funnel</span> Follows a pursuit for Development the best
          products for web and mobile.
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
