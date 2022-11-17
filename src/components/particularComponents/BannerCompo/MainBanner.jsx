import React from "react";
import "./mainBanner.css";
export const MainBanner = ({ bannerData }) => {
 

  return (
    <div className="main-banner">
      <div className="mainbanner-textcontainer">
        <div>
          <h1>{bannerData.title}</h1>
          <p>{bannerData.description}</p>
          <button>Get Started </button>
        </div>
      </div>
      <div className="mainbanner-imageContainer">
        <img src={bannerData.heroImage} alt="" />
      </div>
    </div>
  );
};
