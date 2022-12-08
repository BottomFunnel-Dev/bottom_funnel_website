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
        Salesforce is the world's leading CRM (customer relationship management)
        platform. Help your marketing, sales, commercial, service, and IT teams
        work together from anywhere. This keeps your customers happy wherever
        they are. Watch demo.
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
