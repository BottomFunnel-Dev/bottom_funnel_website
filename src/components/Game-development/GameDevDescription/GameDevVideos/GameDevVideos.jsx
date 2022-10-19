import React from "react";
import "./GameDevVideos.css";

import { BsFillCheckCircleFill } from "react-icons/bs";

export const GameDevVideos = () => {
  return (
    <div className="GameDev-videos-main">
      <div>
        <img
          src="Images/gameDevelopmentPhotos/hero-videos.png"
          alt="Game video image"
        />
      </div>
      <div className="GameDev-videos-content">
        <h2>Game videos</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          nostrum eum facilis fugiat aspernatur maxime sit iste doloremque
          inventore natus.
        </p>
        <div>
          <p>
            <BsFillCheckCircleFill className="GameDev-videos-tick-icons"></BsFillCheckCircleFill>{" "}
            Lorem ipsum
          </p>
          <p>
            <BsFillCheckCircleFill className="GameDev-videos-tick-icons"></BsFillCheckCircleFill>{" "}
            Lorem ipsum
          </p>
          <p>
            <BsFillCheckCircleFill className="GameDev-videos-tick-icons"></BsFillCheckCircleFill>{" "}
            Lorem ipsum
          </p>
          <p>
            <BsFillCheckCircleFill className="GameDev-videos-tick-icons"></BsFillCheckCircleFill>{" "}
            Lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
};
