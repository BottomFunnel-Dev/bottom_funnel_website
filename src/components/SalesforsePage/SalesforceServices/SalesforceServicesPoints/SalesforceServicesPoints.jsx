import React from "react";
import "./SalesforceServicesPoints.css";

export const SalesforceServicesPoints = () => {
  const cardsData = [
    {
      title: "Better Time management",
      body: "Time management is a huge benefit of Salesforce and one of the best ways to allow a business to grow and thrive.",
    },
    {
      title: "Ultimate Accessbility",
      body: "Since Salesforce is cloud software, it's accessible anywhere and everywhere you have access to the internet.",
    },
    {
      title: "Increased Revenue",
      body: "Without Salesforce, running a busniess in today's world can cost you money. On any given day, your team might produce a ton of data that has to be stored.",
    },
    {
      title: "Greater Customer Satisfaction",
      body: "Similar to increased revenue, it's safe to assume customers are more satisfied when they interact with a business that knows their needs and the state of their relationship with you (thanks to your CRM tool).",
    },
  ];
  return (
    <div className="SalesforceServicesPoints-container">
      {cardsData.map(({ title, body }, idx) => (
        <div>
          <div className="SalesforceServicesPoints-main">
            <h3>0{idx + 1}</h3>
            <span></span>
          </div>
          <div className="SalesforceServicesPoints-content">
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
