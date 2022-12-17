import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import ContectForm from '../ContectForm/ContectForm'
import { TextDropdown } from '../faqSection/Faqs'
import MainFooter from '../FooterSection/MainFooter'
import { Industries } from '../industries/Industries'
import OndemandSection from '../OnDemandSection/OndemandSection'
import PlanProject from '../PlanProject/PlanProject'
import PortFolio from '../PortFolioSection/PortFolio'
import Revamping from '../revamping/Revamping'
import { SeoblogSection } from '../SeoBlogs/Seoblogs'
import StoriesSection from '../StoriesSection/StoriesSection'
import { TaxiBookingAdminpannel } from './TaxiBookingAdminpannel'
import { TaxiBookingBanner } from './TaxiBookingBanner'
import { TaxiBookingCustomerApp } from './TaxiBookingCustomerApp'
import { TaxiBookingDriver } from './TaxiBookingDriver'
import { TaxiBookingLowerBanner } from './TaxiBookingLowerBanner'
import { TaxiOccassion } from './TaxiOccassion'

export const TaxiBookingApp = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <TaxiBookingBanner />
      <TaxiOccassion />
      <TaxiBookingCustomerApp />
      <TaxiBookingAdminpannel />
      <TaxiBookingDriver />
      <TaxiBookingLowerBanner />


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
