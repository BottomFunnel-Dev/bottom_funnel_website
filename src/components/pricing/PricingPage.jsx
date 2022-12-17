import React from "react";
import { PricingBanner } from "./PricingBanner/PricingBanner";
import { PricingDetailsData } from "./PricingDetailsData/PricingDetailsData";

export const PricingPage = () => {
  return (
    <div>
      <PricingBanner />
      <PricingDetailsData/>
      {/* <AdsOns/> */}
    </div>
  );
};
