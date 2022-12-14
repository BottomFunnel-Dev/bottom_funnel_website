import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { KotlinBanner } from "./KotlinBanner/KotlinBanner";
import { KotlinCards } from "./KotlinCards/KotlinCards";
import { KotlinDevelopment } from "./KotlinDevelopment/KotlinDevelopment";
import { KotlinIntegration } from "./KotlinIntegration/KotlinIntegration";
import { KotlinPartner } from "./KotlinPartner/KotlinPartner";
import { KotlinProject } from "./KotlinProject/KotlinProject";
import { KotlinSolutions } from "./KotlinSolutions/KotlinSolutions";
import { WhyChooseKotlin } from "./WhyChooseKotlin/WhyChooseKotlin";

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


export const KotlinAppDevelopment = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);


  return (
      <>
        <div>
            <KotlinBanner/>
            {/* <KotlinDevelopment/> */}
            <KotlinSolutions/>
            <KotlinProject/>
            <KotlinIntegration/>
            <WhyChooseKotlin/>
            <KotlinPartner/>
            <KotlinCards/>

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
      </>
  );
};
