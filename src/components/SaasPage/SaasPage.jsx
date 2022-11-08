import React from "react";
import { Saasbanner } from "./Saasbanner/Saasbanner";
import { SaasExpetise } from "./SaasExpetise/SaasExpetise";
import "./SaasPage.css";
import { SaasStrategy } from "./SaasStrategy/SaasStrategy";
import { SaasSuite } from "./SaasSuite/SaasSuite";
import { SaasValuable } from "./SaasValuable/SaasValuable";

export const SaasPage = () => {
  return (
    <div>
      <Saasbanner />
      <SaasExpetise />
      <SaasSuite />
      <SaasValuable />
      <SaasStrategy />
    </div>
  );
};
