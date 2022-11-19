import React from "react";
import "./whyBottom.css";
export const WhyBottom = ({ whyContent }) => {
  return (
    <div className="whybottom">
      <h1>Why Consider Bottom Funnel For Mern</h1>
      <div className="backelement">
        <img src="Images/mern/circle.png" alt="" />
      </div>
      <div className="backelementbottom">
        <img src="Images/mern/circle.png" alt="" />
      </div>
      
      <div className="whyreasons">
        {whyContent.feature.map((item, index) => (
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
