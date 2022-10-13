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
<<<<<<< HEAD
import PortFolio from "../../PortFolioSection/PortFolio";

=======
import Portfolio from "../../PortFolioSection/PortFolio";
import PortSection from "../../PortFolioSection/PortSection";
>>>>>>> a5df2abb3ea8256c6b74fe4787e7a6ac65fb98c8

const Home = () => {
  return (
    <div>
      <Banner />
<<<<<<< HEAD
=======
      {/* <HeroSection /> */}
>>>>>>> a5df2abb3ea8256c6b74fe4787e7a6ac65fb98c8
      <CompanyLogo />
      <About />
      <Services />
      <Awards />
      <StoriesSection />
      <Industries />
      <OndemandSection />
      <PortFolio/>
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

export default Home;
