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
import "./marketPlace.css";
import { MarketPlaceAdmin } from "./MarketPlaceAdmin";
import { MarketPlaceBanner } from "./MarketPlaceBanner";
import { MarketPlaceClient } from "./MarketPlaceClient";
import { MarketPlaceFreelancer } from "./MarketPlaceFreelancer";
import MarketPlaceLowerBanner from "./MarketPlaceLowerBanner";

export const MarketPlace = () => {
  return (
    <div>
      <MarketPlaceBanner />
      <MarketPlaceFreelancer />
      <MarketPlaceAdmin />
      <MarketPlaceClient />
      <MarketPlaceLowerBanner />

      <StoriesSection />
      <Industries />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <Revamping />
      <SeoblogSection />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
