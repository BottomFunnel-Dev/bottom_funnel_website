import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { DeskStarted } from './DeskStarted'
import { EliteLast } from './EliteLast'
import { EliteServices } from './EliteServices'
import { FunnelDeskBanner } from './FunnelDeskBanner'
import { FunnelSupport } from './FunnelSupport'
import { IndustryExperts } from './IndustryExperts'



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

export const FunnelDesk = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
        <FunnelDeskBanner/>
        <FunnelSupport/>
        <EliteServices/>
        <EliteLast/>
        <IndustryExperts/>
        <DeskStarted/>

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
