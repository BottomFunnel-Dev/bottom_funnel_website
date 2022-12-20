import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { WebdevBanner } from "../WebdevPages/bannerWebdev/WebdevBanner";
import { aspnetBanner } from "../../Data/webdevPageData/TechBannerData";
import { WebDevServices } from "../WebdevPages/webdevServices/WebDevServices";

import { aspnetwebDevServices } from "../../Data/webdevPageData/Popularservices";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebdevPages/webDevWhy/WebDevWhy";
import { aspnetWhyContent } from "../../Data/webdevPageData/whyBottomContent";
import { WhyTechStack } from "../WebdevPages/whyTechStack/WhyTechStack";
import { whyAspnet } from "../../Data/webdevPageData/whyTechStack";
import { Techstackintro } from "../WebdevPages/techStackintro/Techstackintro";
import { aspstackIntro } from "../../Data/webdevPageData/StackData";
export const AspNetPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "white", logo: true}));
  }, []);
  
  return (
    <div>
      <WebdevBanner bannerContent={aspnetBanner} />
      <Techstackintro techContent={aspstackIntro} />
      <WebDevServices webservicesContent={aspnetwebDevServices}/>
      <WhyTechStack techData={whyAspnet}/>
      <GetStarted/>
      <WebDevWhy whyDevContent={aspnetWhyContent} />
    </div>
  );
};
