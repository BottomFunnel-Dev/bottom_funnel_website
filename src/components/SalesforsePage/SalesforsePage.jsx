import React from "react";
import "./SalesforsePage.css";

// ----- React main sub components -----

import { SaleforceBanner } from "./SaleforceBanner/SaleforceBanner";
import { SalesforceMidBanner } from "./SalesforceMidBanner/SalesforceMidBanner";
import { SalesforceOffers } from "./SalesforceOffers/SalesforceOffers";
import { SalesforceServices } from "./SalesforceServices/SalesforceServices";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";
import { SalesforceWhyBF } from "./SalesforceWhyBF/SalesforceWhyBF";
import { SalesforceProcess } from "./SalesforceProcess/SalesforceProcess";

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

export const SalesforsePage = () => {
  return (
    <div className="SalesforsePage-container">
      <SaleforceBanner />
      <SalesforceServices />
      <SalesforceOffers />
      <SalesforceProcess />
      <SalesforceMidBanner />
      <SalesforceWhyBF />
      <CustomWebForm />
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
