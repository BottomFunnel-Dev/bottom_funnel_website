import React from 'react'
import "./RetailEcommerceBanner.css"
import { RetailEcommerceBanner } from './RetailEcommerceBanner'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ChnageNavbarColor } from '../../Redux/Navbar/NavbarAction';
import { RetailShopers } from './RetailShopers';
import { RetailRedefine } from './RetailRedefine';
import { RetailsCustomer } from './RetailsCustomer';
import { RetailTeam } from './RetailTeam';
import { RetailInsights } from './RetailInsights';
import StoriesSection from '../StoriesSection/StoriesSection';
import OndemandSection from '../OnDemandSection/OndemandSection';
import PortFolio from '../PortFolioSection/PortFolio';
import PlanProject from '../PlanProject/PlanProject';
import { SeoblogSection } from '../SeoBlogs/Seoblogs';
import Revamping from '../revamping/Revamping';
import { TextDropdown } from '../faqSection/Faqs';
import ContectForm from '../ContectForm/ContectForm';
import MainFooter from '../FooterSection/MainFooter';

export const RetailEcommerce = () => {

    const dispatch = useDispatch();
    useEffect(function () {
      dispatch(ChnageNavbarColor({ color: "black", logo: false }));
    }, []);
  return (
    <div>
    <RetailEcommerceBanner />
    <RetailShopers />
    <RetailRedefine />
    <RetailsCustomer />
    <RetailTeam />
    <RetailInsights />

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
