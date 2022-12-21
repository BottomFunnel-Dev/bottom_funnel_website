import React from "react";
import "./SkillsComDes.css";

export const SkillsComDes = ({ DescrptionData }) => {
  const { title, image, description } = DescrptionData;
  return (
    <div className="skills-des-main">
      <div className="skills-des-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="skills-des-image">
        <img src={image} height="100%" alt="Nodejs logo" />
      </div>
    </div>
  );
};
