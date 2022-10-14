import React from "react";
import "./FoodDeliveryBanner.css";

export const FoodDeliveryBanner = () => {
  return (
    <div className="food-delivery-banner-main">
      <div className="food-delivery-banner-content">
        <div>
          <h1>FOOD DELIVERY APP SOLUTIONS</h1>
          <p>
            Spice up the competition in the industry with your own food delivery
            app!
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div className="food-delivery-banner-image">
        <img
          height="100%"
          src="Images/foodDeliveryphotos/bannerNew.png"
          alt="Food Delivery Banner image"
        />
      </div>
    </div>
  );
};
