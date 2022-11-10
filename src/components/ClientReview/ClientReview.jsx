import React from "react";
import "./ClientReview.css";

import { ClientBanner } from "./ClientBanner/ClientBanner";
import { ReviewRating } from "./ReviewRating/ReviewRating";
import { OurClients } from "./OurClients/OurClients";
import { RecentReview } from "./RecentReview/RecentReview";
import StoriesSection from "../StoriesSection/StoriesSection";
import { Industries } from "../industries/Industries";
import Revamping from "../revamping/Revamping";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import PlanProject from "../PlanProject/PlanProject";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";

export const ClientReview = () => {
  return (
    <div className="ClientReview-main">
      <ClientBanner />
      <ReviewRating />
      <OurClients />
      <RecentReview />
      <StoriesSection />
      <Industries />
      <Revamping />
      <OndemandSection />
      <PortFolio />
      <SeoblogSection />
      <PlanProject />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
