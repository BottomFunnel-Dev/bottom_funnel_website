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
import Politicalparty from "./Politicalparty";
import Politicaltool from "./Politicaltool";
import Politicalvolunteer from "./Politicalvolunteer";
import Politicscontainer from "./Politicscontainer";
import Politicsmobile from "./Politicsmobile";
import Politicsreliable from "./Politicsreliable";
import Politictarget from "./Politictarget";
import { Helmet } from "react-helmet";

export default function () {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);
  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>
          Political App Development Agency in India US | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Bottom Funnel offers political campaign volunteer management app development services solutions. We develop apps for political groups with various features."
        />
      </Helmet>
      <Politicscontainer />
      <Politicalparty />
      <Politicsmobile />
      <Politicalvolunteer />
      <Politicaltool />
      <Politicsreliable />
      <Politictarget />
      <StoriesSection />
      <PlanProject />
      <Industries />
      <OndemandSection />
      <PortFolio />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
