import React from "react";
import "./FoodDeliveryBanner.css";

export const FoodDeliveryBanner = () => {
  return (
    <div className="food-delivery-banner-main">
      <div className="food-delivery-banner-content">
        <div>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            quaerat! Explicabo vero voluptatum nemo velit nihil numquam dolore
            impedit itaque? Sapiente, accusamus necessitatibus dolorum
            laudantium vero doloremque assumenda dignissimos voluptatum.
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
