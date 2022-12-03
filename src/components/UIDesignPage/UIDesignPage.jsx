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
          content="Bottom Funnel is a startup company that helps startups and business
          build their brand visually. We have built an interface that renders a
          visually-stimulating experience to the end users, so you can create
          the best possible user experience for your customers."
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
