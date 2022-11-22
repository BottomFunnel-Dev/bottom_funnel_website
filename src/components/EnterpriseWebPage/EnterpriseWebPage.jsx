import React from "react";
import MainFooter from "../FooterSection/MainFooter";
import { EnterpriseForm } from "./EnterpriseForm/EnterpriseForm";
import { EnterpriseMidBanner } from "./EnterpriseMidBanner/EnterpriseMidBanner";
import { EnterpriseSlider } from "./EnterpriseSlider/EnterpriseSlider";
import { EnterpriseSupporting } from "./EnterpriseSupporting/EnterpriseSupporting";
import { EnterpriseWebAnalysis } from "./EnterpriseWebAnalysis/EnterpriseWebAnalysis";
import { EnterpriseWebBanner } from "./EnterpriseWebBanner/EnterpriseWebBanner";
import "./EnterpriseWebPage.css";
import { EnterpriseWebSolutions } from "./EnterpriseWebSolutions/EnterpriseWebSolutions";
import { EnterpriseWhyBF } from "./EnterpriseWhyBF/EnterpriseWhyBF";

export const EnterpriseWebPage = () => {
  return (
    <div style={{ color: "#393939" }}>
      <EnterpriseWebBanner />
      <EnterpriseWebAnalysis />
      <EnterpriseSupporting />
      <EnterpriseWebSolutions />
      <EnterpriseMidBanner />
      <EnterpriseWhyBF />
      <EnterpriseSlider />
      <EnterpriseForm />
      <MainFooter/>
    </div>
  );
};
