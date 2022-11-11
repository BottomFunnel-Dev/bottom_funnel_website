import React from "react";
import "./pickupcustomer.css";
export const PickupCustomer = () => {
  const pickupcustomer = [
    {
      pickupicon: "Images/pickup/icons/customisedapp.png",
      title: "Easy App Onboarding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet vitae",
    },
    {
      pickupicon: "Images/pickup/icons/customersupport.png",
      title: "Order Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet vitae",
    },
    {
      pickupicon: "Images/pickup/icons/pickupdelivery.png",
      title: "Offers & Discounts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet vitae",
    },
    {
      pickupicon: "Images/pickup/icons/trackingapp.png",
      title: "Multiple Payment Options",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet vitae",
    },
    {
      pickupicon: "Images/pickup/icons/analysisdashboard.png",
      title: "Track Order",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet vitae",
    },
  ];

  return (
    <div className="pickupcustomer">
      <div className="pickupcustomerSols">
        <div className="pickupcustomerright">
      <h1>Customer App</h1>
          <div className="pickupcustomerText">
            {pickupcustomer.map((item, index) => (
              <div key={index} className="pickupcustomercard">
                <div className="pickupcustomerIcon">
                  <img src={item.pickupicon} alt="" />
                </div>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            ))}
            <div className="dummy"></div>
          </div>
        </div>
        <div className="pickupcustomerImage">
          <div className="variableImg">
            <img src="Images/pickup/customerapp/easyappboarding.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
