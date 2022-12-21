import React from "react";
import "./webDevWhy.css";
export const WebDevWhy = ({ whyDevContent }) => {
  return (
    <div className="webDevWhy">
      <div className="devWhyText">
        <h1>
          Why Consider <span className="spanText">Bottom Funnel</span> For Web
          Development
        </h1>
        <p>{whyDevContent.intro}</p>
      </div>
      
      <div className="whyDevreasons">
        {whyDevContent.feature.map((item, index) => (
          <div key={index} className="whyfeatureCard">
            <div className="whyfeatureImage">
              <img src={item.icon} alt="" />
            </div>
            <div className="whyfeatureContent">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
