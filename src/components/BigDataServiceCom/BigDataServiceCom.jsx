import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./BigDataServiceCom.css";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

// ---- Customised web development page other sub components -----

import { BigDataServiceBanner } from "./BigDataServiceBanner/BigDataServiceBanner";
import { BigDataServiceBF } from "./BigDataServiceBF/BigDataServiceBF";
import { BigDataServiceHandling } from "./BigDataServiceHandling/BigDataServiceHandling";
import { BigDataServicePopular } from "./BigDataServicePopular/BigDataServicePopular";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";
import { Helmet } from "react-helmet";

export const BigDataServiceCom = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Big Data Services | Bottom Funnel</title>
        <meta
          name="description"
          content="A wide range of big data services to help you discover valuable insights • 33 years of experience in data analytics and data science • 250+ successful big data projects"
        />
      </Helmet>
      <BigDataServiceBanner />
      <BigDataServicePopular />
      <BigDataServiceHandling />
      <BigDataServiceBF />
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
