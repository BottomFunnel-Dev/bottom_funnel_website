import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import MiddleText from "../Scoping-Session-Page/MiddleText";
import MidImages from "../Scoping-Session-Page/MidImages";
import RoundIconsText from "../Scoping-Session-Page/RoundIconsText";
import Footer from "../Scoping-Session-Page/Footer";
import Header from "../Scoping-Session-Page/Header";
import StoriesSection from "../StoriesSection/StoriesSection";
import { Industries } from "../industries/Industries";
import PlanProject from "../PlanProject/PlanProject";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";

export const Scoping = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);
  return (
    <div>
      <Header />
      <MiddleText />
      <MidImages />
      <RoundIconsText />
      {/* <Footer /> */}

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


