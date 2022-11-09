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
import Logiccustomer from "./Logiccustomer";
import Logicdrive from "./Logicdrive";

import Logictransport from "./Logictransport";
import Logisticadmin from "./Logisticadmin";
import Logisticcontainer from "./Logisticcontainer";
import Logisticwhy from "./Logisticwhy";

export default function Logicstic() {
  return (
    <div>
      <Logisticcontainer />
      <Logictransport />
      <Logisticwhy />
      <Logiccustomer />
      <Logicdrive />
      <Logisticadmin />

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
