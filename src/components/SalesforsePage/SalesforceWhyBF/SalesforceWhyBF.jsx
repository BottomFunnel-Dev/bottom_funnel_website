import React from "react";
import "./SalesforceWhyBF.css";

export const SalesforceWhyBF = () => {
  const cardData = [
    {
      title: "Supreme Quality",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae odio tempore magnam obcaecati et ipsa aut",
    },
    {
      title: "Seamless Communication",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae odio tempore magnam obcaecati et ipsa aut",
    },
    {
      title: "Transparency & Accountability",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae odio tempore magnam obcaecati et ipsa aut",
    },
    {
      title: "Deep Tech Expertise",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae odio tempore magnam obcaecati et ipsa aut",
    },
    {
      title: "Top-Tier Talent",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae odio tempore magnam obcaecati et ipsa aut",
    },
    {
      title: "Post-Release Support",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae odio tempore magnam obcaecati et ipsa aut",
    },
  ];
  return (
    <div className="SalesforceWhyBF-main">
      <h1>Why Bottom Funnel For Salesforce Solutions</h1>
      <div className="SalesforceServices-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className="SalesforceWhyBF-container">
        <div className="SalesforceWhyBF-image">
          <img
            src="Images/salesforcePhotos/vector.png"
            alt="Vector big size image"
          />
        </div>
        <div className="SalesforceWhyBF-content">
          {cardData.map(({ title, body }, idx) => {
            return (
              <div>
                <h4>{title}</h4>
                <div>
                  <p>{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
