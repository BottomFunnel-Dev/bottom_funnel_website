import React from "react";
import { BigDataServiceBanner } from "./BigDataServiceBanner/BigDataServiceBanner";
import { BigDataServiceBF } from "./BigDataServiceBF/BigDataServiceBF";
import "./BigDataServiceCom.css";
import { BigDataServiceForm } from "./BigDataServiceForm/BigDataServiceForm";
import { BigDataServiceHandling } from "./BigDataServiceHandling/BigDataServiceHandling";
import { BigDataServicePopular } from "./BigDataServicePopular/BigDataServicePopular";

export const BigDataServiceCom = () => {
  return (
    <div style={{ color: "#393939" }}>
      <BigDataServiceBanner />
      <BigDataServicePopular />
      <BigDataServiceHandling />
      <BigDataServiceBF />
      <BigDataServiceForm />
    </div>
  );
};
