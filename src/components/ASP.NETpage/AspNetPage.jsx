import React from "react";
import { WebdevBanner } from "../WebdevPages/bannerWebdev/WebdevBanner";
import { aspnetBanner } from "../../Data/webdevPageData/TechBannerData";
import { WebDevServices } from "../WebdevPages/webdevServices/WebDevServices";

import { aspnetwebDevServices } from "../../Data/webdevPageData/Popularservices";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebdevPages/webDevWhy/WebDevWhy";
import { aspnetWhyContent } from "../../Data/webdevPageData/whyBottomContent";
import { WhyTechStack } from "../WebdevPages/whyTechStack/WhyTechStack";
import { whyAspnet } from "../../Data/webdevPageData/whyTechStack";
export const AspNetPage = () => {
  return (
    <div>
      <WebdevBanner bannerContent={aspnetBanner} />
      <WebDevServices webservicesContent={aspnetwebDevServices}/>
      <GetStarted/>
      <WebDevWhy whyDevContent={aspnetWhyContent} />
      <WhyTechStack techData={whyAspnet}/>
    </div>
  );
};
