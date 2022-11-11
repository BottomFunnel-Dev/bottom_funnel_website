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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas
          fuga, id libero asperiores ut inventore itaque nostrum fugit velit
          voluptatum voluptate maiores, rem labore provident vitae! Illo ad
          veniam, sapiente velit vitae quaerat quam. Molestias dolores qui,
          suscipit vel voluptatibus iure minima quae eum asperiores nobis,
          dolorum a laudantium!
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
