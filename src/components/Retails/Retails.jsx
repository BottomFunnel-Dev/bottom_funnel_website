import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RetailsBanner } from './RetailsBanner'
import { ChnageNavbarColor } from '../../Redux/Navbar/NavbarAction';
import { RetailsImplementmain } from './RetailsImplementmain';
import StoriesSection from '../StoriesSection/StoriesSection';
import OndemandSection from '../OnDemandSection/OndemandSection';
import PortFolio from '../PortFolioSection/PortFolio';
import PlanProject from '../PlanProject/PlanProject';
import { SeoblogSection } from '../SeoBlogs/Seoblogs';
import Revamping from '../revamping/Revamping';
import { TextDropdown } from '../faqSection/Faqs';
import ContectForm from '../ContectForm/ContectForm';
import MainFooter from '../FooterSection/MainFooter';

export const Retails = () => {

    const dispatch = useDispatch();
    useEffect(function () {
      dispatch(ChnageNavbarColor({ color: "white", logo: false }));
    }, []);

  return (
    <div>
    <RetailsBanner />
    <RetailsImplementmain />

    <StoriesSection />
    <OndemandSection />
    <PortFolio />
    <PlanProject />
    <SeoblogSection />
    <Revamping />
    <TextDropdown />
    <ContectForm />
    <MainFooter />
    
    </div>
  )
}
