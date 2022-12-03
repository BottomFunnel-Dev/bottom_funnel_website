import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { phpstackIntro } from "../../Data/webdevPageData/StackData";
import { WebDevServices } from "../WebdevPages/webdevServices/WebDevServices";
import { phpDevServices } from "../../Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../WebdevPages/whyTechStack/WhyTechStack";
import { whyPHP } from "../../Data/webdevPageData/whyTechStack";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebdevPages/webDevWhy/WebDevWhy";
import { PHPWhyContent } from "../../Data/webdevPageData/whyBottomContent";
import { phpBanner } from "../../Data/webdevPageData/TechBannerData";
import { WebdevBanner } from "../WebdevPages/bannerWebdev/WebdevBanner";
import { Techstackintro } from "../WebdevPages/techStackintro/Techstackintro";


export const PhpPage = () => {
    const dispatch = useDispatch();
    useEffect(function () {
      dispatch(ChnageNavbarColor({color: "black", logo: false}));
    }, []);
  return (
    <div>
 <WebdevBanner bannerContent={phpBanner} />
      <Techstackintro techContent={phpstackIntro} />
      <WebDevServices webservicesContent={phpDevServices} />
      <WhyTechStack techData={whyPHP} />
      <GetStarted />
      <WebDevWhy whyDevContent={PHPWhyContent} />

    </div>
  )
}
