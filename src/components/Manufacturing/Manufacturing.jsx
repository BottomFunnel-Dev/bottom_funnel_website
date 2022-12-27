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

export const Manufacturing = () => {

    const dispatch = useDispatch();
    useEffect(function () {
      dispatch(ChnageNavbarColor({ color: "black", logo: false }));
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

 
    <StoriesSection />
    <Industries />
    <PlanProject />
    <OndemandSection />
    <PortFolio />
    <SeoblogSection />
    <Revamping />
    <TextDropdown />
    <ContectForm />
    <MainFooter />
    </div>
  )
}
