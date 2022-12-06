import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { Helmet } from "react-helmet";
import { Companystats } from "../CompanyStats/Companystats";
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
import { Iphonedevelopmentpage } from "./Iphonedevelopmentpage";
import { IphoneDevelopmentRelated } from "./IphoneDevelopmentRelated";
import { Iphonedevelopmentservices } from "./Iphonedevelopmentservices";
import { Iphonedevelopmentwhy } from "./Iphonedevelopmentwhy";
import { IphoneDevelopmentwork } from "./IphoneDevelopmentwork";

export const Iphonepage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>iOS App Development Company | Hire Iphone App Developers</title>
        <meta
          name="description"
          content="Bottom Funnel, award-winning iPhone app development company, offers custom iOS &amp; iphone apps development services for entrepreneurs &amp; small businesses."
        />
      </Helmet>
      <Iphonedevelopmentpage />
      <Iphonedevelopmentwhy />
      <Iphonedevelopmentservices />
      <PortFolio />
      <StoriesSection />
      <Industries />
      <OndemandSection />
      <PlanProject />
      <Companystats />
      <Revamping />
      <SeoblogSection />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
