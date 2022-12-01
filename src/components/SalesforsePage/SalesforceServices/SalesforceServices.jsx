import React from "react";
import "./SalesforceServices.css";
import { SalesforceServicesborder } from "./SalesforceServicesborder/SalesforceServicesborder";
import { SalesforceServicesPoints } from "./SalesforceServicesPoints/SalesforceServicesPoints";

export const SalesforceServices = () => {
  return (
    <div className="SalesforceServices-container">
      <h1>What is Salesforce Services</h1>
      <div className="SalesforceServices-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Salesforce is the world's #1 customer relationship management (CRM)
        platform. We help your marketing, sales, commerce, service and IT teams
        work as one from anywhere - so you can keeep your customers happy
        everywhere. Watch demos.
      </p>
      <div className="SalesforceServices-main">
        <div className="SalesforceServices-vector">
          <img
            src="Images/salesforcePhotos/services.png"
            alt="SalesforceServices vector"
          />
        </div>
        <div className="SalesforceServices-content">
          <SalesforceServicesborder />
          <SalesforceServicesPoints />
        </div>
      </div>
    </div>
  );
};
