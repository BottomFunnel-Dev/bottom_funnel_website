import React from "react";
import { MobileAppDevelopmentServices } from "./MobileAppDevelopmentServices";

import { MobileAppDevelopmentbanner } from "./MobileAppDevelopmentbanner";
import { MobileappDevelopmentclients } from "./MobileappDevelopmentclients";
import { MobileAppDevelopmentCompany } from "./MobileAppDevelopmentCompany";
import { MobileAppDevelopmenttechnologies } from "./MobileAppDevelopmenttechnologies";
import { MobileAppDevelopmentprocess } from "./MobileAppDevelopmentprocess";
export const MobileAppDevelopment = () => {
  return (
    <div className="_MobileAppDevelopmentmaindiv">
      <MobileAppDevelopmentbanner />
      <MobileAppDevelopmentCompany />
      <MobileappDevelopmentclients />
      <MobileAppDevelopmentServices />
      <MobileAppDevelopmenttechnologies />
      <MobileAppDevelopmentprocess />
    </div>
  );
};
