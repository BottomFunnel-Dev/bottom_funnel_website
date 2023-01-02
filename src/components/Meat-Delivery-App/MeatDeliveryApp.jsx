import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { MeatDeliveryAdmin } from "./MeatDeliveryAdmin";
import { MeatDeliveryBanner } from "./MeatDeliveryBanner";
import { MeatDeliveryCustomerApp } from "./MeatDeliveryCustomerApp";

import { MeatDeliveryLowerBanner } from "./MeatDeliveryLowerBanner";
import { MeatDeliveryPartnerApp } from "./MeatDeliveryPartnerApp";

// ----- Other requried react components -----
import StoriesSection from "../StoriesSection/StoriesSection";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";

export const MeatDeliveryApp = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <MeatDeliveryBanner />
      <MeatDeliveryCustomerApp />
      <MeatDeliveryAdmin />
      <MeatDeliveryPartnerApp />
      <MeatDeliveryLowerBanner />
     

        {/* Other react required components */}
        <StoriesSection />
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
