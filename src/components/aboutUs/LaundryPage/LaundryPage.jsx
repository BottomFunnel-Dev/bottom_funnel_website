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
import LaudryApplication from "./LaudryApplication";
import LaundryAdmin from "./LaundryAdmin";
import Laundryapppagelowerfooter from "./Laundryapppagelowerfooter";
import LaundryBannerlower from "./LaundryBannerlower";
import LaundryCustomer from "./LaundryCustomer";
import LaundryDelivery from "./LaundryDelivery";
import LaundryPageBanner from "./LaundryPageBanner";
import { Helmet } from "react-helmet";

export const LaundryPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Laundry delviery app development | Bottom Funnel</title>
        <meta
          name="description"
          content="Boost your laundry business with Bottom Funnel's laundry app development services that offer intuitive software and app development solutions to clients around the globe"
        />
      </Helmet>
      <LaundryPageBanner />
      <LaudryApplication />
      <LaundryCustomer />
      <LaundryDelivery />
      <LaundryAdmin />
      <LaundryBannerlower />
      <Laundryapppagelowerfooter />

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
