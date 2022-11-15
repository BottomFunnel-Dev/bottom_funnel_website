import React from "react";
import "./AboutusBanner.css";

export const AboutusBanner = () => {
  return (
    <div className="about-us-Banner">
      <div className="about-us-banner-content">
        <h1>about us</h1>
        <p>
          Bottom Funnel is a leading IT service company which specializes in
          digitizing your business by developing cross-platform Apps, Web,
          Blockchain and digital marketing solutions with enhanced UX/UI
          designs.
        </p>
        <div>
          <div>
            <p>3+ year</p>
            <p>25+ domains</p>
          </div>
          <span></span>
          <div>
            <p>250+ clients</p>
            <p>20+ countries</p>
          </div>
          <span></span>
          <div>
            <p>1 billions</p>
            <p>Impacted by design</p>
          </div>
        </div>
      </div>
      <div className="about-us-banner-image">
        <img src="/Images/aboutusImage/banner.png" alt="About us banner" />
      </div>
    </div>
  );
};
