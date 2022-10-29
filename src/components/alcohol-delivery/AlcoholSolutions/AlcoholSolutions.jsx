import React from "react";
import { AcoholAdminpanel } from "./AcoholAdminPanel/AcoholAdminpanel";
import { AcoholAdvanceTech } from "./AcoholAdvanceTech/AcoholAdvanceTech";
import { AcoholPartnerApp } from "./AcoholPartnerApp/AcoholPartnerApp";
import "./AlcoholSolutions.css";

export const AlcoholSolutions = () => {
  return (
    <div>
      <AcoholAdvanceTech />
      <AcoholAdminpanel />
      <AcoholPartnerApp />
    </div>
  );
};
