import React from "react";
import { Companystats } from "../CompanyStats/Companystats";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import { NodejsBanner } from "./nodejsBanner";
import { NodejsBookCall } from "./nodejsBookCall";
import { NodejsDescription } from "./nodejsDes";
import { NodejsRemarkable } from "./nodejsRemarkable";
import { NodejsWhyApplication } from "./nodejsWhyApp";
import { NodejsWhyBottomFunnel } from "./nodejsWhyBF";
import { NodejsBannerNavigation } from "./nodjsBannerNav";

export const NodejsPage = () => {
  return (
    <div>
      {<NodejsBanner />}
      {<NodejsBannerNavigation />}
      <hr id="nodejs-hr" />
      {<NodejsDescription />}
      {<NodejsRemarkable />}
      {<NodejsWhyBottomFunnel />}
      {<NodejsBookCall />}
      {<NodejsWhyApplication />}
      <StoriesSection/>
      <Industries/>
      <OndemandSection/>
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
