import React from "react";
import "./EcommerceComBanner.css";

export const EcommerceComBanner = () => {
  return (
    <div className="e-commerce-banner-main">
      <div className="e-commerce-banner-content">
        <h1>E-commerce App Devemopment Company</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          dolores maiores saepe cumque. Quos sequi ullam nostrum impedit vel
          commodi sunt eos, ab laborum culpa praesentium minus obcaecati saepe
          necessitatibus!
        </p>
        <button>GET STARTED</button>
      </div>
      <div className="e-commerce-banner-image">
        <img
          src="Images/EcommercePhotos/banner.png"
          alt="e-commerce banner image"
        />
      </div>
    </div>
  );
};
