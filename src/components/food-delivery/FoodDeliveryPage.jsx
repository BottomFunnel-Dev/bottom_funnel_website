import React from "react";
import { FoodDeliveryAdminPanel } from "./foodDeliveryAdminPanel";
import { FoodDeliveryAdvanceTech } from "./foodDeliveryAdvanceTech";
import { FoodDeliveryBanner } from "./FoodDeliveryBanner";
import { FoodDeliveryBookCall } from "./FoodDeliveryBookCall";
import { FoodDeliveryExluciveApp } from "./FoodDeliveryExluciveApp";
import { FoodDeliveryNeedSuccess } from "./FoodDeliveryNeedSuccess";
import "./FoodDeliveryPage.css";
import { FoodDeliveryPartnerApp } from "./FoodDeliveryPartnerApp";

export const FoodDelivery = () => {
  return (
    <div>
      {<FoodDeliveryBanner />}
      <div className="food-delivery-content">
        {<FoodDeliveryBookCall />}
        {<FoodDeliveryExluciveApp />}
      </div>

      {<FoodDeliveryAdvanceTech />}
      {<FoodDeliveryAdminPanel />}
      {<FoodDeliveryPartnerApp />}
      {<FoodDeliveryNeedSuccess />}
    </div>
  );
};
