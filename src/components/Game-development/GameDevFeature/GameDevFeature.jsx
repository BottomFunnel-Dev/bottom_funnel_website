import React from "react";
import "./GameDevFeature.css";

export const GameDevFeature = () => {
  return (
    <div className="GameDev-feature-main">
      <div>
        <h1>Feature</h1>
        <div className="GameDev-features-content">
          <div>
            <div className="GameDev-circle"></div> <h2>Feature 1</h2>
          </div>
          <div className="GameDev-vertical"></div>
          <div>
            <div className="GameDev-circle"></div> <h2>Feature 2</h2>
          </div>
          <div className="GameDev-vertical"></div>
          <div>
            <div className="GameDev-circle"></div> <h2>Feature 3</h2>
          </div>
          <div className="GameDev-vertical"></div>
          <div>
            <div className="GameDev-circle"></div> <h2>Feature 4</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
