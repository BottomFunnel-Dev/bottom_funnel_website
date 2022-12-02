import React from "react";
import "./OurDevPage.css";

// ----- React page main sub components -----

import { OurDevBanner } from "./OurDevBanner/OurDevBanner";
import { OurDevProcess } from "./OurDevProcess/OurDevProcess";
import { OurWholeDev } from "./OurWholeDev/OurWholeDev";
import { OurDevQuery } from "./OurDevQuery/OurDevQuery";

export const OurDevPage = () => {
  return (
    <div className="OurDevPage-container">
      <OurDevBanner />
      <OurDevProcess />
      <OurWholeDev />
      <OurDevQuery />
    </div>
  );
};
