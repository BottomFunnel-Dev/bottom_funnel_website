import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./UIDesignPage.css";

// ----- React main sub components -----

import { UIDesingBanner } from "./UIDesingBanner/UIDesingBanner";
import { UIDesignEmotions } from "./UIDesignEmotions/UIDesignEmotions";
import { UIDesignWhyBF } from "./UIDesignWhyBF/UIDesignWhyBF";
import { UIDesignMidBanner } from "./UIDesignMidBanner/UIDesignMidBanner";

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

export const UIDesignPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div className="UIDesignPage-container">
      <Helmet>
        <title>User Interface Design | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom funnel knows how important it is to design interfaces that are
          visually-stimulating, so they made sure that every application they
          built offers an experience worth your time."
        />
      </Helmet>
      <UIDesingBanner />
      <UIDesignEmotions />
      <UIDesignWhyBF />
      <UIDesignMidBanner />
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
