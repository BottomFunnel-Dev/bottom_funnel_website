import React from "react";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import PortFolio from "../PortFolioSection/PortFolio";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import { Saasbanner } from "./Saasbanner/Saasbanner";
import { SaasExpetise } from "./SaasExpetise/SaasExpetise";
import "./SaasPage.css";
import { SaasStrategy } from "./SaasStrategy/SaasStrategy";
import { SaasSuite } from "./SaasSuite/SaasSuite";
import { SaasValuable } from "./SaasValuable/SaasValuable";

export const SaasPage = () => {
  return (
    <div>
      <Saasbanner />
      <SaasExpetise />
      <SaasSuite />
      <SaasValuable />
      <SaasStrategy />
      <StoriesSection/>
      <Industries/>
      <PlanProject/>
      <PortFolio/>
      <OndemandSection/>
      <Revamping/>
      <SeoblogSection/>
      <TextDropdown/>
      <ContectForm/>
      <MainFooter/>
    </div>
  );
};
