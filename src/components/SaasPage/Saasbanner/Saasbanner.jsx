import React from "react";
import { BannerContent } from "./BannerContent/BannerContent";
import "./Saasbanner.css";

export const Saasbanner = () => {
  return (
    <>
    <div className="saas-banner-main">
      <div className="saas-banner-image">
        <img
          width="100%"
          src="Images/saasPhotos/banner.png"
          alt="Saas Banner image"
        />
      </div>
    </div>
      <BannerContent />
    </>
  );
};
