import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ChnageNavbarColor } from '../../Redux/Navbar/NavbarAction';
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
import { CPQAutomate } from './CPQAutomate';
import { CpqBanner } from './CpqBanner'
import { CPQGenerate } from './CPQGenerate';
import { CPQLowerBanner } from './CPQLowerBanner';
import { CpqSpeedup } from './CpqSpeedup';
import { WhatisCpq } from './WhatisCpq';

export const Cpq = () => {

    const dispatch = useDispatch();
    useEffect(function () {
      dispatch(ChnageNavbarColor({ color: "black", logo: false }));
    }, []);


  return (
    <div>
    <CpqBanner />
    <WhatisCpq />
    <CPQAutomate />
    <CPQGenerate />
    <CpqSpeedup />
    <CPQLowerBanner />

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
