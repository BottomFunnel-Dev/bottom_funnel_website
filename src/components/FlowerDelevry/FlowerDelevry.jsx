import React, { useEffect } from "react";

import { FlowerDeliveryBanner } from "./FlowerDeliveryBanner";
import { FlowerDeliveryService } from "./FlowerDeliveryService";
import { FlowerDeliverySolution } from "./FlowerDeliverySolution";
import { FlowerDeliveryDriver } from "./FlowerDeliveryDriver";
import { FlowerDeliveryAdmin } from "./FlowerDeliveryAdmin";
import { FlowerDeliveryBannerbottom } from "./FlowerDeliveryBannerbottom";
import { FlowerDeliverylast } from "./FlowerDeliverylast";

import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";

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

      {/* Other react required components */}

      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};

export default FlowerDelevry;
