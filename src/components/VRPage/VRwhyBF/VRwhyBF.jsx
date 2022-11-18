import React from "react";
import "./VRwhyBF.css";

export const VRwhyBF = () => {
  const cardsData = [
    {
      title: "Healthcare",
      body: [
        "Surgery simulations.",
        "Psychological therapy.",
        "Gamified rehabilitation",
      ],
      image: "Images/VRPhotos/doctor.png",
    },
    {
      title: "Education",
      body: ["Immersive training.", "Immersive research."],
      image: "Images/VRPhotos/vr-gaming.png",
    },
    {
      title: "Manufacturing",
      body: [
        "Virtual design and engineering.",
        "Training.",
        "Maintenance guidance.",
      ],
      image: "Images/VRPhotos/metaverse.png",
    },
    {
      title: "Retail",
      body: ["VR showrooms.", "Training.", "Gamified rehabilitation"],
      image: "Images/VRPhotos/clothing.png",
    },
    {
      title: "Real estate",
      body: [
        "Virtual design and engineering.",
        "Training.",
        "Maintenance guidance.",
      ],
      image: "Images/VRPhotos/building.png",
    },
    {
      title: "Advertising",
      body: [
        "Gamified ads.",
        "Virtual events.",
        "Virtual design and engineering.",
      ],
      image: "Images/VRPhotos/video-player.png",
    },
  ];

  return (
    <div className="VRwhyBF-Container">
      <div className="VRwhyBF-Background-rectangle">
        <img
          src="Images/VRPhotos/rectangle-top.png"
          alt="Background image rectangle right top"
        />
        <img
          src="Images/VRPhotos/rectangle-bottom.png"
          alt="Background image rectangle left bottom"
        />
      </div>
      <div className="VRwhyBF-main">
        <h1>IOT solutions Bottom funnel Builds</h1>
        <div className="VRServices-hr-line">
          <span></span>
          <div></div>
          <span></span>
        </div>
        <div className="VRwhyBF-Cards-Container">
          {cardsData.map(({ title, image, body }) => {
            return (
              <div key={title} className="VRwhyBF-Cards-main">
                <div>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <ul>
                  {body.map((list) => {
                    return <li key={list}>{list}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
