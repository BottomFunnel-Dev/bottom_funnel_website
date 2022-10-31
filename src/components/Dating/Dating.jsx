import React from 'react'
import Adminpannel from './Adminpannel'
import Customerapp from './Customerapp'
import Datingbrands from './Datingbrands'
import Datingcontainer from './Datingcontainer'
import Datingfeatures from './Datingfeatures'
import Datingmobile from './Datingmobile'
import Datingstart from './Datingstart'
import DatingWhy from './DatingWhy'
import Solutiondating from './Solutiondating'
import StoriersSection from '../StoriesSection/StoriesSection'
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

export default function Dating() {
  return (
    <div> 
       <Datingcontainer/>
       <Datingbrands/>
       <Datingfeatures/>
       <Customerapp/>
       <Adminpannel/>
       <Datingmobile/>
       <Solutiondating/>
       <Datingstart/>
       <DatingWhy/>
       <StoriesSection/>
       <Industries/>
       <OndemandSection/>
       <PortFolio/>
       <PlanProject/>
       <Revamping/>
       <SeoblogSection/>
       <TextDropdown/>
       <ContectForm/>
       <MainFooter/>
       
    </div>
  )
}
