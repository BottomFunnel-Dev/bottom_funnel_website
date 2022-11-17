import React from "react";
import { Panel } from "../particularComponents/Panels/Panel";
import "./carpoolingwhy.css";
export const CarpoolingWhy = () => {
  const carpoolwhydata = [
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
    <div className="carpoolingwhy">
      <div className="carpool-why">
        <h1>Rideshare & Carpoooling App Development Solutions We Provide</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi quod
          reiciendis totam minima pariatur. Maxime saepe officiis optio laborum
          quod quibusdam, qui libero, eaque assumenda, voluptatem eveniet a
          fuga?
        </p>
      </div>

      <div className="solutionsFeatures">
        {carpoolwhydata.map((item, index) => (
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



      {/* <Panel/> */}
    </div>
  );
};
