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

export const GolangPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>
          Golang Development | Hire Golang developer | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Bottom Funnel is all about making your software development process smooth, efficient, and effective. We offer a wide range of services that will help you find exactly what you need. Whether you're new to the world of software or an experienced pro, we have a solution that's perfect for your needs."
        />
      </Helmet>
      <WebdevBanner bannerContent={golangBanner} />
      <Techstackintro techContent={golangstackIntro} />
      <WebDevServices webservicesContent={golangwebDevServices} />
      <WhyTechStack techData={whyGolang} />
      <GetStarted />
      <WebDevWhy whyDevContent={golangWhyContent} />
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
