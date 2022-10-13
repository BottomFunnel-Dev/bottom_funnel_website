import React from "react";
import { Companystats } from "../CompanyStats/Companystats";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import PlanProject from "../PlanProject/PlanProject";
import PortFolio from "../PortFolioSection/PortFolio";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import { PhPBanner } from "./PhPBanner";
import { PhPBookCall } from "./PhPBookCall";
import { PhPDescription } from "./PhPDes";
import { PhPRemarkable } from "./PhPRemarkable";
import { PhPWhyApplication } from "./PhPWhyApp";
import { PhPWhyBottomFunnel } from "./PhPWhyBF";

export const PhPSkillsPage = () => {
  return (
    <div>
      {<PhPBanner />}
      {/* {<PhPBannerNavigation />} */}
      <hr id="php-hr" />
      {<PhPDescription />}
      {<PhPWhyApplication />}
      {<PhPWhyBottomFunnel />}
      {<PhPBookCall />}
      {<PhPRemarkable />}
      <StoriesSection/>
      <PortFolio/>
      <PlanProject/>
      <Companystats/>
      <Revamping/>
      <SeoblogSection/>
      <TextDropdown/>
      <ContectForm/>
      <MainFooter/>


    </div>
  );
};
