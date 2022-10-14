import React from "react";
import "./SkillsComWhyBF.css";
import { FaHandPointRight } from "react-icons/fa";

export const SkillsComWhyBF = ({ data }) => {
  const { title, image, bulletPointData } = data;

  return (
    <div className="skills-why-main">
      <h1>{title}</h1>
      <div className="skills-why-content">
        <div className="skills-bullets-points-image">
          <img src={image} alt="nodejs big logo" />
        </div>
        <div className="skills-bullets-points-main">
          <div className="skills-bullets-points">
            {bulletPointData.map((elem) => {
              return (
                <p key={elem}>
                  <FaHandPointRight />
                  {elem}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
