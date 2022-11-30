import React from "react";
import "./VettingHiring.css";

export const VettingHiring = () => {
  const CardsData = [
    {
      title: "Eliminates",
      body: "The need for HR for cultural, language, and background checks.",
    },
    { title: "Zero", body: "Reliance on technical recruiters." },
    { title: "75%", body: "Reduction in the guesswork for hiring managers." },
    { title: "5X", body: "Increase in the chance of the right hire." },
    { title: "96.5%", body: "Unit candidates are filtered out." },
  ];
  return (
    <div className="VettingHiring-container">
      <h1>
        How Does our <span>vetting process</span> help in hiring?
      </h1>
      <div className="VettingHiring-main">
        {CardsData.map(({ title, body }) => (
          <div>
            <div className="VettingHiring-image">
              <img src="Images/VettingPhotos/points.png" alt="" />
            </div>
            <div className="VettingHiring-content">
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
