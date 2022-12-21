import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { Advantages } from './Advantages/Advantages'
import { ReactNativeAppDevelopmentBanner } from './ReactNativeAppDevelopmentBanner/ReactNativeAppDevelopmentBanner'
import { ReactNativeAppDevelopmentContain } from './ReactNativeAppDevelopmentContain/ReactNativeAppDevelopmentContain'
import { ReactNativeAppDevelopmentSolution } from './ReactNativeAppDevelopmentSolution/ReactNativeAppDevelopmentSolution'
import { ReactNativeDevelopmentCard } from './ReactNativeDevelopmentCard/ReactNativeDevelopmentCard'
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

export const ReactNativeAppDevelopment = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <ReactNativeAppDevelopmentBanner />
      <ReactNativeAppDevelopmentContain />
      <ReactNativeDevelopmentCard />
      <ReactNativeAppDevelopmentSolution />
      <Advantages />

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
  )
}
