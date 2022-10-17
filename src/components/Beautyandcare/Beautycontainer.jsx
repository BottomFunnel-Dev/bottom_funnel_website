import React from "react";
import "./Beautycontainer.css";

export default function Beautycontainer() {
  return (
    <div className="beautycontainer">
      <div className="beautyleft">
        <h1 className="heading">Beauty And Salon App Development Solutions</h1>
        <p>
          Beautify Your Business with An App! Enhance your salon's customer
          experience with our cutting-edge beauty & salon app development.
        </p>
        <button> Get Started</button>
      </div>
      <div className="mobile">
        <img  src="Images/beautycare/beautymobile.png" />
      </div>
    </div>
  );
}
