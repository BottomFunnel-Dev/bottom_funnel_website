import React from "react";
import "./enterpriseEngage.css";
export const EnterpriseEngage = () => {
  const engageData = [
    {
      icon: "Images/Enterprise/icons/image9.png",
      boldtext: "3.5 billion",
      para: "Daily Tecket interection",
    },
    {
      icon: "Images/Enterprise/icons/image10.png",
      boldtext: "120+ Countries",
      para: "Where customers are served",
    },
    {
      icon: "Images/Enterprise/icons/image11.png",
      boldtext: "42 Languages",
      para: "Supported",
    },
    {
      icon: "Images/Enterprise/icons/image12.png",
      boldtext: "13 offices",
      para: "Acorss 4 Continents",
    },
    {
      icon: "Images/Enterprise/icons/image13.png",
      boldtext: "4000+ ",
      para: "Employees",
    },
    {
      icon: "Images/Enterprise/icons/image14.png",
      boldtext: "1+ billion",
      para: "API calls serviced every day",
    },
  ];

  return (
    <div className="engage-cards">
      <h1>
        The enterprise customer engagement platform for fast growing business
      </h1>

      <div className="engagecard-class">
        {engageData.map((item, index) => (
          <div className="engage-card-inner" key={index}>
            <div className="engage-icon">
              <img src={item.icon} alt="" />
            </div>
            <h5>{item.boldtext}</h5>
            <p>{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
