import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./MetaversePage.css";

// ----- React page main components -----

import { MetaverseBanner } from "./MetaverseBanner/MetaverseBanner";
import { MetaverseServices } from "./MetaverseServices/MetaverseServices";
import { MetaverseOffers } from "./MetaverseOffers/MetaverseOffers";
import { MetaverseMidBanner } from "./MetaverseMidBanner/MetaverseMidBanner";
import { MetaverseWhyBF } from "./MetaverseWhyBF/MetaverseWhyBF";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";

// ----- Other required react components -----

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";
export const MetaversePage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div className="MetaversePage-container">
      <Helmet>
        <title>Metaverse services | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom Funnel is a metaverse offering that will help your business adapt to emerging market trends by creating a virtual reality of their operations."
        />
      </Helmet>
      <MetaverseBanner />
      <MetaverseServices />
      <MetaverseOffers />
      <MetaverseMidBanner />
      <MetaverseWhyBF />
      <CustomWebForm />
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
