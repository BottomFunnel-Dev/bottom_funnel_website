import React from "react";
import { AwardsBanner } from "./AwardsBanner/AwardsBanner";
import "./AwardsPage.css";
import { AwardsSection } from "./AwardsSection/AwardsSection";

export const AwardsPage = () => {
  return (
    <div style={{ color: "#393939" }}>
      <AwardsBanner />
      <AwardsSection />
    </div>
  );
};
