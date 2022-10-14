import React from "react";
import "./SkillsComRemarkable.css";

export const SkillsComRemarkable = ({ data }) => {
  const { title, description, cardsData } = data;

  return (
    <div className="skills-remarkable-main">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="skills-remarkable-solutions">
        {cardsData.map(({ img, title }) => {
          return (
            <div key={title}>
              <div className="skills-remarkable-image">
                <img src={img.src} alt={img.alt} />
              </div>
              <h4>{title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
