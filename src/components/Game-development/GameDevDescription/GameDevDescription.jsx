import React from "react";
import { GameDevBottom } from "./GameDevBottom/GameDevBottom";
import { GameDevCenter } from "./GameDevCenter/GameDevCenter";
import "./GameDevDescription.css";
import { GameDevVideos } from "./GameDevVideos/GameDevVideos";

export const GameDevDescription = () => {
  return (
    <div className="GameDev-description">
      <GameDevVideos />
      <GameDevCenter />
      <GameDevBottom />
    </div>
  );
};
