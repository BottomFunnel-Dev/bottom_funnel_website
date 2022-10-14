import React from "react";
import { SkillsComBanner } from "./SkillsComBanner";
import { SkillsComBookCall } from "./SkillsComBookCall";
import { SkillsComDes } from "./SkillsComDes";
import { SkillsComRemarkable } from "./SkillsComRemarkable";
import { SkillsComWhyApp } from "./SkillsComWhyApp";
import { SkillsComWhyBF } from "./SkillsComWhyBF";
import { SkillsComBannerNav } from "./SkillsComBannerNav";

import "./SkillsComPage.css";

export const SkillsComPage = ({ allData }) => {
  const {
    isBanner,
    BannerData,
    isDes,
    desData,
    isWhyApp,
    WhyAppData,
    isWhyBF,
    WhyBFData,
    isBookCall,
    BookCallData,
    isRemarkable,
    RemarkableData,
  } = allData;

  return (
    <div>
      {isBanner ? <SkillsComBanner data={BannerData} /> : null}
      {/* {<SkillsComBannerNav />} */}
      <hr id="skills-hr" />
      {isDes ? <SkillsComDes DescrptionData={desData} /> : null}
      {isWhyApp ? <SkillsComWhyApp data={WhyAppData} /> : null}
      {isWhyBF ? <SkillsComWhyBF data={WhyBFData} /> : null}
      {isBookCall ? <SkillsComBookCall data={BookCallData} /> : null}
      {isRemarkable ? <SkillsComRemarkable data={RemarkableData} /> : null}
    </div>
  );
};
