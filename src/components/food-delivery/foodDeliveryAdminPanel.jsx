import React from "react";
import "./foodDeliveryAdminPanel.css";

export const FoodDeliveryAdminPanel = () => {
  return (
    <div className="food-delivery-admin-panel-main">
      <div className="food-delivery-admin-panel-div-main">
        <div className="food-delivery-admin-panel-div-content">
          <h2>Admin Panel</h2>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="food-delivery-admin-panel-div-images">
          <img
            src="Images/foodDeliveryphotos/admin-panel-image.png"
            alt="triangle background image"
            width="100%"
          />
          <div>
            <img
              src="Images/foodDeliveryphotos/admin-panel-bckgrd-top.png"
              alt="admin panel image background top"
              width="100%"
            />
            <img
              src="Images/foodDeliveryphotos/admin-panel-bckgrd-bottom.png"
              alt="admin panel image background bottom"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
