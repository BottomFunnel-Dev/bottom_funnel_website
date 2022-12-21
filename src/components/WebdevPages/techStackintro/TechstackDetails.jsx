import React from "react";
import "./techStackintro.css";
export const TechstackDetails = ({ stackDetails }) => {
  return (
    <div className="asp-stack-about">
      <div className="tech-content-div">

        <div className="stack-image">
          <img src={techContent.aspstack[stack].stackIcon} alt="aspstack.png" />
        </div>

        <div className="stack-introduction">
          <p>{techContent.aspstack[stack].description}</p>
        </div>

      </div>
    </div>
  );
};
