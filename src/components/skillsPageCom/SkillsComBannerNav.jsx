import React from "react";
import "./SkillsComBannerNav.css";
import { BsFillCircleFill } from "react-icons/bs";

export const SkillsComBannerNav = () => {
  let nodejsBannerNavData = [
    "Nodejs",
    "Why nodejs for application",
    "Why bottom funnel for Nodejs",
    "Book a call",
    "Remarkable Nodejs Solutions",
  ];

  function showText(id) {
    console.log("hello");
    document.getElementById(`skills-banner-nav-text-${id}`).style.display =
      "block";
  }

  function mouseLeave(id) {
    console.log(id);
    document.getElementById(`skills-banner-nav-text-${id}`).style.display =
      "none";
  }

  return (
    <div className="skills-banner-nav-main">
      {nodejsBannerNavData.map((elem, idx) => {
        return (
          <span
            onMouseOver={() => showText(idx)}
            onMouseLeave={() => mouseLeave(idx)}
            id="skills-banner-nav-span"
            key={elem}
          >
            <BsFillCircleFill fontSize="10px" />
            <p id={`skills-banner-nav-text-${idx}`} datatype={elem}>
              {elem}
            </p>
          </span>
        );
      })}
    </div>
  );
};
