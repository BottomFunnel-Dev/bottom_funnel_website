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

// ----- Other requried react components -----
import StoriesSection from "../StoriesSection/StoriesSection";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";

export const MeanPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          Best Ruby Development Company | Hire Mean stack Developer | Bottom
          Funnel
        </title>
        <meta
          name="description"
          content="Bottom Funnel is one of the most affordable mean stack development company. Hire our dedicated ruby developers for your web and app development."
        />
      </Helmet>
      <WebdevBanner bannerContent={meanBanner} />
      <Techstackintro techContent={meanstackIntro} />
      <WebDevServices webservicesContent={meanDevServices} />
      <WhyTechStack techData={whyMEAN} />
      <GetStarted />
      <WebDevWhy whyDevContent={MEANWhyContent} />

      {/* Other react required components */}
      <StoriesSection />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
