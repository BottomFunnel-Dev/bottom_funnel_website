import React from "react";
import "./ondemandHero.css";
const OndemandHero = () => {
  return (
    <div className="ondemandHero">
      <div className="textcontainer">
        <div>
          <h1>Home Services App Solutions</h1>
          <p>
            Provide services to your customers at the comfort of their home with
            an app! Boost efficiency and drive more business with our
            industry-leading on demand home services app development services.
          </p>
          <button>Get Started </button>
        </div>
      </div>
      <div className="imageContainer">
        <img src="Images/ondemandHome/mobileimage.png" alt="" />
      </div>
    </div>
  );
};

export default OndemandHero;
