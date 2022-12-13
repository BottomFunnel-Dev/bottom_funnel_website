import React from "react";
import { AndriodBanner } from "./AndriodBanner/AndriodBanner";
import { AndriodBottomFunnel } from "./AndriodBottomFunnel/AndriodBottomFunnel";
import { AndriodCustomDevelopment } from "./AndriodCustomDevelopment/AndriodCustomDevelopment";
import { AndriodServices } from "./AndriodServices/AndriodServices";
import { AndriodUserCentric } from "./AndriodUserCentric/AndriodUserCentric";


export const AndriodAppDevelopment = () => {

  return (
      <>
        <div>
            <AndriodBanner/>
            <AndriodServices/>
            <AndriodCustomDevelopment/>
            <AndriodUserCentric/>
            <AndriodBottomFunnel/>
        </div>
      </>
  );
};
