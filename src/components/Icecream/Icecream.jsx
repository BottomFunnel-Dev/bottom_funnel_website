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
import Icecreamadminpanel from "./Icecreamadminpanel";
import Icecreamcustomer from "./Icecreamcustomer";
import { Icecreamdrive } from "./Icecreamdrive";
import { Icecreamsection } from "./Icecreamsection";
import { Icecreamsolution } from "./Icecreamsolution";

export const Icecream = () => {
  return (
    <div>
      <Icecreamsection />
      <Icecreamsolution />
      <Icecreamcustomer />
      <Icecreamadminpanel />
      <Icecreamdrive />
      <StoriesSection />
      <PortFolio />
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
