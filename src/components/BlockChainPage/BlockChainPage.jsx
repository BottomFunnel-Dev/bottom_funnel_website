import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./BlockChainPage.css";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

// ---- Customised web development page other sub components -----

import { BlockChainBanner } from "./BlockChainBanner/BlockChainBanner";
import { BlockChainOffer } from "./BlockChainOffer/BlockChainOffer";
import { BlockChainServices } from "./BlockChainServices/BlockChainServices";
import { BlockChainBF } from "./BlockChainBF/BlockChainBF";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";

export const BlockChainPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <BlockChainBanner />
      <BlockChainOffer />
      <BlockChainServices />
      <BlockChainBF />
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
