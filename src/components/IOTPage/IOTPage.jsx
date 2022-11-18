import React from "react";
import MainFooter from "../FooterSection/MainFooter";
import { IOTBanner } from "./IOTBanner/IOTBanner";
import { IOTBuilds } from "./IOTBuilds/IOTBuilds";
import { IOTForm } from "./IOTForm/IOTForm";
import { IOTMidBanner } from "./IOTMidBanner/IOTMidBanner";
import "./IOTPage.css";
import { IOTServices } from "./IOTServices/IOTServices";
import { IOTwhyBF } from "./IOTwhyBF/IOTwhyBF";

export const IOTPage = () => {
  return (
    <div style={{ color: "#393939" }}>
      <IOTBanner />
      {/* <IOTBuilds /> */}
      <IOTServices />
      <IOTMidBanner />
      <IOTwhyBF />
      <IOTForm />
      <MainFooter/>
    </div>
  );
};
