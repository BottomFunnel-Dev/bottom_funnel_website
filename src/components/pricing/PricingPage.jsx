import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";

import { PricingBanner } from "./PricingBanner/PricingBanner";
import { PricingDetailsData } from "./PricingDetailsData/PricingDetailsData";

export const PricingPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>
          Bottom Funnel Product Pricing | Paid plans starting from $15 a month |
          Bottom Funnel
        </title>
        <meta
          name="description"
          content="View the many features of our helpdesk management tools choose the right one for you to assist your customers | Try our Forever Free Sprout Plan"
        />
      </Helmet>
      <PricingBanner />
      <PricingDetailsData />
      {/* <AdsOns/> */}
      {/* ----- End of main page. Now Further components ----- */}
      <Industries />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
