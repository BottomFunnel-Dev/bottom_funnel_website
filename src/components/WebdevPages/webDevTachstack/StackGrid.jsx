import React from "react";
import "./webDevTechStack.css";
export const StackGrid = ({ gridData }) => {
  console.log("in griod Data", gridData);
  return (
    <div className="stackGrid">
      {gridData.frameworks.map((el, idx) => (
        <div className="stackframeworkCard" key={idx}>
          <div className="stackIcon">
            <img src={el.stackImage} alt={el.alt} />
          </div>
          <h6>{el.stackName}</h6>
        </div>
      ))}
    </div>
  );
};
