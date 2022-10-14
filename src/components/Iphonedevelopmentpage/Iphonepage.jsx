import React from 'react'
import { Companystats } from '../CompanyStats/Companystats'
import ContectForm from '../ContectForm/ContectForm'
import { TextDropdown } from '../faqSection/Faqs'
import MainFooter from '../FooterSection/MainFooter'
import { Industries } from '../industries/Industries'
import OndemandSection from '../OnDemandSection/OndemandSection'
import PlanProject from '../PlanProject/PlanProject'
import PortFolio from '../PortFolioSection/PortFolio'
import Revamping from '../revamping/Revamping'
import { SeoblogSection } from '../SeoBlogs/Seoblogs'
import StoriesSection from '../StoriesSection/StoriesSection'
import { Iphonedevelopmentpage } from './Iphonedevelopmentpage'
import { IphoneDevelopmentRelated } from './IphoneDevelopmentRelated'
import { Iphonedevelopmentservices } from './Iphonedevelopmentservices'
import { Iphonedevelopmentwhy } from './Iphonedevelopmentwhy'
import { IphoneDevelopmentwork } from './IphoneDevelopmentwork'

export const Iphonepage = () => {
  return (
    <div>
        <Iphonedevelopmentpage/>
        <Iphonedevelopmentwhy/>
        <Iphonedevelopmentservices/>
        {/* <IphoneDevelopmentwork/> */}
        <PortFolio/>
        <StoriesSection/>
        <Industries/>
        <OndemandSection/>
        <PlanProject/>
        <Companystats/>
        <Revamping/>
        <SeoblogSection/>
        <TextDropdown/>
        <ContectForm/>
        <MainFooter/>
    </div>
  )
}
