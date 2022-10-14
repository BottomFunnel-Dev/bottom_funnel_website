import React from "react";
import "./SkillsComBookCall.css";

export const SkillsComBookCall = ({ data }) => {
  const { title, btn } = data;
  return (
    <div className="skills-book-call-main">
      <h1>{title}</h1>
      <button>{btn}</button>
    </div>
  );
};
