import React from "react";
import "./VettingPage.css";

// ----- React main sub components -----

import { VettingBanner } from "./VettingBanner/VettingBanner";
import { VettingHiring } from "./VettingHiring/VettingHiring";
import { VettingProcess } from "./VettingProcess/VettingProcess";
import { VettingTalent } from "./VettingTalent/VettingTalent";
import { VettingGrow } from "./VettingGrow/VettingGrow";
import { VettingRoles } from "./VettingRoles/VettingRoles";

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

export const VettingPage = () => {
  return (
    <div className="VettingPage-container">
      <VettingBanner />
      <VettingProcess />
      <VettingTalent />
      <VettingHiring />
      <VettingGrow />
      <VettingRoles />
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
