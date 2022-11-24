import React from "react";
import "./CustomisedWebPage.css";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

// ---- Customised web development page other sub components -----

import { CustomisedWebBanner } from "./CustomisedWebBanner/CustomisedWebBanner";
import { CustomisedWebUnique } from "./CustomisedWebUnique/CustomisedWebUnique";
import { CustomisedWebServices } from "./CustomisedWebServices/CustomisedWebServices";
import { CustomWebSolutions } from "./CustomWebSolutions/CustomWebSolutions";
import { CustomWebMidBanner } from "./CustomWebMidBanner/CustomWebMidBanner";
import { CustomWebForm } from "./CustomWebForm/CustomWebForm";
import { CustomWebWhyBF } from "./CustomWebWhyBF/CustomWebWhyBF";
import { CustomWebSlider } from "./CustomWebSlider/CustomWebSlider";

export const CustomisedWebPage = () => {
  return (
    <div className="CustomisedWebPage-container">
      <CustomisedWebBanner />
      <CustomisedWebUnique />
      <CustomisedWebServices />
      <CustomWebSolutions />
      <CustomWebMidBanner />
      <CustomWebWhyBF />
      <CustomWebSlider />
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
