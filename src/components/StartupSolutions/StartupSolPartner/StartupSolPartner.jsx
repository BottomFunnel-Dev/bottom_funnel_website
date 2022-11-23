import React from "react";
import "./StartupSolPartner.css";

export const StartupSolPartner = () => {
  return (
    <div className="StartupSolPartner-container">
      <h1>
        <span>Startup</span> Solutions Partner
      </h1>
      <div className="StartupSolPartner-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        With 90% of the startups ending up as failures, getting a business off
        the ground isn't a cakewalk. Some ideas are no longer a market-fit while
        some run out of funds; and there are others that get outcompeted. With a
        startup solutions partner, you can make fast-track your wqay to becoming
        the next startup unicorn.
      </p>
      <ul>
        <li>Powerful product in ther first launch</li>
        <li>Performance that leaves a mark</li>
        <li>Precision in codes & design</li>
        <li>Pragmatic approach to skyrocketed growth</li>
      </ul>
      <div className="StartupSolPartner-image">
        <img
          src="Images/startupSolPhotos/solPartner.png"
          alt="Lifecycle and tech stacks"
        />
      </div>
    </div>
  );
};
