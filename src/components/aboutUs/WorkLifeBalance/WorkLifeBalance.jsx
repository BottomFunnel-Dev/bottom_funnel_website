import React from "react";
import "./WorkLifeBalance.css";

export const WorkLifeBalance = () => {
  const cardsData = [
    "Learning & Development",
    "Mindful Personal Guidance",
    "Constructive Feedback",
    "Inculsive & Open-Culture",
    "Innovation & Quality First",
    "Proactive Implementation",
    "Best & Global Opportunities",
  ];
  return (
    <div className="WorkLifeBalance-main">
      <div className="WorkLifeBalance-heading">
        <div>
          <h1>Work</h1>
          <div></div>
          <h1>Life</h1>
        </div>
        <h1>Balance</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, reiciendis,
        quisquam perspiciatis doloremque aliquid quasi repellendus illum numquam
        eaque vitae rerum sed quos fugit perferendis deserunt provident
        doloribus ipsam explicabo.
      </p>
      <div className="WorkLifeBalance-cards">
        {cardsData.map((elem, idx) => {
          return (
            <div>
              <h1>{idx + 1}</h1>
              <h2>{elem}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
