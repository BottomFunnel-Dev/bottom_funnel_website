import React from "react";
import "./mernintro.css";
export const MernIntro = ({ techIntro }) => {
  return (
    <div className="mernintro">
      <div className="stackintro">
        <h1>{techIntro.title}</h1>
        <p>{techIntro.intro}</p>
      </div>

      <div className="mainstackDiv">
        <div className="stackflex">
          {techIntro.techStack.map((item, index) => (
            <div className="stackCard" key={index}>
              <div className="stackImage">
                <img src={item.stackLogo} alt="" />
              </div>
              <div className="stackContent">
                <h3>{item.stackname}</h3>
                <p>{item.stackintro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
