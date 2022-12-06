import React from "react";
import { UXReviesBanner } from "./UXReviesBanner/UXReviesBanner";
import { UXReviewEmotions } from "./UXReviewEmotions/UXReviewEmotions";
import { UXReviewMidBanner } from "./UXReviewMidBanner/UXReviewMidBanner";
import "./UXReviewPage.css";
import { UXReviewWhyBF } from "./UXReviewWhyBF/UXReviewWhyBF";

export const UXReviewPage = () => {
  return (
    <div className="UXReviewPage-container">
      <UXReviesBanner />
      <UXReviewEmotions />
      <UXReviewWhyBF />
      <UXReviewMidBanner />
    </div>
  );
};
