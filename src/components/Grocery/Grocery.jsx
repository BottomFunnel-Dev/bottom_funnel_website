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
import Trusted from '../SEO/SeoTrustedCompanies/Seotrusted'
import { SeoblogSection } from '../SeoBlogs/Seoblogs'
import StoriesSection from '../StoriesSection/StoriesSection'
import DeliveryServices from './DeliveryServices'
import GroceryBanner from './GroceryBanner'
import GroceryFeatures from './GroceryFeatures'
import { groceryLogo } from '../../Data/SeopartnerData'

const Grocery = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div>
      <GroceryBanner/>
      <Trusted  partnerLogo={groceryLogo} />
      <DeliveryServices/>
      <GroceryFeatures/>
      <StoriesSection/>
      <Industries/>
      <PlanProject/>
      <OndemandSection/>
      <PortFolio/>
      <SeoblogSection/>
      <Revamping/>
      <TextDropdown/>
      <ContectForm/>
      <MainFooter/>
    </div>
  )
}

export default Grocery
