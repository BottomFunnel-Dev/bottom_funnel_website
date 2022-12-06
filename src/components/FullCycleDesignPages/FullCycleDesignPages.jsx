import React from "react";
import { FullCycleDesignBanner } from "./FullCycleDesignBanner/FullCycleDesignBanner";
import { FullCycleDesignMidBanner } from "./FullCycleDesignMidBanner/FullCycleDesignMidBanner";
import "./FullCycleDesignPages.css";
import { FullCycleDesignShape } from "./FullCycleDesignShape/FullCycleDesignShape";
import { FullCycleDesignTeam } from "./FullCycleDesignTeam/FullCycleDesignTeam";
import { FullCycleDesignWeKnow } from "./FullCycleDesignWeKnow/FullCycleDesignWeKnow";

export const FullCycleDesignPages = () => {
  return (
    <div className="FullCycleDesignPages-main">
      <FullCycleDesignBanner />
      <FullCycleDesignShape />
      <FullCycleDesignTeam />
      <FullCycleDesignMidBanner />
      <FullCycleDesignWeKnow />
    </div>
  );
};
