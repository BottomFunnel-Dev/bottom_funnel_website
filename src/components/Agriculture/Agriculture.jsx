import React, { useEffect } from "react";
import "./Agriculture.css";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { AgricultureBanner } from "./AgricultureBanner/AgricultureBanner";
import AgricultureCustomerApp from "./AgricultureCustomerApp/AgricultureCustomerApp";

import {
  logisticsCustomer,
  agricultureConsumerApp,
  agricultureAdmin,
} from "../../Data/agriculture.js";

import { AgricultureSolutions } from "./AgricultureSolutions/AgricultureSolutions";
import AgricultureAdminPanel from "./AgricultureAdminPanel/AgricultureAdminPanel";
import AgricultureConsumerApp from "./AgricultureConsumerApp/AgricultureConsumerApp";
import { AgricultureWhyChooseus } from "./AgricultureWhyChooseUs/AgricultureWhyChooseus";

import StoriesSection from "../StoriesSection/StoriesSection";
import { Industries } from "../industries/Industries";
import PlanProject from "../PlanProject/PlanProject";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";

export const Agriculture = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);
  return (
    <div>
      <AgricultureBanner />

      <AgricultureSolutions />

      <AgricultureCustomerApp agricultureCustomerApp={logisticsCustomer} />
      <AgricultureConsumerApp driveData={agricultureConsumerApp} />
      <AgricultureAdminPanel plantBasedAdminData={agricultureAdmin} />

      {/* <AgricultureWhyChooseus /> */}

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
};
