import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import PortFolio from "../PortFolioSection/PortFolio";
import Revamping from "../revamping/Revamping";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import { BettingSpecial } from "./BettingSpecial";
import { Bettingwhy } from "./Bettingwhy";
import { SportsBanner } from "./SportsBanner";
import { SportsPanels } from "./SportsPanels";
import { sportsBettingLogo } from "../../Data/SeopartnerData";

export const SportsBetting = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div>
      <SportsBanner />
      <Trusted partnerLogo={sportsBettingLogo}/>
      <SportsPanels />
      <BettingSpecial />
      <Bettingwhy />

      <StoriesSection />
      <Industries />
      <PlanProject />
      <OndemandSection />
      <PortFolio />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
