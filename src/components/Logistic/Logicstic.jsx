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
import { logisticsCustomer,logisticDrive,logisticAdmin } from "../../Data/panelsData";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { logisticsLogo } from "../../Data/SeopartnerData";
export default function Logicstic() {
  return (
    <div>
      <Logisticcontainer />
      <Trusted partnerLogo={logisticsLogo} />
      <Logictransport />
      <Logisticwhy />
      <Logiccustomer customerData={logisticsCustomer}/>
      <Logicdrive driveData={logisticDrive} />
      <Logisticadmin adminData={logisticAdmin} />

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
