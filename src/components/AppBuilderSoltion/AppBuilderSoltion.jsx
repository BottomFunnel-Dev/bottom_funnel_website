import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { AppBuilderCreate } from './AppBuilderCreate';
import { AppBuilderDiscoverApp } from './AppBuilderDiscoverApp';
import { AppBuilderMaker } from './AppBuilderMaker';
import { AppBuilderSolutionBanner } from './AppBuilderSolutionBanner';
import { AppBuilderWhyShuld } from './AppBuilderWhyShuld';
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

export const AppBuilderSoltion = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <AppBuilderSolutionBanner />
      <AppBuilderDiscoverApp />
      <AppBuilderWhyShuld />
      <AppBuilderCreate />
      <AppBuilderMaker />

      <Industries />
    <OndemandSection />
    <PortFolio />
    <PlanProject />
    <SeoblogSection />
    <Revamping />
    <TextDropdown />
    <MainFooter />

    </div>
  )
}

