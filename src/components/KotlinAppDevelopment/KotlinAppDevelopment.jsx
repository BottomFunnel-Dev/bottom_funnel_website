import React from "react";
import { KotlinBanner } from "./KotlinBanner/KotlinBanner";
import { KotlinCards } from "./KotlinCards/KotlinCards";
import { KotlinDevelopment } from "./KotlinDevelopment/KotlinDevelopment";
import { KotlinIntegration } from "./KotlinIntegration/KotlinIntegration";
import { KotlinPartner } from "./KotlinPartner/KotlinPartner";
import { KotlinProject } from "./KotlinProject/KotlinProject";
import { KotlinSolutions } from "./KotlinSolutions/KotlinSolutions";
import { WhyChooseKotlin } from "./WhyChooseKotlin/WhyChooseKotlin";


export const KotlinAppDevelopment = () => {

  return (
      <>
        <div>
            <KotlinBanner/>
            <KotlinDevelopment/>
            <KotlinSolutions/>
            <KotlinProject/>
            <KotlinIntegration/>
            <WhyChooseKotlin/>
            <KotlinPartner/>
            <KotlinCards/>
        </div>
      </>
  );
};
