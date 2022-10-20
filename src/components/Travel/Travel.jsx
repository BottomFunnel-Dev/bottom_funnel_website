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
import TravelBrands from './TravelBrands'
import Travelcontainer from './Travelcontainer'
import Travelfeature from './Travelfeature'
import TravelFlight from './TravelFlight'
import Travelsolution from './Travelsolution'
import Travelstart from './Travelstart'
import Travelwhy from './Travelwhy'

export default function Travel() {
  return (
    <div>
        <Travelcontainer/>
        <TravelBrands/>
        <Travelfeature/>
        <TravelFlight/>
        <Travelsolution/>
        <Travelwhy/>
        <Travelstart/>
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
