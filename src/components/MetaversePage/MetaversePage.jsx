import React from "react";
import "./MetaversePage.css";

// ----- React page main components -----

import { MetaverseBanner } from "./MetaverseBanner/MetaverseBanner";
import { MetaverseServices } from "./MetaverseServices/MetaverseServices";
import { MetaverseOffers } from "./MetaverseOffers/MetaverseOffers";
import { MetaverseMidBanner } from "./MetaverseMidBanner/MetaverseMidBanner";
import { MetaverseWhyBF } from "./MetaverseWhyBF/MetaverseWhyBF";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";

// ----- Other required react components -----

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
export const MetaversePage = () => {
  return (
    <div className="MetaversePage-container">
      <MetaverseBanner />
      <MetaverseServices />
      <MetaverseOffers />
      <MetaverseMidBanner />
      <MetaverseWhyBF />
      <CustomWebForm />
      {/* ----- End of main page. Now Further components ----- */}
      <Industries />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <MainFooter />
    </div>
  );
};
