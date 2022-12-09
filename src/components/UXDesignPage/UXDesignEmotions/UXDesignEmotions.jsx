import React from "react";
import "./UXDesignEmotions.css";

export const UXDesignEmotions = () => {
  const cardsData = [
    "Images/UXDesignPhotos/discover.png",
    "Images/UXDesignPhotos/define.png",
    "Images/UXDesignPhotos/deliver.png",
  ];

  return (
    <div className="UXDesignEmotions">
      <div className="UXDesignEmotions-container">
        <h1>
          Keep your users at the center of your design process with our{" "}
          <span>UXD practices</span>
        </h1>

        <div className="UXDesignEmotions-main">
          <div className="UXDesignEmotions-image">
            <img src="Images/UXDesignPhotos/study.png" alt="desktop.png" />
          </div>
          <div className="UXDesignEmotions-content">
            <h2>
              Bottom Funnel <span>UX</span> Practices
            </h2>
            <p>
              Bottom Funnel is a startup you can trust. We combine our team's
              deep experience in design, deep knowledge of the industries our
              clients serve, and insight gained from our discoveries.
            </p>
            <div>
              {cardsData.map((elem) => (
                <img key={elem} src={elem} alt="Practice points " />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
