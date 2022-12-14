import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./UXDesignPage.css";

// ----- React main sub componients -----

import { UXDesignEmotions } from "./UXDesignEmotions/UXDesignEmotions";
import { UXDesignMidBanner } from "./UXDesignMidBanner/UXDesignMidBanner";
import { UXDesignServices } from "./UXDesignServices/UXDesignServices";
import { UXDesingBanner } from "./UXDesingBanner/UXDesingBanner";
import { UXDesignWhyBF } from "./UXDesignWhyBF/UXDesignWhyBF";

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

export const UXDesignPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div className="UXDesignPage-container">
      <Helmet>
        <title>User Experience Design | Bottom Funnel</title>
        <meta
          name="description"
          content="Seamlessly integrate branding, functionality, usability and accessibility into your product. We enhance user interaction and deliver experiences that are meaningful and delightful."
        />
      </Helmet>
      <UXDesingBanner />
      <UXDesignEmotions />
      <UXDesignServices />
      <UXDesignWhyBF />
      <UXDesignMidBanner />
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
  );
};
