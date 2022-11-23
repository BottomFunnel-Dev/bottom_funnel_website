import React from "react";
import "./webdevBanner.css";
export const WebdevBanner = ({ bannerContent }) => {
  return (
    <div
      className="webDevBanner"
      style={{
        background: `url(${bannerContent.background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="webDebText">
        <h1>{bannerContent.title}</h1>
        <p>{bannerContent.description}</p>

        <button className="webDevButton">Request A Quote</button>
      </div>
    </div>
  );
};

