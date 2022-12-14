import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { WhyChooseXamarin } from "./WhyChooseXamarin/WhyChooseXamarin";
import { XamarinAppDevelopmentBanner } from "./XamarinAppDevelopmentBanner/XamarinAppDevelopmentBanner";
import { XamarinApproach } from "./XamarinApproach/XamarinApproach";
import { XamarinDevelopers } from "./XamarinDevelopers/XamarinDevelopers";
import { XamarinDevelopmentExpertise } from "./XamarinDevelopmentExpertise/XamarinDevelopmentExpertise";
import { XamarinMobileDevelopment } from "./XamarinMobileDevelopment/XamarinMobileDevelopment";
import { XamarinSolutions } from "./XamarinSolutions/XamarinSolutions";

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

export const XamarinAppDevelopment = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <>
      <div>
        <XamarinAppDevelopmentBanner />
        <XamarinMobileDevelopment />
        <XamarinSolutions />
        <WhyChooseXamarin />
        <XamarinDevelopers />
        <XamarinApproach />
        <XamarinDevelopmentExpertise />

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
