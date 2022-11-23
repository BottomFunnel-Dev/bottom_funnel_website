import React from "react";
import "./ContactUSBanner.css";

export const ContactUSBanner = () => {
  return (
    <div className="ContactUSBanner-main">
      <div className="ContactUsBanner-image">
        <img src="Images/ContactUS/banner.png" alt="Contact us banner" />
      </div>
      <div className="ContactUsBanner-Content">
        <h1>
          Share Your Details, Get In Touch Here at <span className="ContactUsBanner-animated-title">Bottom Funnel</span>
        </h1>
        <div></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus
          error sed iure voluptatem omnis.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          optio, sunt sapiente error.
        </p>
        {/* <button>Get Started</button> */}
      </div>
    </div>
  );
};
