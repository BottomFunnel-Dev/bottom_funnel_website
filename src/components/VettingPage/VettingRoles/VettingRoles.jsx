import React from "react";
import "./VettingRoles.css";

export const VettingRoles = () => {
  const cardData = [
    {
      title: "Email Marketers",
      icons: "Images/VettingPhotos/email.png",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae odio tempore magnam obcaecati et ipsa aut",
    },
    {
      title: "Salesforce experts",
      icons: "Images/VettingPhotos/salesforce.png",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae odio tempore magnam obcaecati et ipsa aut",
    },
    {
      title: "Salesforce experts",
      icons: "Images/VettingPhotos/salesforce.png",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae odio tempore magnam obcaecati et ipsa aut",
    },
    {
      title: "Frontend Developer",
      icons: "Images/VettingPhotos/desktop.png",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae odio tempore magnam obcaecati et ipsa aut",
    },
    {
      title: " Backend Developer",
      icons: "Images/VettingPhotos/setting.png",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae odio tempore magnam obcaecati et ipsa aut",
    },
    {
      title: "UXUI Developer",
      icons: "Images/VettingPhotos/pen.png",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae odio tempore magnam obcaecati et ipsa aut",
    },
  ];

  return (
    <div className="VettingRoles-main">
      <h1>
        <span>Role</span> which have already been vetted through the above
        process
      </h1>
      <div className="VettingRoles-container">
        <div className="VettingRoles-content">
          {cardData.map(({ title, body, icons }, idx) => {
            return (
              <div key={idx}>
                <span>
                  <h4>{title}</h4>
                  <img src={icons} alt={title} />
                </span>
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
