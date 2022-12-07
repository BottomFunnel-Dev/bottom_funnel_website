import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./NFTpage.css";

// ----- Importing react components -----
import { NFTDevBanner } from "./NFTDevBanner/NFTDevBanner";
import { NFTAboutIt } from "./NFTAboutIt/NFTAboutIt";
import { NFTWhyBF } from "./NFTWhyBF/NFTWhyBF";
import { NFTMidBanner } from "./NFTMidBanner/NFTMidBanner";
import { NFTSolutions } from "./NFTSolutions/NFTSolutions";
import { NFTOffers } from "./NFTOffers/NFTOffers";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";

// ----- Importing other needed react components
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import MainFooter from "../FooterSection/MainFooter";
import { TextDropdown } from "../faqSection/Faqs";

export const NFTpage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <NFTDevBanner />
      <NFTAboutIt />
      <NFTOffers />
      <NFTSolutions />
      <NFTMidBanner />
      <NFTWhyBF />
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
