import React from "react";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import Brand from "./Brand";

import { Fitnesscontainer } from "./Fitnesscontainer";
import Fitnessexercise from "./Fitnessexercise";
import FitnessFeature from "./FitnessFeature";
import FitnessSolution from "./FitnessSolution";
import FitnessStart from "./FitnessStart";
import Fitnesswhy from "./Fitnesswhy";
import { fitnessLogo } from "../../Data/SeopartnerData";
export const Fitness = () => {
  return (
    <div>
      <Fitnesscontainer />
      <Trusted partnerLogo={fitnessLogo} />
      <Brand />
      <FitnessFeature />
      <FitnessStart />
      <Fitnessexercise />
      <FitnessSolution />
      <Fitnesswhy />
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
