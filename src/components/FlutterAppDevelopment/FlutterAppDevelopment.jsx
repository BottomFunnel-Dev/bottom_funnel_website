import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { FluterDevelopmentExpertise } from "./FluterDevelopmentExpertise/FluterDevelopmentExpertise";
import { FlutterAppDevelopmentBanner } from "./FlutterAppDevelopmentBanner/FlutterAppDevelopmentBanner";
import { FlutterAppDevelopmentDreamProject } from "./FlutterAppDevelopmentDreamProject/FlutterAppDevelopmentDreamProject";
import { FlutterCrossPlatform } from "./FlutterCrossPlatform/FlutterCrossPlatform";
import { FlutterServices } from "./FlutterServices/FlutterServices";
import { WhyFlutter } from "./WhyFlutter/WhyFlutter";

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




export const FlutterAppDevelopment = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);


  return (
      <>
        <div>
          <FlutterAppDevelopmentBanner/>
          <FlutterServices/>
          <WhyFlutter/>
          <FlutterCrossPlatform/>
          <FlutterAppDevelopmentDreamProject/>
          <FluterDevelopmentExpertise/>


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
      </>
  );
};
