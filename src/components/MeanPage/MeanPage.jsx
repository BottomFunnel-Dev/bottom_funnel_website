import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { meanstackIntro } from "../../Data/webdevPageData/StackData";
import { WebDevServices } from "../WebdevPages/webdevServices/WebDevServices";
import { meanDevServices } from "../../Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../WebdevPages/whyTechStack/WhyTechStack";
import { whyMEAN } from "../../Data/webdevPageData/whyTechStack";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebdevPages/webDevWhy/WebDevWhy";
import { MEANWhyContent } from "../../Data/webdevPageData/whyBottomContent";
import { meanBanner } from "../../Data/webdevPageData/TechBannerData";
import { WebdevBanner } from "../WebdevPages/bannerWebdev/WebdevBanner";
import { Techstackintro } from "../WebdevPages/techStackintro/Techstackintro";

export const MeanPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div>
      <WebdevBanner bannerContent={meanBanner} />
      <Techstackintro techContent={meanstackIntro} />
      <WebDevServices webservicesContent={meanDevServices} />
      <WhyTechStack techData={whyMEAN} />
      <GetStarted />
      <WebDevWhy whyDevContent={MEANWhyContent} />
    </div>
  );
};
