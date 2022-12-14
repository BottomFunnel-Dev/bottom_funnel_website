import React from "react";
import "./VettingTalent.css";

export const VettingTalent = () => {
  const cardsData = [
    {
      title: "Excellent Communication",
      body: "Vetted through a world-leading AI-powered English communication test that assesses speaking, listening, reading, writing, pronunciation, fluency, clarity of expression, and speed of speech.",
    },
    {
      title: "Technically Super Sound",
      body: "Each candidate goes through a minimum 5-hour rigorous skill assessment curated uniquely as per the role.",
    },
    {
      title: "Available across time Zones",
      body: "Bottom Funnel has talents working across different time zones, hence, we have someone to fit your local time zone and ready to join you in as less as 5 days.",
    },
    {
      title: "Culturally Fit",
      body: "Adjust accordingly with company's core values, vision, principle, identity.",
    },
  ];

  return (
    <div className="VettingTalent-container">
      <h1>
        Every <span>talent</span> in our network is pre-vetted and qualified on
        below parameters.
      </h1>
      <div className="VettingTalent-main">
        <div className="VettingTalent-image">
          <img
            src="Images/VettingPhotos/human.png"
            alt="Vetting Talent section human image"
          />
        </div>
        <div className="VettingTalent-content">
          {cardsData.map(({ title, body }) => (
            <div>
              <div className="VettingTalent-dots">
                <img src="Images/VettingPhotos/dot.png" alt="Dots icons" />
              </div>
              <div className="VettingTalent-card-content">
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
