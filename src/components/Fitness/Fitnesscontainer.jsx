import React from "react";
import "./fitnesscontainer.css";

export const Fitnesscontainer = () => {
  return (
    <div className="fitnesscontainer">
      <div className="fitnesssub">
        <div className="fitnessleft">
          <h1>Make Your own Health and Fitness App</h1>
          <p>
            Our fitness apps are the perfect companion for everyone who wants to
            be more active and healthy. Whether you want to lose weight or just
            want a healthier lifestyle.
          </p>
          <button className="fitnesgetbtn">Get Started</button>
        </div>
        <div className="fitnessright">
          <div className="fitnessimage">
            <img src="Images/fitness/yoga1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
