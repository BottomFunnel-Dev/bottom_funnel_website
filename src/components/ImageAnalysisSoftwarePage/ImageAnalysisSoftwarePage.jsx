import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { AnalysisCoreTask } from "./AnalysisCoreTask/AnalysisCoreTask";
import { AnalysisMidBanner } from "./AnalysisMidBanner/AnalysisMidBanner";
import { AnalysisOffer } from "./AnalysisOffer/AnalysisOffer";
import { AnalysisSwBanner } from "./AnalysisSwBanner/AnalysisSwBanner";
import { AnalysisWhyBF } from "./AnalysisWhyBF/AnalysisWhyBF";
import "./ImageAnalysisSoftwarePage.css";

// ----- Other requried react components -----
import StoriesSection from "../StoriesSection/StoriesSection";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";

export const ImageAnalysisSoftwarePage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div className="ImageAnalysisSoftwarePage-container">
      <Helmet>
        <title>Image analysis software Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Image analysis (IA) is the identification of attributes within an image via digital image processing techniques to make the IA process more accurate and cost-effective."
        />
      </Helmet>
      <AnalysisSwBanner />
      <AnalysisCoreTask />
      <AnalysisOffer />
      <AnalysisMidBanner />
      <AnalysisWhyBF />
      {/* Other react required components */}
      <StoriesSection />
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
