import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { AviationAirlines } from "./AviationAirlines";
import { AviationLetsDiscuss } from "./AviationLetsDiscuss";
import { AvitaionBanner } from "./AvitaionBanner";
import { AvitaionLowerBaner } from "./AvitaionLowerBaner";
import { Avitaionlowerbannerdummy } from "./Avitaionlowerbannerdummy";

// ----- Other required react components -----

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

export const Aviation = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <AvitaionBanner />
      <AviationAirlines />
      <AviationLetsDiscuss />
      <AvitaionLowerBaner />
      <Avitaionlowerbannerdummy />
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
