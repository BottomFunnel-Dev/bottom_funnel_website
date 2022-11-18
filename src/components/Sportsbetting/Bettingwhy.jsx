import React from "react";
import "./bettingwhy.css";
export const Bettingwhy = () => {
  const bettingwhydata = [
    {
      cardtitle: "100% Customzation",
      cardIcon: "Images/carpoolingpage/icons/Component 6.png",
    },
    {
      cardtitle: "Highly Scalable",
      cardIcon: "Images/carpoolingpage/icons/Component 7.png",
    },
    {
      cardtitle: "Dedicated Support",
      cardIcon: "Images/carpoolingpage/icons/Component 8.png",
    },
    {
      cardtitle: "Global Solution",
      cardIcon: "Images/carpoolingpage/icons/Component 9.png",
    },
  ];

  return (
    <div className="bettingwhy">
     <div className="bettingText">
     <h1>
        Why Choose Bottom Funnel As Your Sports Betting App Development Company?
      </h1>
      <p>We know how critical it is for your users to have an enjoyable experience while placing their bets, and we are committed to making that happen! Using our extensive expertise in developing mobile apps, we have designed an engaging and intuitive interface that will ease the user's transition from desktop to mobile.</p>
     </div>

      <div className="solutionsFeatures">
        {bettingwhydata.map((item, index) => (
          <div key={index} className="whyCards">
            <div className="whycardIcon">
              {" "}
              <img src={item.cardIcon} alt="" />
            </div>

            <div className="solutionContent">
              <h5>{item.cardtitle}</h5>
              <p>{item.CardDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
