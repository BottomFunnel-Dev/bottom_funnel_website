import React from "react";
import "./nodejsWhyBF.css";
import { FaHandPointRight } from "react-icons/fa";

export const NodejsWhyBottomFunnel = () => {
  return (
    <div className="nodejs-why-main">
      <h1>Why Bottom funnel for Node.js</h1>
      <div className="nodejs-why-content">
        <img
          src="Images/nodejsphotos/nodejs-big-logo.png"
          alt="nodejs big logo"
        />
        <div>
          <div className="nodejs-bullets-points">
            <p>
              <FaHandPointRight />
              Hello world
            </p>
            <p>
              <FaHandPointRight />
              Hello world
            </p>
            <p>
              <FaHandPointRight />
              Hello world
            </p>
            <p>
              <FaHandPointRight />
              Hello world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
