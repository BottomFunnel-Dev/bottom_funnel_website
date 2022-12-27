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



export const HelpDesk = () => {

    const dispatch = useDispatch();
    useEffect(function () {
      dispatch(ChnageNavbarColor({ color: "black", logo: false }));
    }, []);


  return (
    <div>
       <HelpDeskBanner />
       <HelpWidget />
       <HelpDeskLowerBanner />

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
