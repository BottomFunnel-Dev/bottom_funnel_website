import React from "react";
import "./pickupBanner.css";
export const PickupBanner = () => {
  return (
    <div className="pickupbanner">
        <div className="leftback"> <img src="Images/pickup/backgrounds/ellipse1.png" alt="" /></div>
      <div className="pickuptextcontainer">
        <div>
          <h1>Set Up An Efficient Online Pickup & Delivery Business</h1>
          <p>
            Provide services to your customers at the comfort of their home with
            an app! Boost efficiency and drive more business with our
            industry-leading on demand home services app development services.
          </p>
          <button>Get Started </button>
        </div>
      </div>
      <div className="pickupimageContainer">
        <img src="Images/pickup/backgrounds/bannerimg.png" alt="" />
      </div>
    </div>
  );
};
