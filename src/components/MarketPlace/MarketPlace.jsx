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
import Maketplacefooter from "./Maketplacefooter";
import MarketPlaceAdmin from "./MarketPlaceAdmin";
import { MarketplaceBanner } from "./MarketplaceBanner";
import Marketplaceborder from "./Marketplaceborder";
import MarketPlaceClients from "./MarketPlaceClients";
import MarketplaceFreelancer from "./MarketplaceFreelancer";

export const Marketplace = () => {
  return (
    <div>
      <MarketplaceBanner />
      <MarketplaceFreelancer />
      <MarketPlaceAdmin />
      <MarketPlaceClients />
      <Marketplaceborder />
      <Maketplacefooter />

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
