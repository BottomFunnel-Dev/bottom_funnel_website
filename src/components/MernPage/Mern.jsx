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
export const Mern = () => {
  return (
    <div>
      <Mernbanner bannerdata={mernbanner} />
      <MernIntro techIntro={whatData} />
      <MernPoluparServices popularservice={mernservices} />
      <TechGetStarted  calltoAction={letstart} />
      <WhyBottom/>
    </div>
  );
};
