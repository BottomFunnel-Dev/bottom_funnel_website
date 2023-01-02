import React from 'react'
import './ottApp.css'
import { OttHeader } from './ott-Header/OttHeader'
import { OttSolutions } from './Ott-Solution-Card-Comp/OttSolutions'
import { OttAdminPannel } from './Ott-Admn-Pannel/OttAdminPannel'
import { OttFeatures } from './Ott-Features/OttFeatures'
import { OttFooter } from './Ott-Footer/OttFooter'

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


export const OttApp = () => {
  return (
    <div className='ott-main'>
      <OttHeader />
      <OttSolutions />
      <OttAdminPannel />
      <OttFeatures />
      <OttFooter />

      
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
