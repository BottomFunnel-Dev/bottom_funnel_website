import React from "react";
import { AppBuilderCreate } from "./AppBuilderCreate";
import { AppBuilderDiscoverApp } from "./AppBuilderDiscoverApp";
import { AppBuilderMaker } from "./AppBuilderMaker";
import { AppBuilderSolutionBanner } from "./AppBuilderSolutionBanner";
import { AppBuilderWhyShuld } from "./AppBuilderWhyShuld";

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

export const AppBuilderSoltion = () => {
  return (
    <div>
      <AppBuilderSolutionBanner />
      <AppBuilderDiscoverApp />
      <AppBuilderWhyShuld />
      <AppBuilderCreate />
      {/* <AppBuilderMaker /> */}

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
  );
};
