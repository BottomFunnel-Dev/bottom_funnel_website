import React from "react";
import './whoWeAre.css';

const WhoWeAre = () => {
    
  const company = [
    { dropContent: "About Us" },
    { dropContent: "Our Team" },
    { dropContent: "Career " },
    { dropContent: "Contact Us" },
  ];
  const whyBottom = [
    { dropContent: "Client Reviews" },
    { dropContent: "Our Clients" },
    { dropContent: "Our Partners" },
    { dropContent: "Awards and Memberships" },
    { dropContent: "Press and Media" },
  ];
  const process = [
    { dropContent: "Our Development Process" },
    { dropContent: "Engagement Models" },
    { dropContent: "Our Partners" },
  
  ];
  return (
    <div className="mediaDropdownSection">
      <div  className="mediaDropdownContent">
        <h4>Company</h4>
        <div className="mediaListItems">
          {company.map((item, i) => (
            <p key={i}>{item.dropContent}</p>
          ))}
        </div>
      </div>
      <div className="mediaDropdownContent">
        <h4>Why Bottom Funnel</h4>
        <div className="mediaListItems">
          {whyBottom.map((item, i) => (
            <p key={i}>{item.dropContent}</p>
          ))}
        </div>
      </div>
      <div className="mediaDropdownContent">
        <h4>Our Process</h4>
        <div className="mediaListItems">
          {process.map((item, i) => (
            <p key={i}>{item.dropContent}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
