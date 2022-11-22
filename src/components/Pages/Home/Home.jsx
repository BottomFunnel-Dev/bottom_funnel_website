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
import { ParallexSection } from "../../Parallex/ParallexSection";
import { Helmet } from "react-helmet";
import EnquiryNow from "../../SEO/EnquiryNow/EnquiryNow";

export const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Bottom Funnel | Global mobile app and web development company
        </title>

        <meta
          name="description"
          content="Bottom Funnel is a leading global mobile app development company in India, US, UAE & UK which offers innovative and customized digital on-demand solutions for cross-platform App and web Development"
        />
      </Helmet>
      <Banner />
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
