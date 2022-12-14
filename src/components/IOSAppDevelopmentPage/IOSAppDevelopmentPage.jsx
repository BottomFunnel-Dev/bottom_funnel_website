import React from 'react'
import { IOSAppDevelopmentPageBanner } from './IOSAppDevelopmentPageBanner/IOSAppDevelopmentPageBanner'
import { IOSAppDevelopmentPageCards } from './IOSAppDevelopmentPageCards/IOSAppDevelopmentPageCards'

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


export const IOSAppDevelopmentPage = () => {
  return (
    <div>
       <IOSAppDevelopmentPageBanner/> 
       <IOSAppDevelopmentPageCards/>

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
