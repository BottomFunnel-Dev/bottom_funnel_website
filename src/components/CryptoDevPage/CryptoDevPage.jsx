import React from "react";
import "./CryptoDevPage.css";

// ----- Importing react components -----
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

// ---- Customised cryptocurrency development page other sub components -----

import { CryptoDevApproach } from "./CryptoDevApproach/CryptoDevApproach";
import { CryptoDevBanner } from "./CryptoDevBanner/CryptoDevBanner";
import { CryptoDevBenefit } from "./CryptoDevBenefit/CryptoDevBenefit";
import { CryptoDevcurrency } from "./CryptoDevcurrency/CryptoDevcurrency";
import { CryptoDevService } from "./CryptoDevService/CryptoDevService";
import { CryptoDevWhyBF } from "./CryptoDevWhyBF/CryptoDevWhyBF";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";
import { CryptoDevSlider } from "./CryptoDevSlider/CryptoDevSlider";

export const CryptoDevPage = () => {
  return (
    <div className="CryptoDevPage-container">
      <CryptoDevBanner />
      <CryptoDevcurrency />
      <CryptoDevBenefit />
      <CryptoDevApproach />
      <CryptoDevService />
      <CryptoDevWhyBF />
      <CryptoDevSlider />
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
