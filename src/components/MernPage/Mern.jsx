import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { Mernbanner } from "./Mernbanner";
import { mernbanner } from "../../Data/webdevPageData/TechBannerData";
import { MernIntro } from "./MernIntro";
import { whatData } from "../../Data/webdevPageData/TechWhatData";
import { MernPoluparServices } from "./MernPoluparServices";
import { mernservices } from "../../Data/webdevPageData/Popularservices";
import { TechGetStarted } from "./TechGetStarted";
import { letstart } from "../../Data/webdevPageData/LetStart";
import { WhyBottom } from "./WhyBottom";
import { mernWhyContent } from "../../Data/webdevPageData/whyBottomContent";
import StoriesSection from "../StoriesSection/StoriesSection";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";
export const Mern = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>MERN stack development | Bottom Funnel</title>
        <meta
          name="description"
          content="MERN stack is the current favorite tool among modern web developers. It is said to speed up app development as JavaScript runs on all platforms. So, if you are looking for a way to build faster and more modern web applications, MERN is your answer!"
        />
      </Helmet>
      <Mernbanner bannerdata={mernbanner} />
      <MernIntro techIntro={whatData} />
      <MernPoluparServices popularservice={mernservices} />
      <TechGetStarted calltoAction={letstart} />
      <WhyBottom whyContent={mernWhyContent} />

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
};
