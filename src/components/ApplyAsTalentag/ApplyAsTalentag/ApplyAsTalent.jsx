import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";

import { AboutSolution } from "./AboutSolution/AboutSolution";
import { ApplicationProcess } from "./ApplicationProcess/ApplicationProcess";
import { OurMission } from "./OurMission/OurMission";
import { TalentBanner } from "./TalentBanner/TalentBanner";
import { TalentSolutionCards } from "./TalentSolutionCards/TalentSolutionCards";
import { Talethiring } from "./Talethiring/Talethiring";
import { Helmet } from "react-helmet";

export const ApplyAsTalent = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Digital transformation services | Bottom Funnel</title>
        <meta
          name="description"
          content="We are a digital transformation services company helping businesses with digital transformation consulting, strategy, automation application modernization."
        />
      </Helmet>
      <TalentBanner />
      <AboutSolution />
      <OurMission />
      <TalentSolutionCards />
      <Talethiring />
      <ApplicationProcess />
      {/* ----- End of main page. Now Further components ----- */}
      <Industries />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
