import React from "react";
import "./techStackintro.css";
import { useState } from "react";
export const Techstackintro = ({ techContent }) => {
  const [stack, setStack] = useState(0);

  const handleStack = (element) => {
    console.log(element);
    setStack(element);
  };

  return (
    <div className="aspTech-intro">
      <div className="headText">
        <h1>
          What is <span>{techContent.heading}</span> and its frameworks
        </h1>
        <p>{techContent.description}</p>
      </div>

      <div className="asp-stack-main">
        <div className="asp-techStack-grid">
          {techContent.aspstack.map((item, index) => (
            <button
              style={
                index === stack
                  ? {
                    background: "#ffe2da",
                    borderLeft: "5px solid #ef4c23",
                    color: "#ef4c23",
                  }
                  : {}
              }
              onMouseEnter={() => {
                handleStack(index);
              }}
              key={index}
            >
              {item.stackName}
            </button>
          ))}
        </div>

        <div className="asp-stack-about">
          <div className="tech-content-div">
            <div className="stack-image">
              <img
                src={techContent.aspstack[stack].stackIcon}
                alt="aspstack.png"
              />
            </div>
            <div className="stack-introduction">
              <p>{techContent.aspstack[stack].description}</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};
