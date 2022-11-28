import React from "react";
import "./DataSciencePage.css";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

// ----- Importing main sub react components of the page -----
import { DataScienceBanner } from "./DataScienceBanner/DataScienceBanner";
import { DataScienceBF } from "./DataScienceBF/DataScienceBF";
import { DataScienceMidBanner } from "./DataScienceMidBanner/DataScienceMidBanner";
import { DataScienceUnique } from "./DataScienceUnique/DataScienceUnique";
import { DataScienceServices } from "./DataScienceServices/DataScienceServices";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";
import { DataScienceSlider } from "./DataScienceSlider/DataScienceSlider";
import { DataScienceMethods } from "./DataScienceMethods/DataScienceMethods";

export const DataSciencePage = () => {
  return (
    <div style={{ color: "#393939" }}>
      <DataScienceBanner />
      <DataScienceUnique />
      <DataScienceServices />
      <DataScienceMidBanner />
      <DataScienceBF />
      <DataScienceMethods />
      <DataScienceSlider />
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
