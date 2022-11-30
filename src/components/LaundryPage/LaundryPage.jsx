import React from 'react'
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
import LaudryApplication from './LaudryApplication'
import LaundryAdmin from './LaundryAdmin'
import Laundryapppagelowerfooter from './Laundryapppagelowerfooter'
import LaundryBannerlower from './LaundryBannerlower'
import LaundryCustomer from './LaundryCustomer'
import LaundryDelivery from './LaundryDelivery'
import LaundryPageBanner from './LaundryPageBanner'


export const LaundryPage = () => {
  return (
    <div>
      <LaundryPageBanner />
      <LaudryApplication />
      <LaundryCustomer />
      <LaundryDelivery />
      <LaundryAdmin />
      <LaundryBannerlower />
      <Laundryapppagelowerfooter />

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


