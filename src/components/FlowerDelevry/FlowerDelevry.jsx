import React from "react";
import FlowerDeliveryAdmin from "./FlowerDeliveryAdmin";
import FlowerDeliveryBanner from "./FlowerDeliveryBanner";
import FlowerDeliveryBannerbottom from "./FlowerDeliveryBannerbottom";
import FlowerDeliveryDriver from "./FlowerDeliveryDriver";
import FlowerDeliverylast from "./FlowerDeliverylast";
import { FlowerDeliveryService } from "./FlowerDeliveryService";
import FlowerDeliverySolution from "./FlowerDeliverySolution";

// ----- Other required react components -----

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

export const FlowerDelevry = () => {
  return (
    <div>
      <FlowerDeliveryBanner />
      <FlowerDeliveryService />
      <FlowerDeliverySolution />
      <FlowerDeliveryDriver />
      <FlowerDeliveryAdmin />
      <FlowerDeliveryBannerbottom />
      <FlowerDeliverylast />
      {/* ----- End of main page. Now Further components ----- */}
      <Industries />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <MainFooter />
    </div>
  );
};
