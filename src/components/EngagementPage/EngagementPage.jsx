import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./EngagementPage.css";

// ----- React page main components -----

import { EngagementBanner } from "./EngagementBanner/EngagementBanner";
import { EngagementProcess } from "./EngagementProcess/EngagementProcess";
import { EngagementQuery } from "./EngagementQuery/EngagementQuery";
import { EngagementRanges } from "./EngagementRanges/EngagementRanges";

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

export const EngagementPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div className="EngagementPage-container">
      <Helmet>
        <title>About us | Bottom Funnel</title>
        <meta
          name="description"
          content="Welcome to Bottom Funnel, the world's leading app development company
          for fintech and startup companies. We pride ourselves on delivering
          unparalleled value to our partners, through our experience and
          expertise in the field."
        />
      </Helmet>
      <EngagementBanner />
      <EngagementProcess />
      <EngagementRanges />
      <EngagementQuery />
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
