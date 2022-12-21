import React from "react";
import "./SkillsComBanner.css";

export const SkillsComBanner = ({ data }) => {
  const { image, title, description } = data;

  return (
    <div
      className="skills-banner-main"
      style={{
        background: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="skills-banner-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <button>Get Started</button>
    </div>
  );
};
