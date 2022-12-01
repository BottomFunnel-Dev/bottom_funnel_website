import React from "react";
import { WebdevBanner } from "../WebdevPages/bannerWebdev/WebdevBanner";
import { javaBanner } from "../../Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../WebdevPages/techStackintro/Techstackintro";
import { javastackIntro } from "../../Data/webdevPageData/StackData";
import { WebDevServices } from "../WebdevPages/webdevServices/WebDevServices";
import {javawebDevServices } from "../../Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../WebdevPages/whyTechStack/WhyTechStack";
import {whyJava } from "../../Data/webdevPageData/whyTechStack";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebdevPages/webDevWhy/WebDevWhy";
import {javaWhyContent } from "../../Data/webdevPageData/whyBottomContent";
export const Javapage = () => {
  return (
    <div>
      <WebdevBanner bannerContent={javaBanner} />
      <Techstackintro techContent={javastackIntro} />
      <WebDevServices webservicesContent={javawebDevServices} />
      <WhyTechStack techData={whyJava} />
      <GetStarted />
      <WebDevWhy whyDevContent={javaWhyContent} />
    </div>
  );
};
