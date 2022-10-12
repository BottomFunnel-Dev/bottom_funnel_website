import React from "react";
import { Companystats } from "../../CompanyStats/Companystats";
import ContectForm from "../../ContectForm/ContectForm";
import { TextDropdown } from "../../faqSection/Faqs";
import MainFooter from "../../FooterSection/MainFooter";
import { Industries } from "../../industries/Industries";
import ExclusiveFeature from "../../OndemandHome/ExclusiveFeature";
import HomeServices from "../../OndemandHome/HomeServices";
import KeyFeatures from "../../OndemandHome/KeyFeatures";
import OndemandHero from "../../OndemandHome/OndemandHero";
import OndemandQuote from "../../OndemandHome/OndemandQuote";
import OndemandSection from "../../OnDemandSection/OndemandSection";
import PlanProject from "../../PlanProject/PlanProject";
import Portfolio from "../../PortFolioSection/PortFolio";
import Revamping from "../../revamping/Revamping";
import { SeoblogSection } from "../../SeoBlogs/Seoblogs";
import StoriesSection from "../../StoriesSection/StoriesSection";

const OndemandHome = () => {
  return (
    <div>
      <OndemandHero />
      <OndemandQuote />
      <HomeServices />
      <ExclusiveFeature />
      <KeyFeatures />
      <StoriesSection />
      <Industries />
      <OndemandSection />
      <Portfolio />
      <PlanProject />
      <Companystats />
      <Revamping />
      <SeoblogSection />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};

export default OndemandHome;
