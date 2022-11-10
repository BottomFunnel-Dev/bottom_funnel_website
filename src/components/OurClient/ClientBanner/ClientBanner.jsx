import React from "react";
import "./ClientBanner.css";

export const ClientBanner = () => {
  return (
    <div className="OurClientBanner-main">
      <div className="OurClientBanner-content">
        <h1>Our Client</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse quidem, sunt, explicabo unde debitis est modi minima neque sit nihil saepe nesciunt officiis ut nam? Dicta esse quia exercitationem illum at rerum pariatur iure nesciunt quas dolore. Quae error nulla aperiam cum nisi, blanditiis dolor numquam perspiciatis laborum accusamus!</p>
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
