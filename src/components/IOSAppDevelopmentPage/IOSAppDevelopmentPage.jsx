import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { Helmet } from "react-helmet";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import PortFolio from "../PortFolioSection/PortFolio";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import { IOSAppDevelopmentPageBanner } from "./IOSAppDevelopmentPageBanner/IOSAppDevelopmentPageBanner";
import { IOSAppDevelopmentPageCards } from "./IOSAppDevelopmentPageCards/IOSAppDevelopmentPageCards";

export const IOSAppDevelopmentPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>
          iOS App Development Company | Hire Iphone App Developers | Bottom
          Funnel
        </title>
        <meta
          name="description"
          content="Bottom Funnel, award-winning iPhone app development company, offers custom iOS iphone apps development services for entrepreneurs small businesses."
        />
      </Helmet>
      <IOSAppDevelopmentPageBanner />
      <IOSAppDevelopmentPageCards />
      <PortFolio />
      <StoriesSection />
      <Industries />
      <OndemandSection />
      <PlanProject />
      <SeoblogSection />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
