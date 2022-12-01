import React from 'react'
import FlowerDeliveryAdmin from './FlowerDeliveryAdmin'
import FlowerDeliveryBanner from './FlowerDeliveryBanner'
import FlowerDeliveryBannerbottom from './FlowerDeliveryBannerbottom'
import FlowerDeliveryDriver from './FlowerDeliveryDriver'
import FlowerDeliverylast from './FlowerDeliverylast'
import { FlowerDeliveryService } from './FlowerDeliveryService'
import FlowerDeliverySolution from './FlowerDeliverySolution'


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

const FlowerDelevry = () => {
  return (
    <div>
      <FlowerDeliveryBanner />
      <FlowerDeliveryService />
 <FlowerDeliverySolution />
    <FlowerDeliveryDriver />
    <FlowerDeliveryAdmin />
    <FlowerDeliveryBannerbottom />
    <FlowerDeliverylast />

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

export default FlowerDelevry
