import React from "react";
import "./funnelDeskBanner.css";
export const FunnelDeskBanner = () => {
  return (
    <div className="funnel-support">
      <div className="banner-backImg-left">
        <img src="Images/BottomFunnelDeskPhotos/wires.png" alt="" />
      </div>
      <div className="banner-backImg-right">
        <img src="Images/BottomFunnelDeskPhotos/wires.png" alt="" />
      </div>

      <div className="main-content-banner">
        <div className="image-part">
          <img
            src="Images/bottomFunnelDeskPhotos/human-vector.png"
            alt="human"
          />
        </div>
        <div className="content-part">
          <h1>Delight Your Customer with Effortless Customer Service</h1>
          <p>
            Engage in more meaningful conversations every day, across every
            channel with every customer
          </p>
          <button className="freetrial">Start Free Trial</button>
          <button className="demostart">Request Demo</button>
        </div>
      </div>
    </div>
  );
};
