import React from "react";
import { WebdevBanner } from "../WebdevPages/bannerWebdev/WebdevBanner";
import { aspnetBanner } from "../../Data/webdevPageData/TechBannerData";
import { WebDevServices } from "../WebdevPages/webdevServices/WebDevServices";

import { aspnetwebDevServices } from "../../Data/webdevPageData/Popularservices";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebdevPages/webDevWhy/WebDevWhy";
import { aspnetWhyContent } from "../../Data/webdevPageData/whyBottomContent";
export const AspNetPage = () => {
  return (
    <div>
      <WebdevBanner bannerContent={aspnetBanner} />
      <WebDevServices webservicesContent={aspnetwebDevServices}/>
      <GetStarted/>
      <WebDevWhy whyDevContent={aspnetWhyContent} />
      
    </div>
  );
};
