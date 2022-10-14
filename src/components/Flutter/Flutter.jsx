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
import { Flutteradvantages, Reactnativeadvantages } from "./Flutteradvantages";
import { Flutterbenefits, Reactnativebenefits } from "./Flutterbenefits";
import {
  Flutterdevelopmentbanner,
  Reactnativedevelopment,
  Reactnativedevelopmentbanner,
} from "./Flutterdevelopmentbanner";
import { Flutterservices, Reactnativeservices } from "./Flutterservices";
import { Flutterwhy, Reactnativewhy } from "./Flutterwhy";

export const Flutter = () => {
  return (
    <div className="_Reactnative">
      <Flutterdevelopmentbanner />
      <Flutterservices />
      <Flutterbenefits />
      <Flutteradvantages />
      <Flutterwhy />
      <PortFolio/>
      <StoriesSection/>
      <Industries/>
      <OndemandSection/>
      <PlanProject/>
      <Revamping/>
      <SeoblogSection/>
      <TextDropdown/>
      <ContectForm/>
      <MainFooter/>

    </div>
  );
};
