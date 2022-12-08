import React from "react";
import "./pickupsolutions.css";
export const PickupSolutions = () => {
  const pickupSolarr = [
    {
      pickupicon: "Images/pickup/icons/customisedapp.png",
      solutionText: "Customised App Solution",
    },
    {
      pickupicon: "Images/pickup/icons/customersupport.png",
      solutionText: "Customer Support",
    },
    {
      pickupicon: "Images/pickup/icons/pickupdelivery.png",
      solutionText: "Pickup and Delivery Scheduling Software",
    },
    {
      pickupicon: "Images/pickup/icons/trackingapp.png",
      solutionText: "Delivery Tracking App",
    },
    {
      pickupicon: "Images/pickup/icons/analysisdashboard.png",
      solutionText: "Analytics Dashboard",
    },
    {
      pickupicon: "Images/pickup/icons/proof.png",
      solutionText: "Electronic Payment Proof",
    },
  ];

  return (
    <div className="pickupSolution">
      <div className="pickupsolutionText">
        <h1>Pickup and Delivery Software Solutions</h1>

        <p>
          Bottom Funnel is a software solution that helps restaurants and other
          businesses to manage the on-demand delivery of their products and
          services. With this software, businesses can stay updated on all
          orders placed online, track their delivery status, and take control of
          the entire process.
        </p>
      </div>

      <div className="pickupSols">
        <div className="pickupSolsImage">
          <img src="Images/pickup/backgrounds/softwaresolution.png" alt="" />
        </div>
        <div className="pickupright">
          <div className="pickupSolsText">
            {pickupSolarr.map((item, index) => (
              <div key={index} className="pickupsolcard">
                <div className="pickupIcon">
                  <img src={item.pickupicon} alt="" />
                </div>
                <h6>{item.solutionText}</h6>
              </div>
            ))}
          </div>

          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};
