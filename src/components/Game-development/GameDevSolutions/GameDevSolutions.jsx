import React from "react";
import "./GameDevSolutions.css";

export const GameDevSolutions = () => {
  return (
    <div className="GameDev-solutions-main">
      <div>
        <h1>Solutions</h1>
        <div className="GameDev-solutions-content">
          <div>
            <div className="GameDev-circle"></div> <h2>Solutions 1</h2>
          </div>
          <div className="GameDev-vertical"></div>
          <div>
            <div className="GameDev-circle"></div> <h2>Solutions 2</h2>
          </div>
          <div className="GameDev-vertical"></div>
          <div>
            <div className="GameDev-circle"></div> <h2>Solutions 3</h2>
          </div>
          <div className="GameDev-vertical"></div>
          <div>
            <div className="GameDev-circle"></div> <h2>Solutions 4</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
