import React from "react";
import { AIBanner } from "./AIBanner/AIBanner";
import "./AIPage.css";
import { AIMidBanner } from "./AIMidBanner/AIMidBanner";
import { AIServices } from "./AIServices/AIServices";
import { AIwhyBF } from "./AIwhyBF/AIwhyBF";
import { AIForm } from "./AIForm/AIForm";
import { AITech } from "./AITech/AITech";
import MainFooter from "../FooterSection/MainFooter";

export const AIPage = () => {
  return (
    <div style={{ color: "#393939" }}>
      <AIBanner />
      <AIServices />
      <AIMidBanner />
      <AIwhyBF />
      <AITech />
      <AIForm />
      <MainFooter/>
    </div>
  );
};
