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
import { IceCreamAdminPannel } from './IceCreamAdminPannel'
import { IcecreamBanner } from './IcecreamBanner'
import { IcecreamCSolution } from './IcecreamCSolution'
import { IcecreamCustomerApp } from './IcecreamCustomerApp'
import { IceCreamDriverApp } from './IceCreamDriverApp'

export const Icecream = () => {

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);


  return (
    <div>
    <IcecreamBanner />
    <IcecreamCSolution />
    <IcecreamCustomerApp />
    <IceCreamAdminPannel />
    <IceCreamDriverApp />

    <PortFolio />
    <StoriesSection />
    <Industries />
    <PlanProject />
    <OndemandSection />
    <SeoblogSection />
    <Revamping />
    <TextDropdown />
    <ContectForm />
    <MainFooter />
    </div>
  )
}
