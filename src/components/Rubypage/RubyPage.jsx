import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { rubywebDevServices } from "../../Data/webdevPageData/Popularservices";
import { rubystackIntro } from "../../Data/webdevPageData/StackData";
import { rubyBanner } from "../../Data/webdevPageData/TechBannerData";
import { rubyWhyContent } from "../../Data/webdevPageData/whyBottomContent";
import { whyRuby } from "../../Data/webdevPageData/whyTechStack";
import { Techstackintro } from "../WebdevPages/techStackintro/Techstackintro";
import { WebdevBanner } from "../WebdevPages/bannerWebdev/WebdevBanner";
import { WebDevServices } from "../WebdevPages/webdevServices/WebDevServices";
import { WebDevWhy } from "../WebdevPages/webDevWhy/WebDevWhy";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import { WhyTechStack } from "../WebdevPages/whyTechStack/WhyTechStack";
export const RubyPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  
  return (
    <div>
      <WebdevBanner bannerContent={rubyBanner} />
      <Techstackintro techContent={rubystackIntro} />
      <WebDevServices webservicesContent={rubywebDevServices} />
      <WhyTechStack techData={whyRuby} />
      <GetStarted />
      <WebDevWhy whyDevContent={rubyWhyContent} />
    </div>
  );
};
