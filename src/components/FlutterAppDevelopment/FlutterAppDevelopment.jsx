import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { FluterDevelopmentExpertise } from "./FluterDevelopmentExpertise/FluterDevelopmentExpertise";
import { FlutterAppDevelopmentBanner } from "./FlutterAppDevelopmentBanner/FlutterAppDevelopmentBanner";
import { FlutterAppDevelopmentDreamProject } from "./FlutterAppDevelopmentDreamProject/FlutterAppDevelopmentDreamProject";
import { FlutterCrossPlatform } from "./FlutterCrossPlatform/FlutterCrossPlatform";
import { FlutterServices } from "./FlutterServices/FlutterServices";
import { WhyFlutter } from "./WhyFlutter/WhyFlutter";

// ----- Other required react components -----

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

export const FlutterAppDevelopment = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <>
      <div>
        <FlutterAppDevelopmentBanner />
        <FlutterServices />
        <WhyFlutter />
        <FlutterCrossPlatform />
        <FlutterAppDevelopmentDreamProject />
        <FluterDevelopmentExpertise />
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
    </>
  );
};
