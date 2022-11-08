import React from 'react'
import ContectForm from '../ContectForm/ContectForm'
import { TextDropdown } from '../faqSection/Faqs'
import MainFooter from '../FooterSection/MainFooter'
import { Industries } from '../industries/Industries'
import OndemandSection from '../OnDemandSection/OndemandSection'
import PlanProject from '../PlanProject/PlanProject'
import Revamping from '../revamping/Revamping'
import { SeoblogSection } from '../SeoBlogs/Seoblogs'
import StoriesSection from '../StoriesSection/StoriesSection'
import Newsfeature from './Newsfeature'
import Newsintro from './Newsintro'
import Newspaper from './Newspaper'
import Newspublish from './Newspublish'
import Newstrategy from './Newstrategy'

export default function News() {
  return (
    <div>
        <Newsintro/>
        <Newspaper/>
        <Newsfeature/>
        <Newspublish/>
        <Newstrategy/>
        <StoriesSection/>
        <Industries/>
        <OndemandSection/>
        <PlanProject/>
        <Revamping/>
        <SeoblogSection/>
        <TextDropdown/>
        <ContectForm/>
        <MainFooter/>
        
    </div>
  )
}
