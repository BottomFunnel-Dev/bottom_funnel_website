import React from "react";
import { GameDevBanner } from "./GameDevBanner/GameDevBanner";
import { GameDevBookCall } from "./GameDevBookCall/GameDevBookCall";
import { GameDevDescription } from "./GameDevDescription/GameDevDescription";
import "./GameDevelopmentPage.css";
import { GameDevFeature } from "./GameDevFeature/GameDevFeature";
import { GameDevSolutions } from "./GameDevSolutions/GameDevSolutions";
import { GameDevType } from "./GameDevTypes/GameDevType";

export const GameDevelopmentPage = () => {
  return (
    <div>
      <GameDevBanner />
      <div className="banner-bottom-space">
        <img
          src="Images/gameDevelopmentphotos/black-border.png"
          alt="black border"
        />
      </div>
      <GameDevFeature />
      <div className="banner-bottom-space">
        <img
          src="Images/gameDevelopmentphotos/black-border.png"
          alt="black border"
        />
      </div>
      <GameDevType />
      <div className="banner-bottom-space">
        <img
          src="Images/gameDevelopmentphotos/black-border.png"
          alt="black border"
        />
      </div>
      <GameDevDescription />
      <div className="banner-bottom-space">
        <img
          src="Images/gameDevelopmentphotos/black-border.png"
          alt="black border"
        />
      </div>
      <GameDevSolutions />
      <div className="banner-bottom-space">
        <img
          src="Images/gameDevelopmentphotos/black-border.png"
          alt="black border"
        />
      </div>
      <GameDevBookCall />
    </div>
  );
};
