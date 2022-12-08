import React from "react";
import "./pickupBanner.css";
export const PickupBanner = () => {
  return (
    <div className="pickupbanner">
      {/* <div className="leftback"> <img src="Images/pickup/backgrounds/ellipse1.png" alt="" /></div> */}
      <div className="pickuptextcontainer">
        <div>
          <h1>Set Up An Efficient Online Pickup & Delivery Business</h1>
          <p>
            We all know that managing a business is no easy task, especially
            when it grows and requires more attention. When you have to attend
            to every little detail of it, life gets hectic. And if there's
            shipping involved, things can get even more complicated.
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
