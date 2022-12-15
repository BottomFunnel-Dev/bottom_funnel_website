import React from "react";
import "./ItConsultingWebsiteBanner.css";

export const ItConsultingWebsiteBanner = () => {
  return (
    <div className="consultingBannerParentDiv">
      <img src="/Images/ItConsulting/BannerImage.png" alt="image" />

      <div className="consultingBannerContentDiv">
        <h1> IT Consulting Services </h1>

        <p>
          Bottom Funnel represents the connected world, offering innovative and
          customer-centric information technology experiences, enabling
          Enterprises, Associates and the Society to Rise.
        </p>

        <button> Get Started </button>
      </div>
    </div>
  );
  // For next section take reference from the plant based meat 2nd component section
};
