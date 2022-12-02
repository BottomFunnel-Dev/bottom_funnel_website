import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  
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
