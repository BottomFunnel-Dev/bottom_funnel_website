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
import Pharmacyadmin from "./Pharmacyadmin";
import Pharmacycontainer from "./Pharmacycontainer";
import Pharmacycustomer from "./Pharmacycustomer";
import Pharmacydelivery from "./Pharmacydelivery";
import Pharmacydrive from "./Pharmacydrive";
import Pharmacysneak from "./Pharmacysneak";

export default function Pharmacy() {
  return (
    <div>
      <Pharmacycontainer />
      <Pharmacydelivery />
      <Pharmacysneak />
      <Pharmacycustomer />
      <Pharmacydrive />
      <Pharmacyadmin />

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
