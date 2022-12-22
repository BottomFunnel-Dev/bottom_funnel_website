import React from "react";
import { CollaboratinTeamwork } from "./CollaboratinTeamwork/CollaboratinTeamwork";
import { CollaborationAbout } from "./CollaborationAbout/CollaborationAbout";
import { CollaborationBanner } from "./CollaborationBanner/CollaborationBanner";
import { CollaborationMidBanner } from "./CollaborationMidBanner/CollaborationMidBanner";
import { CollaborationOffers } from "./CollaborationOffers/CollaborationOffers";
import "./CollaborationPage.css";

export const CollaborationPage = () => {
  return (
    <div className="CollaborationPage-container">
      <CollaborationBanner />
      <CollaboratinTeamwork />
      <CollaborationAbout />
      <CollaborationOffers />
      <CollaborationMidBanner />
    </div>
  );
};
