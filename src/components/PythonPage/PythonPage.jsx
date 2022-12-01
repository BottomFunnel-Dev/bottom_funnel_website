import React from "react";
import { pythonwebDevServices } from "../../Data/webdevPageData/Popularservices";
import { pythonstackIntro } from "../../Data/webdevPageData/StackData";
import { pythonBanner } from "../../Data/webdevPageData/TechBannerData";
import { pythonWhyContent } from "../../Data/webdevPageData/whyBottomContent";
import { whyPython } from "../../Data/webdevPageData/whyTechStack";
import { Techstackintro } from "../WebdevPages/techStackintro/Techstackintro";
import { WebdevBanner } from "../WebdevPages/bannerWebdev/WebdevBanner";
import { WebDevServices } from "../WebdevPages/webdevServices/WebDevServices";
import { WebDevWhy } from "../WebdevPages/webDevWhy/WebDevWhy";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import { WhyTechStack } from "../WebdevPages/whyTechStack/WhyTechStack";

export const PythonPage = () => {
  return (
    <div>
      <WebdevBanner bannerContent={pythonBanner} />
      <Techstackintro techContent={pythonstackIntro} />
      <WebDevServices webservicesContent={pythonwebDevServices} />
      <WhyTechStack techData={whyPython} />
      <GetStarted />
      <WebDevWhy whyDevContent={pythonWhyContent} />
    </div>
  );
};
