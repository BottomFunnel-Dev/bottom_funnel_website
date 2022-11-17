import React from "react";
import "./BlockChainBF.css";

export const BlockChainBF = () => {
  return (
    <div className="BlockChainBF-Container">
      <div className="BlockChainBF-Background-rectangle">
        <img
          src="Images/BlockChainPhotos/rectangle-right.png"
          alt="Background image rectangle right top"
        />
        <img
          src="Images/BlockChainPhotos/rectangle-left.png"
          alt="Background image rectangle left bottom"
        />
      </div>
      <div className="BlockChainBF-main">
        <h1>Bottom Funnel Blockchain Services</h1>
        <div className="BlockChainOffer-hr-line">
          <span></span>
          <div></div>
          <span></span>
        </div>
        <div className="BlockChainBF-Cards-Container">
          <div className="BlockChainBF-Cards-summary">
            <h1>
              Summary<span>.</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              architecto quam sunt consequuntur, facilis aperiam, aliquam
              corporis minus fugiat error accusamus optio? Nulla exercitationem
              qui id reprehenderit, amet sapiente quasi! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Magnam, architecto quam sunt
              consequuntur, facilis aperiam, aliquam corporis minus fugiat error
              accusamus optio? Nulla exercitationem qui id reprehenderit, amet
              sapiente quasi!
            </p>
          </div>
          <div className="BlockChainBF-cards-hr-line">
            <span></span>
            <div></div>
            <span></span>
          </div>
          <div className="BlockChainBF-Cards-why">
            <h1>Why us for your blockchain application development:</h1>
            <ul>
              <li>30+ blockchain application delivered</li>
              <li>50+ man-years of collective blockchain experience</li>
              <li>Experts in making changes on a protocol level</li>
              <li>End-to-end blockchain development</li>
              <li>
                High-profile POC (Proof-of-Concept) and pilot program analysis
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
