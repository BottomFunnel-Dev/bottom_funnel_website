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
import StoriesSection from '../StoriesSection/StoriesSection';
import { Manufacturemakebetter } from './Manufacturemakebetter';
import { Manufactureunifiesview } from './Manufactureunifiesview';
import { ManufacturingAutomation } from './ManufacturingAutomation';
import { ManufacturingBanner } from './ManufacturingBanner'
import { ManufacturingCRM } from './ManufacturingCRM';
import { ManufacturingDeals } from './ManufacturingDeals';
import { ManufacturingsEngagement } from './ManufacturingsEngagement';
import ContectForm from "../ContectForm/ContectForm";

import {
  salesmountNavbar,
  salesunmountNavbar,
} from "../../Redux/ProductNavbar/ProductNavAction";
import { CustomerTrust } from '../ProductsNewPage/CustomerTrust/CustomerTrust';
import { GetStarted } from '../WebdevPages/webGetStartedCard/GetStarted';
import { ProductsFooter } from '../ProductsNewPage/ProductsFooter/ProductsFooter';

export const Manufacturing = () => {
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
    <ManufacturingBanner />
    <ManufacturingCRM />
    <Manufactureunifiesview />
    <ManufacturingsEngagement />
    <ManufacturingAutomation />
    <ManufacturingDeals />
    <Manufacturemakebetter />

 
    {/* <StoriesSection />
    <Industries />
    <PlanProject />
    <OndemandSection />
    <PortFolio />
    <SeoblogSection />
    <Revamping />
    <TextDropdown />
    <ContectForm />
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
