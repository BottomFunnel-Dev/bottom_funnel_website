import React from "react";
import "./pickupcustomer.css";
export const PickupCustomer = () => {
  const pickupcustomer = [
    {
      pickupicon: "Images/pickup/icons/customisedapp.png",
      title: "Easy App Onboarding",
      description:
        "Bottom Funnel is a powerful tool that allows you to identify the strengths and weaknesses of your app.",
    },
    {
      pickupicon: "Images/pickup/icons/customersupport.png",
      title: "Order Services",
      description:
        "It's as easy as ordering from your favorite restaurant or asking a friend to pick up some groceries on the way home.",
    },
    {
      pickupicon: "Images/pickup/icons/pickupdelivery.png",
      title: "Track Order",
      description:
        "With Delivery, you can have your orders delivered right to your doorstep by a fleet of autonomous cars or scooters.",
    },
    {
      pickupicon: "Images/pickup/icons/trackingapp.png",
      title: "In-app Navigation",
      description:
        "Using In-app navigation, they can find the shortest possible route and reach the customers to hand over the package.",
    },
    {
      pickupicon: "Images/pickup/icons/analysisdashboard.png",
      title: "Companies Growth",
      description:
        "Most companies offer a limited number of options for scheduling pickup and delivery services. Branding yourself as one of the best.",
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
