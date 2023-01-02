import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ChnageNavbarColor } from '../../Redux/Navbar/NavbarAction';
import StoriesSection from '../StoriesSection/StoriesSection';
import { CloudAnalyze } from './CloudAnalyze';
import { CloudBoostProductivity } from './CloudBoostProductivity';
import { CloudEleminate } from './CloudEleminate';
import { CloudIncrease } from './CloudIncrease';
import { CloudTelephonyBanner } from './CloudTelephonyBanner'
import "./CloudTelephonyBanner.css"
import { CloudTelephonyLowerBanner } from './CloudTelephonyLowerBanner';

import { Industries } from '../industries/Industries'
import OndemandSection from '../OnDemandSection/OndemandSection'
import PortFolio from '../PortFolioSection/PortFolio'
import PlanProject from '../PlanProject/PlanProject'
import Revamping from '../revamping/Revamping'
import { SeoblogSection } from '../SeoBlogs/Seoblogs'
import { TextDropdown } from '../faqSection/Faqs'
import ContectForm from '../ContectForm/ContectForm'
import MainFooter from '../FooterSection/MainFooter'



export const CloudTelephony = () => {

    const dispatch = useDispatch();
    useEffect(function () {
      dispatch(ChnageNavbarColor({ color: "black", logo: false }));
    }, []);
  
  return (
    <div>
    <CloudTelephonyBanner />
    <CloudIncrease />
    <CloudAnalyze />
    <CloudEleminate />
    <CloudBoostProductivity />
    <CloudTelephonyLowerBanner />

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
