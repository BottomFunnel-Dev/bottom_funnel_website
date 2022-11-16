import React from "react";
import { ClientBanner } from "./ClientBanner/ClientBanner";
import { ClientSlider } from "./ClientSlider/ClientSlider";
import "./OurClient.css";
import { OurClientbrand } from "./OurClientbrand/OurClientbrand";
import {
  branddata,
  startupdata,
  enterprisedata,
  imageData,
} from "../../Data/OurClient";
import PortFolio from "../PortFolioSection/PortFolio";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import MainFooter from "../FooterSection/MainFooter";

export const OurClient = () => {
  return (
    <div style={{ color: "#393939" }}>
      <ClientBanner />
      <ClientSlider data={imageData} />
      <OurClientbrand data={branddata} />
      <OurClientbrand data={startupdata} />
      <OurClientbrand data={enterprisedata} />
      <PortFolio/>
      <SeoblogSection/>
      <MainFooter/>
    </div>
  );
};
