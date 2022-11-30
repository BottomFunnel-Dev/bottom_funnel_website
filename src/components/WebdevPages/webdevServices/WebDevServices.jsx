import React from "react";
import "./webDevServices.css";
export const WebDevServices = ({ webservicesContent }) => {
  return (
    <div className="webDevServices">
      <div className="webdevTextServices">
        <h1>{webservicesContent.title} <span className="spanText">Services</span> Provided By Us</h1>

        <p>{webservicesContent.description}</p>
      </div>

      <div className="devServicesFlex">
        {webservicesContent.serviceCard.map((item, index) => (
          <div className="devServiceCard" key={index}>
            <div className="devServiceIcon">
              <img src={item.icon} alt={item.icon} />
            </div>

            <div className="devServiceText">
              <h5>{item.serviceTitle}</h5>
              <p>{item.serviceDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
