import React from 'react'
import { ServicesOffer } from './ServicesOffer'
import { SolutionFrame } from './SolutionFrame'
import { SolutionFrameTwo } from './SolutionFrameTwo'
import { TradingInvestingFooter } from './TradingInvestingFooter'
import {TradingInvestingHeader} from './TradingInvestingHeader'
import { WaysToGrow } from './WaysToGrow'
import { WhyChooseBF } from './WhyChooseBF'

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


export const TradingInvesting = () => {
  return (
    <div>
        <TradingInvestingHeader />
        <ServicesOffer />
        <WaysToGrow />
        <SolutionFrame />
        <SolutionFrameTwo />
        <WhyChooseBF /> 
        <TradingInvestingFooter />
       
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
