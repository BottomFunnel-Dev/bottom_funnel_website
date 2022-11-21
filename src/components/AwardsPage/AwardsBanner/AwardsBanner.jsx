import React from "react";
import "./AwardsBanner.css";

export const AwardsBanner = () => {
  return (
    <div className="AwardsBanner-main">
      <div className="Awardsbanner-content-main">
        <div className="Awardsbanner-content">
          <h1>Awards & Memberships</h1>
          <p>
            In recognition of our continuous learning process and the innovative
            business solutions that have benefited most of our clients, we are
            awarded the Bar of Success badge, which, as a result, increases our
            level of excellence. We sync daily.
          </p>
          <button>Contact us</button>
        </div>
        <div className="Awardsbanner-image">
          <img src="Images/AwardsPhotos/banner.png" alt="Awards vector" />
        </div>
      </div>
    </div>
  );
};
