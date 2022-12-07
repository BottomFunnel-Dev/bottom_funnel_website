import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./MLPages.css";
import { MLBanner } from "./MLBanner/MLBanner";
import { MLPopular } from "./MLPopular/MLPopular";
import { MLMidBanner } from "./MLMidBanner/MLMidBanner";
import { MLwhyBF } from "./MLwhyBF/MLwhyBF";
import { MLApproach } from "./MLApproach/MLApproach";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";

// ----- Other requried react components -----
import StoriesSection from "../StoriesSection/StoriesSection";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";

export const MLPages = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "#fff", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Machine learning Developer | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom Funnel is one such machine learning system that uses artificial intelligence to make predictions for the future based on historical data. By assessing user preferences and analyzing their online behavior, the company builds a model that predicts the next action users are likely to take after visiting their website."
        />
      </Helmet>
      <MLBanner />
      <MLPopular />
      <MLMidBanner />
      <MLApproach />
      <MLwhyBF />
      <CustomWebForm />
      {/* Other react required components */}
      <StoriesSection />
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
