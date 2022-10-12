import React from "react";
import "./nodjsBannerNav.css";
import { BsFillCircleFill } from "react-icons/bs";

export const NodejsBannerNavigation = () => {
  let nodejsBannerNavData = [
    "Nodejs",
    "Why nodejs for application",
    "Why bottom funnel for Nodejs",
    "Book a call",
    "Remarkable Nodejs Solutions",
  ];

  function showText(id) {
    console.log("hello");
    document.getElementById(`nodejs-banner-nav-text-${id}`).style.display =
      "block";
  }

  function mouseLeave(id) {
    console.log(id);
    document.getElementById(`nodejs-banner-nav-text-${id}`).style.display =
      "none";
  }

  return (
    <div className="nodejs-banner-nav-main">
      {nodejsBannerNavData.map((elem, idx) => {
        return (
          <span
            onMouseOver={() => showText(idx)}
            onMouseLeave={() => mouseLeave(idx)}
            id="nodejs-banner-nav-span"
            key={elem}
          >
            <BsFillCircleFill fontSize="10px" />
            <p id={`nodejs-banner-nav-text-${idx}`} datatype={elem}>
              {elem}
            </p>
          </span>
        );
      })}
    </div>
  );
};
