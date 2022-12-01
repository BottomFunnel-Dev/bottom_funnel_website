import React from "react";
import "./BackgroundHeading.css";

export const BackgroundHeading = ({ text }) => {
  return (
    <div className="BackgroundHeading-engage-container">
      <span></span>
      <h1>{text}</h1>
    </div>
  );
};
