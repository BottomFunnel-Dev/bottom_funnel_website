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
import Taxibookingadmin from "./Taxibookingadmin";
import Taxibookingcontainer from "./Taxibookingcontainer";
import Taxibuild from "./Taxibuild";
import Taxicustomer from "./Taxicustomer";
import Taxidrive from "./Taxidrive";
import Taxioccasion from "./Taxioccasion";
import Taxiourcycle from "./Taxiourcycle";

export const Taxibooking = () => {
  return (
    <div>
      <Taxibookingcontainer />
      <Taxioccasion />
      <Taxibuild />
      <Taxicustomer />
      <Taxibookingadmin />
      <Taxidrive />
      <Taxiourcycle />
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
};
