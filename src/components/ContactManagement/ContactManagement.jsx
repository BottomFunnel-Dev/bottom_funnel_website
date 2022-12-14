import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ChnageNavbarColor } from '../../Redux/Navbar/NavbarAction';
import { ContactManagementBanner } from './ContactManagementBanner'
import { ContactManagementDeals } from './ContactManagementDeals';
import { ContactManagementLowerBanner } from './ContactManagementLowerBanner';
import { ContactManagementMaximize } from './ContactManagementMaximize';
import { ContactManagementPersonalize } from './ContactManagementPersonalize';

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";

import {
  salesmountNavbar,
  salesunmountNavbar,
} from "../../Redux/ProductNavbar/ProductNavAction";
import { CustomerTrust } from '../ProductsNewPage/CustomerTrust/CustomerTrust';
import StoriesSection from '../StoriesSection/StoriesSection';
import { GetStarted } from '../WebdevPages/webGetStartedCard/GetStarted';
import ContectForm from '../ContectForm/ContectForm';
import { ProductsFooter } from '../ProductsNewPage/ProductsFooter/ProductsFooter';

export const ContactManagement = () => {

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false, }));
    dispatch(salesmountNavbar());
    return () => {
      dispatch(salesunmountNavbar())
    };
  }, []);


  return (
    <div>
    <ContactManagementBanner />
    <ContactManagementPersonalize />
    <ContactManagementDeals />
    <ContactManagementMaximize />
    <ContactManagementLowerBanner />
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
