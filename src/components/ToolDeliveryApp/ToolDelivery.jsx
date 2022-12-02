import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
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
import TooDeliveryBanner from "./TooDeliveryBanner";
import { ToolDeliveryAdmin } from "./ToolDeliveryAdmin";

import ToolDeliveryCustomer from "./ToolDeliveryCustomer";
import ToolDeliveryDriver from "./ToolDeliveryDriver";
import ToolDeliveryFooter from "./ToolDeliveryFooter";
import ToolDeliveryLowerBanner from "./ToolDeliveryLowerBanner";
import ToolDeliveryService from "./ToolDeliveryService";
import ToolDeliverysneak from "./ToolDeliverysneak";

const ToolDelivery = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div>
      <TooDeliveryBanner />
      <ToolDeliveryService />
      <ToolDeliverysneak />
      <ToolDeliveryCustomer />
      <ToolDeliveryDriver />
      <ToolDeliveryAdmin />
      <ToolDeliveryLowerBanner />
      <ToolDeliveryFooter />

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

export default ToolDelivery;
