import React from "react";
import "./BIPartner.css";

export const BIPartner = () => {
  return (
    <div className="BIPartner-container">
      <h1>
        <span>Business Intelligence</span> Services We Offer
      </h1>
      <div className="BIPartner-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is your one-stop shop for all things data, from Business
        Intelligence to Analytics & Big Data. With our expert team of
        professionals, you can be sure that you have everything you need to make
        informed decisions that will help your organization thrive long into the
        future.
      </p>
      <div className="BIPartner-image">
        <img
          src="Images/BIPhotos/partner.png"
          alt="Lifecycle and tech stacks"
        />
      </div>
    </div>
  );
};
