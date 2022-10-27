import React from "react";
import Navbar from "../../Navbar/Navbar";
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
import HeroSection from "../../mainSection/HeroSection";
import PortFolio from "../../PortFolioSection/PortFolio";
import PortSection from "../../PortFolioSection/PortSection";

import VerticalCarousel from "../../Carousel/IndustriesCarousel";
import VerticalSilder from "../../Carousel/VerticalSilder";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* <HeroSection /> */}
      {/* <VerticalCarousel /> */}
      {/* <VerticalSilder/> */}

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
