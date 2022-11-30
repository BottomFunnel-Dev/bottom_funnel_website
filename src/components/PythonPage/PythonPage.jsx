import React from 'react'
import { javawebDevServices } from '../../Data/webdevPageData/Popularservices'
import {pythonstackIntro} from '../../Data/webdevPageData/StackData'
import {pythonBanner} from '../../Data/webdevPageData/TechBannerData'
import { javaWhyContent } from '../../Data/webdevPageData/whyBottomContent'
import { whyJava } from '../../Data/webdevPageData/whyTechStack'
import { Techstackintro } from '../ASP.NETpage/techStackintro/Techstackintro'
import { WebdevBanner } from '../WebdevPages/bannerWebdev/WebdevBanner'
import { WebDevServices } from '../WebdevPages/webdevServices/WebDevServices'
import { WebDevWhy } from '../WebdevPages/webDevWhy/WebDevWhy'
import { GetStarted } from '../WebdevPages/webGetStartedCard/GetStarted'
import { WhyTechStack } from '../WebdevPages/whyTechStack/WhyTechStack'

export const PythonPage = () => {
  return (
    <div>
        <WebdevBanner bannerContent={pythonBanner}/>
        <Techstackintro techContent={pythonstackIntro}/>
        <WebDevServices webservicesContent={javawebDevServices}/>
        <WhyTechStack techData={whyJava}/>
        <GetStarted/>
        <WebDevWhy whyDevContent={javaWhyContent}/>


    </div>
  )
}
