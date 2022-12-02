import React from "react";
import "./AboutusBanner.css";

export const AboutusBanner = () => {
  return (
    <div className="about-us-Banner">
      <div className="about-us-banner-image">
        <img src="/Images/aboutusImage/banner.png" alt="About us banner" />
      </div>
      <div className="about-us-banner-content">
        <h1>
          Build Your Brands presence With{" "}
          <span className="about-us-animated-title">BOTTOM FUNNEL</span>
        </h1>
        <hr />
        <p>
          We are driven by the need to change and innovate. We help businesses
          and individuals in adapting as well as adopting digital
          transformation. Our aim is to change people's lives and improve
          businesses with our progressive and innovative technology solutions.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};
