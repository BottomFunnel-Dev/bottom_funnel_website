import React from "react";
import "./SkillsComBanner.css";

export const SkillsComBanner = ({ data }) => {

  const { image, title, description } = data;
  const color = "green";

  return (
    <div
      className="skills-banner-main"
      style={{ background: `url(${image})` }}
    >
      <div className="skills-banner-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
