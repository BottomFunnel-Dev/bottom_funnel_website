import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

// import { Companystats } from "../CompanyStats/Companystats";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import PortFolio from "../PortFolioSection/PortFolio";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import { AndroidDevelopmentindustries } from "./AndroidDevelopmentindustries";
import { AndroidDevelopmentPagebanner } from "./AndroidDevelopmentPagebanner";
import { AndroidDevelopmentPagewhy } from "./AndroidDevelopmentPagewhy";
import { AndroidDevelopmentServices } from "./AndroidDevelopmentServices";

export const AndroidDevelopmentPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <AndroidDevelopmentPagebanner />
      <AndroidDevelopmentPagewhy />
      <AndroidDevelopmentServices />
      <AndroidDevelopmentindustries />
      <PortFolio />
      <StoriesSection />
      <Industries />
      <OndemandSection />
      <PlanProject />
      <SeoblogSection />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
