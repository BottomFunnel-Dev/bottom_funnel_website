import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./StartupSolutions.css";

import { StartupSolMidBanner } from "./StartupSolMidBanner/StartupSolMidBanner";
import { StartupSolOffer } from "./StartupSolOffer/StartupSolOffer";
import { StartupSolOfferCard } from "./StartupSolOfferCard/StartupSolOfferCard";
import { StartupSolPartner } from "./StartupSolPartner/StartupSolPartner";
import { StartupSolutionsBanner } from "./StartupSolutionsBanner/StartupSolutionsBanner";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";
import { StartupSolWhyBF } from "./StartupSolWhyBF/StartupSolWhyBF";
// ----- Importing react components -----
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";

export const StartupSolutions = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div className="StartupSolutions-main">
      <Helmet>
        <title>
          Startup Consulting Services | Hire Startup Consultants In India, USA |
          Bottom Funnel
        </title>
        <meta
          name="description"
          content="Bottom Funnel is providing the best startup consulting services in India, USA. Our app development team has expertise in research, startup formation, branding, scaling, & unprecedented challenges."
        />
      </Helmet>
      <StartupSolutionsBanner />
      <StartupSolPartner />
      <StartupSolOffer />
      <StartupSolOfferCard />
      <StartupSolMidBanner />
      <StartupSolWhyBF />
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
