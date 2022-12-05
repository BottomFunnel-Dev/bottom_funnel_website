import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./DataSciencePage.css";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

// ----- Importing main sub react components of the page -----

import { DataScienceBanner } from "./DataScienceBanner/DataScienceBanner";
import { DataScienceBF } from "./DataScienceBF/DataScienceBF";
import { DataScienceMidBanner } from "./DataScienceMidBanner/DataScienceMidBanner";
import { DataScienceUnique } from "./DataScienceUnique/DataScienceUnique";
import { DataScienceServices } from "./DataScienceServices/DataScienceServices";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";
import { DataScienceSlider } from "./DataScienceSlider/DataScienceSlider";
import { DataScienceMethods } from "./DataScienceMethods/DataScienceMethods";
import { Helmet } from "react-helmet";

export const DataSciencePage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Data Science experts | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom Funnel is a company that is dedicated to helping its clients with
        their data problems. It has a team of data scientists who have years of
        experience solving various business difficulties with the help of big
        data."
        />
      </Helmet>
      <DataScienceBanner />
      <DataScienceUnique />
      <DataScienceServices />
      <DataScienceMidBanner />
      <DataScienceBF />
      <DataScienceMethods />
      <DataScienceSlider />
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
