import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ChnageNavbarColor } from '../../Redux/Navbar/NavbarAction';
import { ApplicationProcess } from '../ApplyAsTalent/ApplicationProcess/ApplicationProcess';

import { TextDropdown } from '../faqSection/Faqs';
import MainFooter from '../FooterSection/MainFooter';
import { Industries } from '../industries/Industries';
import OndemandSection from '../OnDemandSection/OndemandSection';
import PlanProject from '../PlanProject/PlanProject';
import PortFolio from '../PortFolioSection/PortFolio';
import Revamping from '../revamping/Revamping';
import { SeoblogSection } from '../SeoBlogs/Seoblogs';
import { ApplyTalentBanner } from './Apply-TalentBanner'
import { ApplyTalentBenifits } from './ApplyTalentBenifits';
import { ApplyTalentlowerbanner } from './ApplyTalentlowerbanner';
import { Applytalenttrending } from './Applytalenttrending';
import { ApplyTalentWhyWorks } from './ApplyTalentWhyWorks';

export const ApplyTalent = () => {
    const dispatch = useDispatch();
    useEffect(function () {
      dispatch(ChnageNavbarColor({ color: "black", logo: false }));
    }, []);



  return (
    <div>
    <ApplyTalentBanner />
    <ApplyTalentWhyWorks />
    <ApplyTalentBenifits />
    <Applytalenttrending />
    <ApplicationProcess />
    <ApplyTalentlowerbanner />

   
  
    <Industries />
    <OndemandSection />
    <PortFolio />
    <PlanProject />
    <SeoblogSection />
    <Revamping />
    <TextDropdown />
    <MainFooter />
    </div>
  )
}
