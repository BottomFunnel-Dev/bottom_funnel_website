import React from "react";
import { WhyChooseXamarin } from "./WhyChooseXamarin/WhyChooseXamarin";
import { XamarinAppDevelopmentBanner } from "./XamarinAppDevelopmentBanner/XamarinAppDevelopmentBanner";
import { XamarinApproach } from "./XamarinApproach/XamarinApproach";
import { XamarinDevelopers } from "./XamarinDevelopers/XamarinDevelopers";
import { XamarinDevelopmentExpertise } from "./XamarinDevelopmentExpertise/XamarinDevelopmentExpertise";
import { XamarinMobileDevelopment } from "./XamarinMobileDevelopment/XamarinMobileDevelopment";
import { XamarinSolutions } from "./XamarinSolutions/XamarinSolutions";



export const XamarinAppDevelopment = () => {

  return (
      <>
        <div>
          <XamarinAppDevelopmentBanner/>
          <XamarinMobileDevelopment/>
          <XamarinSolutions/>
          <WhyChooseXamarin/>
          <XamarinDevelopers/>
          <XamarinApproach/>
          <XamarinDevelopmentExpertise/>
        </div>
      </>
  );
};
