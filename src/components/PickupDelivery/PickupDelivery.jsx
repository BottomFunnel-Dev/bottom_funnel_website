import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { Companystats } from "../CompanyStats/Companystats";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import Logiccustomer from "../Logistic/Logiccustomer";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import PortFolio from "../PortFolioSection/PortFolio";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import { PickupBanner } from "./PickupBanner";
import { PickupCustomer } from "./PickupCustomer";
import { Pickupdriveapp } from "./Pickupdriveapp";
import { Pickuprequire } from "./Pickuprequire";
import { PickupSolutions } from "./PickupSolutions";
import { pickupanddeliveryLogo } from "../../Data/SeopartnerData";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
export const PickupDelivery = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div>
      <PickupBanner />
      <Trusted partnerLogo={pickupanddeliveryLogo} />
      <PickupSolutions />
      <Pickuprequire />
      <PickupCustomer />
      {/* <Pickupdriveapp/> */}

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
