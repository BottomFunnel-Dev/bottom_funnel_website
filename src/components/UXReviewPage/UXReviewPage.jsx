import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { UXReviesBanner } from "./UXReviesBanner/UXReviesBanner";
import { UXReviewEmotions } from "./UXReviewEmotions/UXReviewEmotions";
import { UXReviewMidBanner } from "./UXReviewMidBanner/UXReviewMidBanner";
import "./UXReviewPage.css";
import { UXReviewWhyBF } from "./UXReviewWhyBF/UXReviewWhyBF";

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

export const UXReviewPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div className="UXReviewPage-container">
      <Helmet>
        <title>UX Review Design | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom Funnel is a company that embodies innovation and creativity. We're driven by a vision to create cutting-edge products and services that exceed expectations. With our team of experts, we craft brilliance together and deliver experiences that are ever-evolving."
        />
      </Helmet>
      <UXReviesBanner />
      <UXReviewEmotions />
      <UXReviewWhyBF />
      <UXReviewMidBanner />
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
