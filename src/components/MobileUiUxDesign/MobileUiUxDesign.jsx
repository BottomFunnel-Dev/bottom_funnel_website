import React from "react";
import { MobileKickStart } from "./MobileKickStart";
import { MobileUiUxBanner } from "./MobileUiUxBanner";
import { MobileUiUxToNotched } from "./MobileUiUxToNotched";
import { MobileUXReactNative } from "./MobileUXReactNative";
import { MobileUxUiB2cSolution } from "./MobileUxUiB2cSolution";
import { MobileUxUiDesignPartner } from "./MobileUxUiDesignPartner";
import { MobileUXUIServiceOffer } from "./MobileUXUIServiceOffer";

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

export const MobileUiUxDesign = () => {
  return (
    <div>
      <MobileUiUxBanner />
      <MobileUiUxToNotched />
      <MobileUXUIServiceOffer />
      <MobileUxUiB2cSolution />
      <MobileUxUiDesignPartner />
      <MobileKickStart />
      <MobileUXReactNative />

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
