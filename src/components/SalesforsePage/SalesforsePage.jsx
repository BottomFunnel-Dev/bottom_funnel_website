import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
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
import { Helmet } from "react-helmet";

export const SalesforsePage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div className="SalesforsePage-container">
      <Helmet>
        <title>Best Salesforce Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom Funnel is here to help you improve your entire company processes and find answers to crucial business problems."
        />
      </Helmet>
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
