import React from "react";
import { SkillsComBanner } from "./SkillsComBanner";
import { SkillsComBookCall } from "./SkillsComBookCall";
import { SkillsComDes } from "./SkillsComDes";
import { SkillsComRemarkable } from "./SkillsComRemarkable";
import { SkillsComWhyApp } from "./SkillsComWhyApp";
import { SkillsComWhyBF } from "./SkillsComWhyBF";
import { SkillsComBannerNav } from "./SkillsComBannerNav";

import "./SkillsComPage.css";
import StoriesSection from "../StoriesSection/StoriesSection";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";

export const SkillsComPage = ({ allData }) => {
  const {
    title,
    description,
    isBanner,
    BannerData,
    isDes,
    desData,
    isWhyApp,
    WhyAppData,
    isWhyBF,
    WhyBFData,
    isBookCall,
    BookCallData,
    isRemarkable,
    RemarkableData,
  } = allData;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {isBanner ? <SkillsComBanner data={BannerData} /> : null}
      {/* {<SkillsComBannerNav />} */}
      <hr id="skills-hr" />
      {isDes ? <SkillsComDes DescrptionData={desData} /> : null}
      {isWhyApp ? <SkillsComWhyApp data={WhyAppData} /> : null}
      {isWhyBF ? <SkillsComWhyBF data={WhyBFData} /> : null}
      {isBookCall ? <SkillsComBookCall data={BookCallData} /> : null}
      {isRemarkable ? <SkillsComRemarkable data={RemarkableData} /> : null}
      <StoriesSection />
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
