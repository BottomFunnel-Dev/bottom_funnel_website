import React from "react";
import { WebdevBanner } from "../WebdevPages/bannerWebdev/WebdevBanner";
import { golangBanner } from "../../Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../WebdevPages/techStackintro/Techstackintro";
import { golangstackIntro } from "../../Data/webdevPageData/StackData";
import { WebDevServices } from "../WebdevPages/webdevServices/WebDevServices";
import { golangwebDevServices } from "../../Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../WebdevPages/whyTechStack/WhyTechStack";
import { whyGolang } from "../../Data/webdevPageData/whyTechStack";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebdevPages/webDevWhy/WebDevWhy";
import { golangWhyContent } from "../../Data/webdevPageData/whyBottomContent";
export const GolangPage = () => {
  return (
    <div>
      <WebdevBanner bannerContent={golangBanner} />
      <Techstackintro techContent={golangstackIntro} />
      <WebDevServices webservicesContent={golangwebDevServices} />
      <WhyTechStack techData={whyGolang} />
      <GetStarted />
      <WebDevWhy whyDevContent={golangWhyContent} />
    </div>
  );
};
