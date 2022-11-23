import React from "react";
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
export const WebdevMain = () => {
  return (
    <div>
      <WebdevBanner bannerContent={webDevMain} />
      <WebDevServices webservicesContent={webDevServices} />
      <GetStarted />
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
