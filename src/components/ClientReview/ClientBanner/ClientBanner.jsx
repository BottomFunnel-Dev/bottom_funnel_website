import React from "react";
import "./ClientBanner.css";

export const ClientBanner = () => {
  return (
    <div className="ClientBanner-main">
      <div className="ClientBanner-content">
        <h1>Client Review</h1>
        <p>
          Constant development is the law of life, and a man who always tries to
          maintain his dogmas in order to appear consistent drives himself into
          a false position.
        </p>
      </div>
      <div className="ClientBanner-image">
        <img
          src="Images/clientrPhotos/banner.jpg"
          alt="Client Review page banner side image"
        />
      </div>
    </div>
  );
};
