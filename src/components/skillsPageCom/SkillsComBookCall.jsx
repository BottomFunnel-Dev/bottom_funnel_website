import React from "react";
import "./SkillsComBookCall.css";

export const SkillsComBookCall = ({ data }) => {
  const { title, btn, image } = data;
  return (
    <div
      className="skills-book-call-main"
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1>{title}</h1>
      <button>{btn}</button>
    </div>
  );
};
