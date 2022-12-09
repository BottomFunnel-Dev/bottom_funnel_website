import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { AIContentApplication } from "./AIContentApplication";
import { AiContentApplowerbanner } from "./AiContentApplowerbanner";

import { AiContentBanner } from "./AiContentBanner";
import { AiContentHuman } from "./AiContentHuman";
import { AiContentTextOnly } from "./AiContentTextOnly";
import { AiHowDoesWorks } from "./AiHowDoesWorks";

// ----- Other required react components -----

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

export const AiContentServices = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <AiContentBanner />
      <AiContentHuman />
      <AiHowDoesWorks />
      <AIContentApplication />
      <AiContentTextOnly />
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
