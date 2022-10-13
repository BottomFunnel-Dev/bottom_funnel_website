import React from "react";
import "./DotNetWhyBF.css";
import { FaHandPointRight } from "react-icons/fa";

export const DotNetWhyBottomFunnel = () => {
  return (
    <div className="dotnet-why-main">
      <h1>Why Bottom funnel for Node.js</h1>
      <div className="dotnet-why-content">
        <div className="dotnet-bullets-points-image">
          <img src="Images/dotnetphotos/image-2.png" alt="dotnet big logo" />
        </div>
        <div className="dotnet-bullets-points-main">
          <div className="dotnet-bullets-points">
            <p>
              <FaHandPointRight />
              Fast customer services
            </p>
            <p>
              <FaHandPointRight />
              Always be in teach with customer
            </p>
            <p>
              <FaHandPointRight />
              Skills employees
            </p>
            <p>
              <FaHandPointRight />
              effective and efficient work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
