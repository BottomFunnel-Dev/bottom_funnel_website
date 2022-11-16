import React from "react";
import "./ClientReview.css";

import { ClientBanner } from "./ClientBanner/ClientBanner";
import { OurClients } from "./OurClients/OurClients";
import { RecentReview } from "./RecentReview/RecentReview";
import PortFolio from "../PortFolioSection/PortFolio";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import MainFooter from "../FooterSection/MainFooter";

export const ClientReview = () => {
  return (
    <div className="ClientReview-main">
      <ClientBanner />
      <RecentReview />
      <OurClients />
      <PortFolio/>
      <SeoblogSection/>
      <MainFooter/>
    </div>
  );
};
