import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./VettingPage.css";

// ----- React main sub components -----

import { VettingBanner } from "./VettingBanner/VettingBanner";
import { VettingHiring } from "./VettingHiring/VettingHiring";
import { VettingProcess } from "./VettingProcess/VettingProcess";
import { VettingTalent } from "./VettingTalent/VettingTalent";
import { VettingGrow } from "./VettingGrow/VettingGrow";
import { VettingRoles } from "./VettingRoles/VettingRoles";

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

export const VettingPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div className="VettingPage-container">
      <Helmet>
        <title>Our Vetting Process | Bottom Funnel</title>
        <meta
          name="description"
          content="Companies follow guess-work and intuitions before hiring a talent. Our vetting process filters the top 3.5% talents, who are vetted against their communication skills, technical capabilities and cultural fitness which guarantees the best hire in first go."
        />
      </Helmet>
      <VettingBanner />
      <VettingProcess />
      <VettingTalent />
      <VettingHiring />
      <VettingGrow />
      <VettingRoles />
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
