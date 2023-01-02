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
  mountNavbar,
  unmountNavbar,
} from "../../Redux/ProductNavbar/ProductNavAction";

export const ContactManagement = () => {

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
    <ContactManagementBanner />
    <ContactManagementPersonalize />
    <ContactManagementDeals />
    <ContactManagementMaximize />
    <ContactManagementLowerBanner />
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
