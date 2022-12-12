import React from 'react'
import { Advantages } from './Advantages/Advantages'
import { ReactNativeAppDevelopmentBanner } from './ReactNativeAppDevelopmentBanner/ReactNativeAppDevelopmentBanner'
import { ReactNativeAppDevelopmentContain } from './ReactNativeAppDevelopmentContain/ReactNativeAppDevelopmentContain'
import { ReactNativeAppDevelopmentSolution } from './ReactNativeAppDevelopmentSolution/ReactNativeAppDevelopmentSolution'
import { ReactNativeDevelopmentCard } from './ReactNativeDevelopmentCard/ReactNativeDevelopmentCard'

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

export const ReactNativeAppDevelopment = () => {
  return (
    <div>
        <ReactNativeAppDevelopmentBanner/>
        <ReactNativeAppDevelopmentContain/>
        <ReactNativeDevelopmentCard/>
        <ReactNativeAppDevelopmentSolution/>
        <Advantages/>

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
  )
}
