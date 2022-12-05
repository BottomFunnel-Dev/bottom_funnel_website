import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import PortFolio from "../PortFolioSection/PortFolio";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import { Flutteradvantages } from "./Flutteradvantages";
import { Flutterbenefits } from "./Flutterbenefits";
import { Flutterdevelopmentbanner } from "./Flutterdevelopmentbanner";
import { Flutterservices } from "./Flutterservices";
import { Flutterwhy } from "./Flutterwhy";
import { Helmet } from "react-helmet";

export const Flutter = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div className="_Reactnative">
      <Helmet>
        <title>Flutter Application Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Flutter is an open-source UI software development kit created by
          Google. Flutter allows developers to build cross-platform applications
          for Android, iOS, Linux, macOS, Windows, Google Fuchsia and web from a
          single codebase."
        />
      </Helmet>
      <Flutterdevelopmentbanner />
      <Flutterservices />
      <Flutterbenefits />
      <Flutteradvantages />
      <Flutterwhy />
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
  );
};
