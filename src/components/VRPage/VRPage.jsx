import React from "react";
import { VRBanner } from "./VRBanner/VRBanner";
import { VRMidBanner } from "./VRMidBanner/VRMidBanner";
import "./VRPage.css";
import { VRServices } from "./VRServices/VRServices";
import { VRwhyBF } from "./VRwhyBF/VRwhyBF";
import { VRSlider } from "./VRSlider/VRSlider";
import { VRForm } from "./VRForm/VRForm";
import { MainBanner } from "../particularComponents/BannerCompo/MainBanner";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";

export const VRPage = () => {
  return (
    <div>
      <VRBanner />
      <VRServices />
      {/* <Industries/> */}
      <VRMidBanner />
      <VRwhyBF />
      <VRSlider />
      <VRForm />
      <MainFooter/>
    </div>
  );
};
