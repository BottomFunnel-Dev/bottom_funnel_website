import React from "react";
import "./SkillsComWhyApp.css";

export const SkillsComWhyApp = ({ data }) => {
  const { title, cardsData } = data;

  return (
    <div className="skills-why-application-main">
      <h1>{title}</h1>
      <div className="skills-why-application-content">
        {cardsData.map(({ img, title, description }, idx) => {
          return (
            <div key={idx}>
              <div className="skills-why-appl-cards-images-div">
                <img src={img.src} alt={img.alt} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
