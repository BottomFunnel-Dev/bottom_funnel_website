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
import { AlcoholBanner } from "./AlcoholBanner/AlcoholBanner";
import { AlcoholBookCall } from "./AlcoholBookCall/AlcoholBookCall";
import "./AlcoholDeliveryPage.css";
import { AlcoholSolutions } from "./AlcoholSolutions/AlcoholSolutions";
import { AlcoholSuggestions } from "./AlcoholSuggestions/AlcoholSuggestions";

export const AlcoholDeliveryPage = () => {
  return (
    <div>
      <AlcoholBanner />
      <AlcoholBookCall />
      <AlcoholSuggestions />
      <AlcoholSolutions />
      <PortFolio />
      <StoriesSection />
      <Industries />
      <PlanProject />
      <OndemandSection />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};