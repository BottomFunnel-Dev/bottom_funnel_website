import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./IOTPage.css";

// ----- React main sub components -----

import { IOTBanner } from "./IOTBanner/IOTBanner";
import { IOTMidBanner } from "./IOTMidBanner/IOTMidBanner";
import { IOTServices } from "./IOTServices/IOTServices";
import { IOTwhyBF } from "./IOTwhyBF/IOTwhyBF";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";

// ----- Other requried react components -----
import StoriesSection from "../StoriesSection/StoriesSection";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";

export const IOTPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>IoT Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom funnel is an IoT solution that combines hardware parts and
        software programs. This final product could monitor specific values,
        collect and transfer data, analyze given data and cause the physical
        device to act correspondingly."
        />
      </Helmet>
      <IOTBanner />
      <IOTServices />
      <IOTMidBanner />
      <IOTwhyBF />
      <CustomWebForm />
      {/* Other react required components */}
      <StoriesSection />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <MainFooter />
    </div>
  );
};
