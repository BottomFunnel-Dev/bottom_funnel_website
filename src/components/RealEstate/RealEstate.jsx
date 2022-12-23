import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { RealEstateBanner } from './RealEstateBanner'
import { ChnageNavbarColor } from '../../Redux/Navbar/NavbarAction';
import { RealEstateNextBanner } from './RealEstateNextBanner';
import { RealEstateSolution } from './RealEstateSolution';
import { RealEstateCustomer } from './RealEstateCustomer';
import { RealEstateAdminPannel } from './RealEstateAdminPannel';
import { RealEstateDriver } from './RealEstateDriver';
import { Realestatelowerbanner } from './Realestatelowerbanner';
import { Realestatewhychoose } from './Realestatewhychoose';


import StoriesSection from "../StoriesSection/StoriesSection";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";

export const RealEstate = () => {

    const dispatch = useDispatch();
    useEffect(function () {
      dispatch(ChnageNavbarColor({ color: "black", logo: false }));
    }, []);

  return (
    <div>
    <RealEstateBanner />
    <RealEstateNextBanner />
    <RealEstateSolution />
    <RealEstateCustomer />
    <RealEstateAdminPannel />
    <RealEstateDriver />
    <Realestatelowerbanner />
    <Realestatewhychoose />


    <StoriesSection />
    <OndemandSection />
    <Industries />
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
