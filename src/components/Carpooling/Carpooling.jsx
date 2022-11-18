import React from "react";
import Logiccustomer from "../Logistic/Logiccustomer";
import { CarpoolingAction } from "./CarpoolingAction";
import { CarpoolingBanner } from "./CarpoolingBanner";
import { CarpoolingRide } from "./CarpoolingRide";
import { CarpoolingSolutions } from "./CarpoolingSolutions";
import { CarpoolingWhy } from "./CarpoolingWhy";
import {
  carpoolCustomer,
  carpoolAdmin,
  carpoolDrive,
} from "../../Data/panelsData";
import Logicdrive from "../Logistic/Logicdrive";
import Logisticadmin from "../Logistic/Logisticadmin";
import StoriesSection from "../StoriesSection/StoriesSection";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";

export const Carpooling = () => {
  return (
    <div>
      <CarpoolingBanner />
      <CarpoolingRide />
      <CarpoolingSolutions />
      <Logiccustomer customerData={carpoolCustomer} />
      <Logicdrive driveData={carpoolDrive} />
      <Logisticadmin adminData={carpoolAdmin} />
      
      <CarpoolingAction />
      <CarpoolingWhy />

      <StoriesSection />
      <Industries />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <Revamping />
      <SeoblogSection />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
