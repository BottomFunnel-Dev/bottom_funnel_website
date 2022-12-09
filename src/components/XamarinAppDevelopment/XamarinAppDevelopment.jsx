import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { WhyChooseXamarin } from "./WhyChooseXamarin/WhyChooseXamarin";
import { XamarinAppDevelopmentBanner } from "./XamarinAppDevelopmentBanner/XamarinAppDevelopmentBanner";
import { XamarinDevelopers } from "./XamarinDevelopers/XamarinDevelopers";
import { XamarinDevelopmentExpertise } from "./XamarinDevelopmentExpertise/XamarinDevelopmentExpertise";
import { XamarinMobileDevelopment } from "./XamarinMobileDevelopment/XamarinMobileDevelopment";

// ----- Other required react components -----

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

export const XamarinAppDevelopment = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <XamarinAppDevelopmentBanner />
      <XamarinMobileDevelopment />
      <XamarinDevelopers />
      <WhyChooseXamarin />

      <XamarinDevelopmentExpertise />
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
