import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { MobileDevMainBanner } from "./MobileDevMainBanner/MobileDevMainBanner";
import { MobileDevMainCards } from "./MobileDevMainCards/MobileDevMainCards";
import { MobileDevMainProject } from "./MobileDevMainProject/MobileDevMainProject";
import { MobileDevMainServices } from "./MobileDevMainServices/MobileDevMainServices";
import { MobileDevMainSolutions } from "./MobileDevMainSolutions/MobileDevMainSolutions";
import { MobileDevMainWhyChoose } from "./MobileDevMainWhyChoose/MobileDevMainWhyChoose";

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

export const MobileDevMain = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <>
      <div>
        <MobileDevMainBanner />
        <MobileDevMainServices />
        <MobileDevMainCards />
        <MobileDevMainSolutions />
        <MobileDevMainProject />
        <MobileDevMainWhyChoose />

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
    </>
  );
};
