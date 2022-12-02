import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  
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
