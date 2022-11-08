import React from "react";
import { PricingBanner } from "./PricingBanner/PricingBanner";
import { PricingOther } from "./PricingOther/PricingOther";
import { PricingTable } from "./PricingTable/PricingTable";

export const PricingPage = () => {
  return (
    <div>
      <PricingBanner />
      <PricingOther />
      <PricingTable />
    </div>
  );
};
