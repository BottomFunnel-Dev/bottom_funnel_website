import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { SocialMediaAdminPannel } from "./SocialMediaAdminPannel";
import { SocialMediaApproch } from "./SocialMediaApproch";
import { SocialMediaBanner } from "./SocialMediaBanner";
import { SocialMedialLowerBanner } from "./SocialMedialLowerBanner";
import { SocialMediaSolution } from "./SocialMediaSolution";
import { SocialMediaSuggestion } from "./SocialMediaSuggestion";
// ----- Importing react components -----
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

export const SocialMedia = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <SocialMediaBanner />
      <SocialMediaSuggestion />
      <SocialMediaApproch />
      <SocialMediaSolution />
      <SocialMediaAdminPannel />
      <SocialMedialLowerBanner />
      {/* ----- End of main page. Now Further components ----- */}
      <Industries />
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
