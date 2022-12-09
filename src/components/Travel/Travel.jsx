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
import TravelBrands from "./TravelBrands";
import Travelcontainer from "./Travelcontainer";
import Travelfeature from "./Travelfeature";
import TravelFlight from "./TravelFlight";
import Travelsolution from "./Travelsolution";
import Travelstart from "./Travelstart";
import Travelwhy from "./Travelwhy";
import { Helmet } from "react-helmet";

export default function Travel() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Travel App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="We are a leading travel app development company with a rich experience in developing best-in-class travel software solutions."
        />
      </Helmet>
      <Travelcontainer />
      <TravelBrands />
      <Travelfeature />
      <TravelFlight />
      <Travelsolution />
      <Travelwhy />
      <Travelstart />
      <StoriesSection />
      <Industries />
      <PlanProject />
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
