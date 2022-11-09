import React from "react";
import Banner from "../../mainSection/Banner";
import CompanyLogo from "../../CompanyLogos/CompanyLogo";
import Services from "../../Services/Services";
import Awards from "../../AwardSection/Awards";
import StoriesSection from "../../StoriesSection/StoriesSection";
import { Industries } from "../../industries/Industries";
import PlanProject from "../../PlanProject/PlanProject";
import { Companystats } from "../../CompanyStats/Companystats";
import Revamping from "../../revamping/Revamping";
import { SeoblogSection } from "../../SeoBlogs/Seoblogs";
import { TextDropdown } from "../../faqSection/Faqs";
import ContectForm from "../../ContectForm/ContectForm";
import About from "../../AboutSection/About";
import MainFooter from "../../FooterSection/MainFooter";
import OndemandSection from "../../OnDemandSection/OndemandSection";
import PortFolio from "../../PortFolioSection/PortFolio";
import {  ParallexSection } from "../../Parallex/ParallexSection";

export const HomePage = () => {
  return (
    <div>
      <Banner />
     {/* <ParallexSection/> */}

      <CompanyLogo />
      <About />
      <Services />
      <Awards />
      <StoriesSection />
      <Industries />
      <OndemandSection />
      <PortFolio />
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
