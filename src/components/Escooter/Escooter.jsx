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
import { EscooterAdmin } from "./EscooterAdmin";
import Escooterbusiness from "./Escooterbusiness";
import { Escooterhardware } from "./Escooterhardware";
import Escootersection from "./Escootersection";
import Escooterstealing from "./Escooterstealing";
import Escooterthunder from "./Escooterthunder";
import Keyarea from "./Keyarea";

export default function Escooter() {
  return (
    <div>
      <Escootersection />
      <Escooterbusiness />
      <Escooterstealing />
      <Escooterthunder />
      <Keyarea />
      <Escooterhardware />
      <EscooterAdmin />
      <StoriesSection />
      <Industries />
      <PlanProject />
      <OndemandSection />
      <PortFolio />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
