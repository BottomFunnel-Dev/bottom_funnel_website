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
import Beautycontainer from "./Beautycontainer";
import Disscus from "./Disscus";
import Diversesection from "./Diversesection";
import Feature from "./Feature";
import Solution from "./Solution";
import Whysection from "./Whysection";

export default function Beautysection() {
  return (
    <div>
      <Beautycontainer />
      <Diversesection />
      <Disscus />
      <Feature />
      <Solution />
      <Whysection />
      <StoriesSection />
      <Industries />
      <Revamping/>
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
