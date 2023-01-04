import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ChnageNavbarColor } from '../../Redux/Navbar/NavbarAction';
import { TextDropdown } from '../faqSection/Faqs';
import MainFooter from '../FooterSection/MainFooter';
import { Industries } from '../industries/Industries';
import OndemandSection from '../OnDemandSection/OndemandSection';
import PlanProject from '../PlanProject/PlanProject';
import PortFolio from '../PortFolioSection/PortFolio';
import Revamping from '../revamping/Revamping';
import { SeoblogSection } from '../SeoBlogs/Seoblogs';
import { HelpDeskBanner } from './HelpDeskBanner';
import { HelpDeskLowerBanner } from './HelpDeskLowerBanner';
import { HelpWidget } from './HelpWidget';

import {
  mountNavbar,
  unmountNavbar,
} from "../../Redux/ProductNavbar/ProductNavAction";
import { CustomerTrust } from '../ProductsNewPage/CustomerTrust/CustomerTrust';
import StoriesSection from '../StoriesSection/StoriesSection';
import { GetStarted } from '../WebdevPages/webGetStartedCard/GetStarted';
import ContectForm from '../ContectForm/ContectForm';
import { ProductsFooter } from '../ProductsNewPage/ProductsFooter/ProductsFooter';


export const HelpDesk = () => {

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false, }));
    dispatch(mountNavbar());
    return () => {
      dispatch(unmountNavbar())
    };
  }, []);



  return (
    <div>
       <HelpDeskBanner />
       <HelpWidget />
       <HelpDeskLowerBanner />

       {/* <Industries />
       <OndemandSection />
       <PortFolio />
       <PlanProject />
       <SeoblogSection />
       <Revamping />
       <TextDropdown />
       <MainFooter /> */}

      <CustomerTrust/>

      <Revamping/>

      <StoriesSection/>

      <GetStarted/>

      <ContectForm/>

      <ProductsFooter/>

      </div>
  )
}
