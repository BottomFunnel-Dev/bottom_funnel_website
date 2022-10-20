import React from 'react'
import Videostreamingcontainer from './Videostreamingcontainer'
import "./streamingcontainer.css"
import Services from './Services'
import Grow from './Grow'
import Featuressection from './Featuressection'
import StoriesSection from '../StoriesSection/StoriesSection'
import { Industries } from '../industries/Industries'
import OndemandSection from '../OnDemandSection/OndemandSection'
import PortFolio from '../PortFolioSection/PortFolio'
import PlanProject from '../PlanProject/PlanProject'
import Revamping from '../revamping/Revamping'
import { SeoblogSection } from '../SeoBlogs/Seoblogs'
import { TextDropdown } from '../faqSection/Faqs'
import ContectForm from '../ContectForm/ContectForm'
import MainFooter from '../FooterSection/MainFooter'

export default function Videostreaming() {
  return (
    <div>
      <Videostreamingcontainer/>
      <Services/>
      <Grow/>
      <Featuressection/>
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
