import React from "react";
import { Flutteradvantages, Reactnativeadvantages } from "./Flutteradvantages";
import { Flutterbenefits, Reactnativebenefits } from "./Flutterbenefits";
import {
  Flutterdevelopmentbanner,
  Reactnativedevelopment,
  Reactnativedevelopmentbanner,
} from "./Flutterdevelopmentbanner";
import { Flutterservices, Reactnativeservices } from "./Flutterservices";
import { Flutterwhy, Reactnativewhy } from "./Flutterwhy";

export const Flutter = () => {
  return (
    <div className="_Reactnative">
      <Flutterdevelopmentbanner />
      <Flutterservices />
      <Flutterbenefits />
      <Flutteradvantages />
      <Flutterwhy />
    </div>
  );
};
