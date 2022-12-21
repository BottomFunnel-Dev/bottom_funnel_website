import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { RealEstateBanner } from './RealEstateBanner/RealEstateBanner';
import { RealEstateFeatures } from './RealEstateFeatures/RealEstateFeatures';
import {
  logisticsCustomer,
  plantBaseDriverData,
  plantBaseMeatAdmin,
} from "../../Data/Realestate";

import { RealEstateProduct } from './RealEstateProduct/RealEstateProduct';
import { WhyChooseRealEstate } from './WhyChooseRealEstate/WhyChooseRealEstate';
import { ConsultantBanner } from './ConsultantBanner/ConsultantBanner';
import RealEstateAdmin from './RealEstateAdmin/RealEstateAdmin';
import RealEstateCustomer from './RealEstateCustomer/RealEstateCustomer';
import RealEstateDriver from './RealEstateDriver/RealEstateDriver';
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

export const RealEstate = () => {

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);
  return (
    <div>
      <RealEstateBanner />
      <RealEstateFeatures />
      <ConsultantBanner />

      {/* <PlantBaseDeliverApp consumerdata={logisticsCustomer} />
        <PlantBaseDriverApp driveData={plantBaseDriverData} /> */}
      {/* <PlantBaseDeliverAdminPanel plantBasedAdminData={plantBaseMeatAdmin} /> */}

      <RealEstateCustomer consumerdata={logisticsCustomer} />
      <RealEstateDriver driveData={plantBaseDriverData} />
      <RealEstateAdmin plantBasedAdminData={plantBaseMeatAdmin} />

      <RealEstateProduct />
      <WhyChooseRealEstate />

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
  )
}
