import React from "react";


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

import { IonicAppBanner } from "./IonicAppBanner/IonicAppBanner";
import { IonicBottomFunnel } from "./IonicBottomFunnel/IonicBottomFunnel";
import { WhyChooseIonic } from "./WhyChooseIonic/WhyChooseIonic";
import { IonicProject } from "./IonicProject/IonicProject";
import { IonicDevelopmentExpertise } from "./IonicDevelopmentExpertise/IonicDevelopmentExpertise";
import { IonicCrossPlatform} from "./IonicCrossPlatform/IonicCrossPlatform";
import { IonicServices } from "./IonicServices/IonicServices";
import { WhyChooseIonicBottomFunnel } from "./WhyChooseIonicBottomFunnel/WhyChooseIonicBottomFunnel";



export const IonicAppDevelopment = () => {

  return (
      <>
        <div>
            <IonicAppBanner/>
            <IonicBottomFunnel/>
            <IonicServices/>
            <WhyChooseIonic/>
            <IonicCrossPlatform/>
            <WhyChooseIonicBottomFunnel/>
            <IonicProject/>
            <IonicDevelopmentExpertise/>

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
