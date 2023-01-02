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
import { HotelHospHowBest } from './HotelHospHowBest';
import { HotelHospitilityAddress } from './HotelHospitilityAddress';
import { HotelHospitilityBanner } from './HotelHospitilityBanner';
import { HotelHospitilityConversations } from './HotelHospitilityConversations';
import { HotelHospitilityKeepYour } from './HotelHospitilityKeepYour';
import { HotelHospitilityOrganize } from './HotelHospitilityOrganize';
import { HotelHospitilityTrack } from './HotelHospitilityTrack';
import { HotelHospititlityCustomerEng } from './HotelHospititlityCustomerEng';

export const HotelHospitility = () => {

    const dispatch = useDispatch();
    useEffect(function () {
      dispatch(ChnageNavbarColor({ color: "black", logo: false }));
    }, []);
  
  return (
    <div>
    <HotelHospitilityBanner />
    <HotelHospititlityCustomerEng />
    <HotelHospHowBest />
    <HotelHospitilityOrganize />
    <HotelHospitilityConversations />
    <HotelHospitilityKeepYour />
    <HotelHospitilityAddress />
    <HotelHospitilityTrack />

    
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
