import React from "react";
import "./VettingBanner.css";

export const VettingBanner = () => {
  return (
    <div className="VettingBanner-container">
      <div className="VettingBanner-image">
        <img
          src="Images/VettingPhotos/banner.png"
          alt="Vetting banner human image"
        />
      </div>
      <div className="VettingBanner-main">
        <h1>
          <span>Bottom Funnel</span> talent network is India's largest network
          of top professionals.
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
