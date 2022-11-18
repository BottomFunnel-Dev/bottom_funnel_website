import React from "react";
import Logiccustomer from "../Logistic/Logiccustomer";
import "./sportsPanels.css";

import {
  bettingCustomer,
  bettingAdmin,
  bettingDrive,
} from "../../Data/panelsData";
import Logicdrive from "../Logistic/Logicdrive";
import Logisticadmin from "../Logistic/Logisticadmin";
export const SportsPanels = () => {
  return (
    <div className="sportspanels">
        <div className="headingpanel"><h1>An Overview of our robust sports betting app solution</h1></div>
      <Logiccustomer customerData={bettingCustomer} />
      <Logicdrive driveData={bettingDrive} />
      <Logisticadmin adminData={bettingAdmin} />
    </div>
  );
};
