import React from "react";
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

export const EngagementPage = () => {
  return (
    <div className="EngagementPage-container">
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
