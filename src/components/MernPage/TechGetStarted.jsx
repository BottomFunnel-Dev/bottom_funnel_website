import React from "react";
import "./techGetStarted.css";
export const TechGetStarted = ({ calltoAction }) => {
  return (
    <div
      className="techgetstarted"
      style={{
        background: `url(${calltoAction.background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      <div>
      <p>{calltoAction.description}</p>
      <button>{calltoAction.buttonText}</button>
      </div>
    </div>
  );
};
