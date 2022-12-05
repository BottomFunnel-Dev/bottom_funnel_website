import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./CustomisedWebPage.css";

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

// ---- Customised web development page other sub components -----

import { CustomisedWebBanner } from "./CustomisedWebBanner/CustomisedWebBanner";
import { CustomisedWebUnique } from "./CustomisedWebUnique/CustomisedWebUnique";
import { CustomisedWebServices } from "./CustomisedWebServices/CustomisedWebServices";
import { CustomWebSolutions } from "./CustomWebSolutions/CustomWebSolutions";
import { CustomWebMidBanner } from "./CustomWebMidBanner/CustomWebMidBanner";
import { CustomWebForm } from "./CustomWebForm/CustomWebForm";
import { CustomWebWhyBF } from "./CustomWebWhyBF/CustomWebWhyBF";
import { CustomWebSlider } from "./CustomWebSlider/CustomWebSlider";
import { Helmet } from "react-helmet";

export const CustomisedWebPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div className="CustomisedWebPage-container">
      <Helmet>
        <title>Customized web development service | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom Funnel is the best option for organizations that require
        brand-new and creative designs. Our team of experts will help you figure
        out your online presence, from strategy to execution."
        />
      </Helmet>
      <CustomisedWebBanner />
      <CustomisedWebUnique />
      <CustomisedWebServices />
      <CustomWebSolutions />
      <CustomWebMidBanner />
      <CustomWebWhyBF />
      <CustomWebSlider />
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
