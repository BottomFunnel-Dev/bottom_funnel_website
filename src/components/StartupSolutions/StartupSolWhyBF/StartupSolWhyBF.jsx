import React from "react";
import "./StartupSolWhyBF.css";

export const StartupSolWhyBF = () => {
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
    { title: "Deep Tech Expertise", body: "" },
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
    <div className="StartupSolWhyBF-main">
      <h1>Why Bottom Funnel For Startup Solutions</h1>
      <div className="StartupSolPartner-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className="StartupSolWhyBF-container">
        <div className="StartupSolWhyBF-content">
          {cardData.map(({ title, body }, idx) => {
            return (
              <div>
                <div>{title}</div>
                <div></div>
              </div>
            );
          })}
        </div>
        <div className="StartupSolWhyBF-image">
          <img
            src="Images/startupSolPhotos/whyBF.png"
            alt="Vector big size image"
          />
        </div>
      </div>
    </div>
  );
};
