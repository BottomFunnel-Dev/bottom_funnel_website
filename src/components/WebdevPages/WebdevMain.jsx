import React from "react";
import { WebdevBanner } from "./bannerWebdev/WebdevBanner";
import { webDevMain } from "../../Data/webdevPageData/TechBannerData";
import { WebDevServices } from "./webdevServices/WebDevServices";
import { webDevServices } from "../../Data/webdevPageData/Popularservices";
import { GetStarted } from "./webGetStartedCard/GetStarted";
import { WebDevWhy } from "./webDevWhy/WebDevWhy";
import { mernWhyContent } from "../../Data/webdevPageData/whyBottomContent";
export const WebdevMain = () => {
  return (
    <div>
      <WebdevBanner bannerContent={webDevMain} />
      <WebDevServices webservicesContent={webDevServices} />
      <GetStarted/>
      <WebDevWhy whyDevContent={mernWhyContent} />
    </div>
  );
};
