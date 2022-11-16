import React from "react";
import "./mainBanner.css";
export const MainBanner = ({ bannerData }) => {
  bannerData = {
    title: "Home Services App Solutions",
    description: `Provide services to your customers at the comfort of their home with
    an app! Boost efficiency and drive more business with our
    industry-leading on demand home services app development services.`,

    heroImage:"Images/ondemandHome/mobileimage.png",

  };

  return (
    <div className="main-banner">
      <div className="mainbanner-textcontainer">
        <div>
          <h1>{bannerData.title}</h1>
          <p>
           {bannerData.description}
          </p>
          <button>Get Started </button>
        </div>
      </div>
      <div className="mainbanner-imageContainer">
        <img src="Images/ondemandHome/mobileimage.png" alt="" />
      </div>
    </div>
  );
};
