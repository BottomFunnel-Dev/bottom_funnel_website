import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { DigitalMarketClientsAdd } from "./DigitalMarketClientsAdd";
import { DigitalMarketingBanner } from "./DigitalMarketingBanner";
import { DigitalMarketingHiring } from "./DigitalMarketingHiring";
import { DigitalmarketWhyConsider } from "./DigitalmarketWhyConsider";
import { DigitaMarketWeOffers } from "./DigitaMarketWeOffers";
import { WhatDigitalMarket } from "./WhatDigitalMarket";
import { Helmet } from "react-helmet";

// ----- Importing react components -----
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

export const DigitalMarketing = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Best Digital Marketing experts | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for digital marketing services in USA, UK, India? we provide digital marketing services like SEO, PPC, ORM, SMM, SMO and more"
        />
      </Helmet>
      <DigitalMarketingBanner />
      <WhatDigitalMarket />
      <DigitaMarketWeOffers />
      <DigitalMarketingHiring />
      <DigitalMarketClientsAdd />
      <DigitalmarketWhyConsider />
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
