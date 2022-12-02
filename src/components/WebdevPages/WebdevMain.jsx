import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { WebdevBanner } from "./bannerWebdev/WebdevBanner";
import { webDevMain } from "../../Data/webdevPageData/TechBannerData";
import { WebDevServices } from "./webdevServices/WebDevServices";
import { webDevServices } from "../../Data/webdevPageData/Popularservices";
import { GetStarted } from "./webGetStartedCard/GetStarted";
import { WebDevWhy } from "./webDevWhy/WebDevWhy";
import { mernWhyContent } from "../../Data/webdevPageData/whyBottomContent";
import StoriesSection from "../StoriesSection/StoriesSection";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import { WebDevTechStack } from "./webDevTachstack/WebDevTechStack";
export const WebdevMain = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  
  return (
    <div>
      <WebdevBanner bannerContent={webDevMain} />
      <WebDevServices webservicesContent={webDevServices} />
      <GetStarted />
      <WebDevTechStack/>
      <WebDevWhy whyDevContent={mernWhyContent} />

      <StoriesSection />
      <Industries />
      <PlanProject />
      <OndemandSection />
      <PortFolio />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
