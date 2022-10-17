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
import { FoodDeliveryAdminPanel } from "./foodDeliveryAdminPanel";
import { FoodDeliveryAdvanceTech } from "./foodDeliveryAdvanceTech";
import { FoodDeliveryBanner } from "./FoodDeliveryBanner";
import { FoodDeliveryBookCall } from "./FoodDeliveryBookCall";
import { FoodDeliveryExluciveApp } from "./FoodDeliveryExluciveApp";
import { FoodDeliveryNeedSuccess } from "./FoodDeliveryNeedSuccess";
import "./FoodDeliveryPage.css";
import { FoodDeliveryPartnerApp } from "./FoodDeliveryPartnerApp";

export const FoodDelivery = () => {
  return (
    <div>
      {<FoodDeliveryBanner />}
      {/* <div className="food-delivery-content"> */}
        {<FoodDeliveryBookCall />}
        {<FoodDeliveryExluciveApp />}
     

      {<FoodDeliveryAdvanceTech />}
      {<FoodDeliveryAdminPanel />}
      {<FoodDeliveryPartnerApp />}
      {<FoodDeliveryNeedSuccess />}
      <PortFolio/>
      <StoriesSection/>
      <Industries/>
      <OndemandSection/>
      <PlanProject/>
      <Revamping/>
      <SeoblogSection/>
      <TextDropdown/>
      <ContectForm/>
      <MainFooter/>
    </div>
  );
};
