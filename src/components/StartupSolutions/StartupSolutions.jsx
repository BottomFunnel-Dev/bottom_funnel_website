import React from "react";
import { StartupSolForm } from "./StartupSolForm/StartupSolForm";
import { StartupSolMidBanner } from "./StartupSolMidBanner/StartupSolMidBanner";
import { StartupSolOffer } from "./StartupSolOffer/StartupSolOffer";
import { StartupSolOfferCard } from "./StartupSolOfferCard/StartupSolOfferCard";
import { StartupSolPartner } from "./StartupSolPartner/StartupSolPartner";
import { StartupSolutionsBanner } from "./StartupSolutionsBanner/StartupSolutionsBanner";
import "./StartupSolutions.css";
import { StartupSolWhyBF } from "./StartupSolWhyBF/StartupSolWhyBF";

export const StartupSolutions = () => {
  return (
    <div className="StartupSolutions-main">
      <StartupSolutionsBanner />
      <StartupSolPartner />
      <StartupSolOffer />
      <StartupSolOfferCard />
      <StartupSolMidBanner />
      <StartupSolWhyBF />
      <StartupSolForm />
    </div>
  );
};
