import React from "react";
import "./MLPages.css";
import { MLBanner } from "./MLBanner/MLBanner";
import { MLPopular } from "./MLPopular/MLPopular";
import { MLMidBanner } from "./MLMidBanner/MLMidBanner";
import { MLForm } from "./MLForm/MLForm";
import { MLwhyBF } from "./MLwhyBF/MLwhyBF";
import { MLApproach } from "./MLApproach/MLApproach";

export const MLPages = () => {
  return (
    <div style={{ color: "#393939" }}>
      <MLBanner />
      <MLPopular />
      <MLMidBanner />
      <MLApproach />
      <MLwhyBF />
      <MLForm />
    </div>
  );
};
