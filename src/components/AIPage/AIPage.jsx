import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./AIPage.css";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

// ---- Customised web development page other sub components -----

import { AIBanner } from "./AIBanner/AIBanner";
import { AIMidBanner } from "./AIMidBanner/AIMidBanner";
import { AIServices } from "./AIServices/AIServices";
import { AIwhyBF } from "./AIwhyBF/AIwhyBF";
import { AITech } from "./AITech/AITech";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";
import { Helmet } from "react-helmet";

export const AIPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Artificial Intelligence Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom Funnel has harnessed the potential of AI with its powerful predictive analytics tools that identify new and emerging trends before they take off. And because we know you can't keep your mind off numbers, we're offering discounts on selected products every month"
        />
      </Helmet>
      <AIBanner />
      <AIServices />
      <AIMidBanner />
      <AIwhyBF />
      <AITech />
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
