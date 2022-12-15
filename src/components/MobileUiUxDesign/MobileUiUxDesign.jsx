import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { MobileKickStart } from "./MobileKickStart";
import { MobileUiUxBanner } from "./MobileUiUxBanner";
import { MobileUiUxToNotched } from "./MobileUiUxToNotched";
import { MobileUXReactNative } from "./MobileUXReactNative";
import { MobileUxUiB2cSolution } from "./MobileUxUiB2cSolution";
import { MobileUxUiDesignPartner } from "./MobileUxUiDesignPartner";
import { MobileUXUIServiceOffer } from "./MobileUXUIServiceOffer";

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

export const MobileUiUxDesign = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Mobile UIUX Design | Bottom Funnel</title>
        <meta
          name="description"
          content="Mobile UX designs are interfaces for hand-held and wearable devices. Designers focus on accessibility and efficiency to optimize these on-the-go interactions."
        />
      </Helmet>
      <MobileUiUxBanner />
      <MobileUiUxToNotched />
      <MobileUXUIServiceOffer />
      <MobileUxUiB2cSolution />
      <MobileUxUiDesignPartner />
      <MobileKickStart />
      <MobileUXReactNative />
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
