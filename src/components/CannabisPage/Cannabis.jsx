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
import Cannabisadmin from "./Cannabisadmin";
import Cannabiscontainer from "./Cannabiscontainer";
import Cannabiscustomersection from "./Cannabiscustomersection";
import Cannabisdrive from "./Cannabisdrive";
import Cannabisoverview from "./Cannabisoverview";
import Cannabissolution from "./Cannabissolution";

export default function Cannabis() {
  return (
    <div>
      <Cannabiscontainer />
      <Cannabissolution />
      <Cannabisoverview />
      <Cannabiscustomersection />
      <Cannabisadmin />
      <Cannabisdrive />
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
}
