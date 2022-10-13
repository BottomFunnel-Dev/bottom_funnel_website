import React from "react";
import "./PhPBannerNav.css";
import { BsFillCircleFill } from "react-icons/bs";

export const PhPBannerNavigation = () => {
  let phpBannerNavData = [
    "php",
    "Why php for application",
    "Why bottom funnel for php",
    "Book a call",
    "Remarkable php Solutions",
  ];

  function showText(id) {
    console.log("hello");
    document.getElementById(`php-banner-nav-text-${id}`).style.display =
      "block";
  }

  function mouseLeave(id) {
    console.log(id);
    document.getElementById(`php-banner-nav-text-${id}`).style.display = "none";
  }

  return (
    <div className="php-banner-nav-main">
      {phpBannerNavData.map((elem, idx) => {
        return (
          <span
            onMouseOver={() => showText(idx)}
            onMouseLeave={() => mouseLeave(idx)}
            id="php-banner-nav-span"
            key={elem}
          >
            <BsFillCircleFill fontSize="10px" />
            <p id={`php-banner-nav-text-${idx}`} datatype={elem}>
              {elem}
            </p>
          </span>
        );
      })}
    </div>
  );
};
