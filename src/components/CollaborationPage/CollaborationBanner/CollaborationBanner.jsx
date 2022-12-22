import React from "react";
import "./CollaborationBanner.css";

export const CollaborationBanner = () => {
  return (
    <div className="CollaborationBanner-container">
      <div className="CollaborationBanner-image">
        <img src="Images/collaborationPhotos/banner.gif" alt="banner.webp" />
      </div>
      <div className="CollaborationBanner-content">
        <h1>
          It takes a team to deliver great <span>Customer Support</span>
        </h1>
        <hr />
        <p>
          We help you work together with team members from across the company to
          provide quick and consistent answers to your customers.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};
