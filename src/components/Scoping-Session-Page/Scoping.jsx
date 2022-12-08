import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import MiddleText from "../Scoping-Session-Page/MiddleText";
import MidImages from "../Scoping-Session-Page/MidImages";
import RoundIconsText from "../Scoping-Session-Page/RoundIconsText";
import Footer from "../Scoping-Session-Page/Footer";
import Header from "../Scoping-Session-Page/Header";
import { Helmet } from "react-helmet";

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

export const Scoping = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Scoping Session | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom Funnel is a marketing agency that specializes in conveying breakthrough ideas to the market cost-effectively. We understand your product inside out and will work tirelessly to make it a success."
        />
      </Helmet>
      <Header />
      <MiddleText />
      <MidImages />
      <RoundIconsText />
      <Footer />
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
