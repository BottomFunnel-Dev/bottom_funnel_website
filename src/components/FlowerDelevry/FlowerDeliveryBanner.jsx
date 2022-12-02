import React from "react";
import "./FlowerDelevrybanner.css";

export const FlowerDeliveryBanner = () => {
  return (
    <div className="flowerdeliverybannermaindiv">
      <div className="flowerdeliverybannerleftbox">
        <h2>On-Demand</h2>
        <h3>Flower Delivery App</h3>
        <p>
          Lorem ipsum dolor sit amet,laoreet. Vivamus ultrices In sodales odio
          sit amet quam varius In sodales odio sit amet quam varius erat ut
          felis commodo
        </p>
        <button className="flowerdeliverybannerbutton">Get Started</button>
      </div>

      <div className="flowerdeliverybannerrightbox">
        <div className="flowerdeliverybannerimageone">
          <img src="Images/Flowerdeliverypage/Rectangle 1954.png" alt="" />
        </div>
        <div className="flowerdeliverybannerimagetwo">
          <img src="Images/Flowerdeliverypage/Bannerpicture.png" alt="" />
        </div>
      </div>
    </div>
  );
};
