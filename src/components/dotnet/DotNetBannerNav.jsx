import React from "react";
import "./DotNetBannerNav.css";
import { BsFillCircleFill } from "react-icons/bs";

export const DotNetBannerNavigation = () => {
  let dotnetBannerNavData = [
    "dotnet",
    "Why dotnet for application",
    "Why bottom funnel for dotnet",
    "Book a call",
    "Remarkable dotnet Solutions",
  ];

  function showText(id) {
    console.log("hello");
    document.getElementById(`dotnet-banner-nav-text-${id}`).style.display =
      "block";
  }

  function mouseLeave(id) {
    console.log(id);
    document.getElementById(`dotnet-banner-nav-text-${id}`).style.display =
      "none";
  }

  return (
    <div className="dotnet-banner-nav-main">
      {dotnetBannerNavData.map((elem, idx) => {
        return (
          <span
            onMouseOver={() => showText(idx)}
            onMouseLeave={() => mouseLeave(idx)}
            id="dotnet-banner-nav-span"
            key={elem}
          >
            <BsFillCircleFill fontSize="10px" />
            <p id={`dotnet-banner-nav-text-${idx}`} datatype={elem}>
              {elem}
            </p>
          </span>
        );
      })}
    </div>
  );
};
