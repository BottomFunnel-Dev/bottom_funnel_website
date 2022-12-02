import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { WebdevBanner } from "../WebdevPages/bannerWebdev/WebdevBanner";
import { javascriptBanner } from "../../Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../WebdevPages/techStackintro/Techstackintro";
import { javascriptstackIntro } from "../../Data/webdevPageData/StackData";
import { WebDevServices } from "../WebdevPages/webdevServices/WebDevServices";
import {javascriptwebDevServices } from "../../Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../WebdevPages/whyTechStack/WhyTechStack";
import {whyJavascript } from "../../Data/webdevPageData/whyTechStack";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebdevPages/webDevWhy/WebDevWhy";
import {javascriptWhyContent } from "../../Data/webdevPageData/whyBottomContent";
export const JavascriptPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  
  return (
    <div>
      <WebdevBanner bannerContent={javascriptBanner} />
      <Techstackintro techContent={javascriptstackIntro} />
      <WebDevServices webservicesContent={javascriptwebDevServices} />
      <WhyTechStack techData={whyJavascript} />
      <GetStarted />
      <WebDevWhy whyDevContent={javascriptWhyContent} />
    </div>
  );
};
