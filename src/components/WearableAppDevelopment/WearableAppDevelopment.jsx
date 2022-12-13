import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { Usercentric } from './Usercentric/Usercentric'
import { WearableBanner } from './WearableBanner/WearableBanner'
import { Wearablecardscontainer } from './wearablecardscontainer/wearablecardscontainer'

import { WearableContainer } from './WearableContainer/WearableContainer'
import { WearablePartner } from './WearablePartner/WearablePartner'

// ----- Other requried react components -----
import StoriesSection from "../StoriesSection/StoriesSection";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";

export const WearableAppDevelopment = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);
  return (
    <div>
        <WearableBanner/>
        
        <WearableContainer/>
        {/* <Wearablecardscontainer/> */}
        <Usercentric/>
        <WearablePartner/>

        {/* Other react required components */}
      <StoriesSection />
      <OndemandSection />
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
