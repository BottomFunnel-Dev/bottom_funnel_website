import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { pythonwebDevServices } from "../../Data/webdevPageData/Popularservices";
import { pythonstackIntro } from "../../Data/webdevPageData/StackData";
import { pythonBanner } from "../../Data/webdevPageData/TechBannerData";
import { pythonWhyContent } from "../../Data/webdevPageData/whyBottomContent";
import { whyPython } from "../../Data/webdevPageData/whyTechStack";
import { Techstackintro } from "../WebdevPages/techStackintro/Techstackintro";
import { WebdevBanner } from "../WebdevPages/bannerWebdev/WebdevBanner";
import { WebDevServices } from "../WebdevPages/webdevServices/WebDevServices";
import { WebDevWhy } from "../WebdevPages/webDevWhy/WebDevWhy";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import { WhyTechStack } from "../WebdevPages/whyTechStack/WhyTechStack";
import { Helmet } from "react-helmet";

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

export const PythonPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>
          Best Python Development Company | Hire Python Developer | Bottom
          Funnel
        </title>
        <meta
          name="description"
          content="Bottom Funnel is one of the most affordable python development company. Hire our dedicated python developers for your web and app development."
        />
      </Helmet>
      <WebdevBanner bannerContent={pythonBanner} />
      <Techstackintro techContent={pythonstackIntro} />
      <WebDevServices webservicesContent={pythonwebDevServices} />
      <WhyTechStack techData={whyPython} />
      <GetStarted />
      <WebDevWhy whyDevContent={pythonWhyContent} />
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
