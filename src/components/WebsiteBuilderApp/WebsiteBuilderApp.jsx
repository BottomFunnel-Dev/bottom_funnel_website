import React from 'react';
import ContectForm from '../ContectForm/ContectForm';
import { TextDropdown } from '../faqSection/Faqs';
import MainFooter from '../FooterSection/MainFooter';
import { Industries } from '../industries/Industries';
import OndemandSection from '../OnDemandSection/OndemandSection';
import PlanProject from '../PlanProject/PlanProject';
import PortFolio from '../PortFolioSection/PortFolio';
import Revamping from '../revamping/Revamping';
import { SeoblogSection } from '../SeoBlogs/Seoblogs';
import StoriesSection from '../StoriesSection/StoriesSection';
import { CreateWebsites } from './CreateWebsites/CreateWebsites';
import { MakeContentCount } from './MakeContentCount/MakeContentCount';
import "./WebsiteBuilderApp.css";
import { WebisteBuilderBanner } from './WebsiteBuilderBanner/WebisteBuilderBanner';
import { WebsiteBuiulderMiddleComp } from './WebsiteBuilderMiddleComp/WebsiteBuilderMiddleComp';
import { WebsiteBuilderOnePlatform } from './WebsiteBuilderOnePlatform/WebsiteBuilderOnePlatform';
import { WebsiteInsights } from './WebsiteInsights/WebsiteInsights';


export const WebsiteBuilderApp = () => {
    return (
        <div>

            <WebisteBuilderBanner />

            <WebsiteBuilderOnePlatform />

            <WebsiteBuiulderMiddleComp />

            <CreateWebsites />

            <MakeContentCount />

            <WebsiteInsights />

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
