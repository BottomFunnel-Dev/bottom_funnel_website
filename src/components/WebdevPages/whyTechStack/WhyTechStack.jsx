import React from "react";
import "./whytechstack.css";
export const WhyTechStack = ({ techData }) => {
  return (
    <div className="whytechData">
      <div className="techHeader">
        <h1>
          Why <span>{techData.heading}</span> for Web Development{" "}
        </h1>
        <p>{techData.desc}</p>
      </div>

      <div className="whyTechFeaturesCard">
        {techData.cardData.map((item, index) => (
          <div
            className="whyTechFeaturesCard-box"
            key={index}
            style={index % 2 === 1 ? { background: "#e9deca" } : {}}
          >
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
