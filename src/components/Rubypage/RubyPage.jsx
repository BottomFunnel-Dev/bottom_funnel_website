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

export const RubyPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>
          Best Ruby Development Company | Hire Ruby Developer | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Bottom Funnel is one of the most affordable ruby development company. Hire our dedicated ruby developers for your web and app development."
        />
      </Helmet>
      <WebdevBanner bannerContent={rubyBanner} />
      <Techstackintro techContent={rubystackIntro} />
      <WebDevServices webservicesContent={rubywebDevServices} />
      <WhyTechStack techData={whyRuby} />
      <GetStarted />
      <WebDevWhy whyDevContent={rubyWhyContent} />
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
