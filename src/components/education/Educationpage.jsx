import React from "react";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import PortFolio from "../PortFolioSection/PortFolio";
import Revamping from "../revamping/Revamping";
import StoriesSection from "../StoriesSection/StoriesSection";
import Brand from "./Brand";
import Educationcontainer from "./Educationcontainer";
import Educationquotes from "./Educationquotes";
import Featuresection from "./Featuresection";
import Solutionsection from "./Solutionsection";
import Whychoose from "./Whychoose";

export default function Educationpage() {
  return (
    <div>
      <Educationcontainer />
      <Featuresection />
      <Educationquotes />
      <Solutionsection />
      <Whychoose />
      <Brand />
      <PlanProject />
      <StoriesSection />
      <Industries />
      <Revamping />
      <OndemandSection />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
