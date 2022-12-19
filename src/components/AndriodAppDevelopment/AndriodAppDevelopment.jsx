import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { AndriodBanner } from "./AndriodBanner/AndriodBanner";
import { AndriodBottomFunnel } from "./AndriodBottomFunnel/AndriodBottomFunnel";
import { AndriodCustomDevelopment } from "./AndriodCustomDevelopment/AndriodCustomDevelopment";
import { AndriodServices } from "./AndriodServices/AndriodServices";
import { AndriodUserCentric } from "./AndriodUserCentric/AndriodUserCentric";

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


export const AndriodAppDevelopment = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <>
      <div>
        <AndriodBanner />
        <AndriodServices />
        <AndriodCustomDevelopment />
        <AndriodUserCentric />
        <AndriodBottomFunnel />

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
