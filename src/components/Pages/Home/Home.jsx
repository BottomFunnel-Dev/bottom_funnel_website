import React from "react";
import Navbar from "../../Navbar/Navbar";
import Banner from "../../mainSection/Banner";
import CompanyLogo from "../../CompanyLogos/CompanyLogo";
import AboutSection from "../../AboutSection/AboutSection";
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
import Footer from "../../FooterSection/Footer";
import About from "../../AboutSection/About";
import MainFooter from "../../FooterSection/MainFooter";
import FooterTable from "../../FooterSection/FooterTable";
import OndemandSection from "../../OnDemandSection/OndemandSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <CompanyLogo />
      <About />
      <Services />
      <Awards />
      <StoriesSection />
      <Industries />
      <OndemandSection />
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
