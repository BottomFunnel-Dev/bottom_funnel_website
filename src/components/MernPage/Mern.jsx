import React from "react";
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
export const Mern = () => {
  return (
    <div>
      <Mernbanner bannerdata={mernbanner} />
      <MernIntro techIntro={whatData} />
      <MernPoluparServices popularservice={mernservices} />
      <TechGetStarted  calltoAction={letstart} />
      <WhyBottom whyContent={mernWhyContent}/>

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
