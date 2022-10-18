import React from "react";
import { Companystats } from "../CompanyStats/Companystats";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import ExclusiveFeature from "./ExclusiveFeature";
import HomeServices from "./HomeServices";
import KeyFeatures from "./KeyFeatures";
import OndemandHero from "./OndemandHero";
import OndemandQuote from "./OndemandQuote";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import Portfolio from "../PortFolioSection/PortFolio";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";

const OndemandHome = () => {
  return (
    <div>
      <OndemandHero />
      <OndemandQuote />
      <HomeServices />
      <ExclusiveFeature />
      <KeyFeatures />
      <StoriesSection />
      <Portfolio />
      <Industries />
      <PlanProject />
      <OndemandSection />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};

export default OndemandHome;
