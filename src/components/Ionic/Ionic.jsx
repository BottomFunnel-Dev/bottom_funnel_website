import React from "react";
import { Ionicadvantages } from "./Ionicadvantages";
import { Ionicbenefits } from "./Ionicbenefits";
import { Ionicdevelopmentbanner } from "./Ionicdevelopmentbanner";
import { Ionicservices } from "./Ionicservices";
import { Ionicwhy } from "./Ionicwhy";

export const Ionic = () => {
  return (
    <div className="_Reactnative">
      <Ionicdevelopmentbanner />
      <Ionicservices />
      <Ionicbenefits />
      <Ionicadvantages />
      <Ionicwhy />
    </div>
  );
};
