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
import DeliveryServices from './DeliveryServices'
import GroceryBanner from './GroceryBanner'
import GroceryFeatures from './GroceryFeatures'

const Grocery = () => {
  return (
    <div>
      <GroceryBanner/>
      <DeliveryServices/>
      <GroceryFeatures/>
      <StoriesSection/>
      <Industries/>
      <PlanProject/>
      <OndemandSection/>
      <PortFolio/>
      <SeoblogSection/>
      <Revamping/>
      <TextDropdown/>
      <ContectForm/>
      <MainFooter/>
    </div>
  )
}

export default Grocery