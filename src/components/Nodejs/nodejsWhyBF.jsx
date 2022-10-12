import React from "react";
import "./nodejsWhyBF.css";
import { FaHandPointRight } from "react-icons/fa";

export const NodejsWhyBottomFunnel = () => {
  let bulletPointData = [
    "We use an agile approach.",
    "Provides integrity and transparency.",
    "Commitments with NDA agreements.",
    "Flexible engagement models.",
    "Experienced and talented team of developers.",
    "Offers variety of exclusive node.js solutions.",
  ];
  return (
    <div className="nodejs-why-main">
      <h1>Why Bottom funnel for Node.js</h1>
      <div className="nodejs-why-content">
        <div className="nodejs-bullets-points-image">
          <img
            src="Images/nodejsphotos/nodejs-big-logo.png"
            alt="nodejs big logo"
          />
        </div>
        <div className="nodejs-bullets-points-main">
          <div className="nodejs-bullets-points">
            {bulletPointData.map((elem) => {
              return (
                <p key={elem}>
                  <FaHandPointRight />
                  {elem}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
