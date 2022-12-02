import React, { useEffect } from "react";
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
import FlowerDeliveryAdmin from "./FlowerDeliveryAdmin";
import FlowerDeliveryBanner from "./FlowerDeliveryBanner";
import FlowerDeliveryBannerbottom from "./FlowerDeliveryBannerbottom";
import FlowerDeliveryDriver from "./FlowerDeliveryDriver";
import FlowerDeliverylast from "./FlowerDeliverylast";
import { FlowerDeliveryService } from "./FlowerDeliveryService";
import FlowerDeliverySolution from "./FlowerDeliverySolution";

import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

export const FlowerDelevry = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor("black"));
  }, []);

  return (
    <div>
      <FlowerDeliveryBanner />
      <FlowerDeliveryService />
      <FlowerDeliverySolution />
      <FlowerDeliveryDriver />
      <FlowerDeliveryAdmin />
      <FlowerDeliveryBannerbottom />
      <FlowerDeliverylast />

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
