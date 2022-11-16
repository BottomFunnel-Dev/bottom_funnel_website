import React from "react";
import "./ClientBanner.css";

export const ClientBanner = () => {
  return (
    <div className="OurClientBanner-main">
      <div className="OurClientBanner-content">
        <h1>Our Client</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas
          veniam delectus iste impedit sed id nisi corrupti
        </p>
        <button>Become Client</button>
      </div>
      <div className="OurClientBanner-image">
        <img
          src="Images/ourclientPhotos/banner.png"
          alt="Our Client page banner"
        />
      </div>
    </div>
  );
};
