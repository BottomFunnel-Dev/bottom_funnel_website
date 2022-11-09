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
import { EventsBanner } from './EventsBanner'
import { EventsDevelopment } from './EventsDevelopment'
import { EventsDevservices } from './EventsDevservices'
import { EventsFeatures } from './EventsFeatures'
import { EventsProvidedServices } from './EventsProvidedServices'

export const Event = () => {
    return (
        <div>
            <EventsBanner />
            <EventsDevelopment />
            <EventsDevservices />
            <EventsProvidedServices />
            <EventsFeatures/>
            <StoriesSection/>
            <Industries/>
            <PlanProject/>
            <OndemandSection/>
            <PortFolio/>
            <Revamping/>
            <SeoblogSection/>
            <TextDropdown/>
            <ContectForm/>
            <MainFooter/>

        </div>
    )
}
