import React from "react";
import "./BlockChainPage.css";

import { BlockChainBanner } from "./BlockChainBanner/BlockChainBanner";
import { BlockChainOffer } from "./BlockChainOffer/BlockChainOffer";
import { BlockChainServices } from "./BlockChainServices/BlockChainServices";
import { BlockChainBF } from "./BlockChainBF/BlockChainBF";
import { BlockChainForm } from "./BlockChainForm/BlockChainForm";

export const BlockChainPage = () => {
  return (
    <div style={{ color: "#393939" }}>
      <BlockChainBanner />
      <BlockChainOffer />
      <BlockChainServices />
      <BlockChainBF />
      <BlockChainForm />
    </div>
  );
};
