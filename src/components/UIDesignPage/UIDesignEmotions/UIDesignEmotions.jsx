import React from "react";
import "./UIDesignEmotions.css";

export const UIDesignEmotions = () => {
  const cardsData = [
    "Images/UIDesignPhotos/discover.png",
    "Images/UIDesignPhotos/strategize.png",
    "Images/UIDesignPhotos/design.png",
    "Images/UIDesignPhotos/iterate.png",
  ];
  return (
    <div className="UIDesignEmotions">
      <div className="UIDesignEmotions-container">
        <h1>
          Create design that <span>evoke emotions</span>
        </h1>
        <p>
          We build interfaces that are effortless, intuitive, immersive and
          seamlessly guide users in performing the desired action.
        </p>

        <div className="UIDesignEmotions-main">
          <div className="UIDesignEmotions-image">
            <img src="Images/UIDesignPhotos/desktop.png" alt="desktop.png" />
          </div>
          <div className="UIDesignEmotions-content">
            <h2>
              Bottom Funnel <span>UI</span> Practices
            </h2>
            <p>
              Bottom Funnel is an online store that crafts brilliance together
              and delivers experience that are even evolving. We have a wide
              range of products.
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
