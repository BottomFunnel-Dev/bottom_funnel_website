import React from "react";
import "./IphoneDevelopmentservices.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
export const Iphonedevelopmentservices = () => {
  const ser = [
    {
      servicename: "Custom iPhone App Development",
    },
    {
      servicename: "iPhone M-commerce Applications",
    },
    {
      servicename: "iPhone/iPad Game Development",
    },
    {
      servicename: "iPhone Social Media Applications",
    },
    {
      servicename: "Enterprise iPhone Applications",
    },
    {
      servicename: "iPhone Widget Development",
    },
    {
      servicename: "Mobile Application QA / Testing",
    },
    {
      servicename: "iPhone Support and Maintenance",
    },
  ];
  return (
    <div className="_Iphonedevelopmentdiv">
      <h1>What We Offer Our Clients</h1>
      <p>
        Our wide range of versatile services always deliver the best results
        within the prescribed time. Our developers have extensive experience
        working with multiple clients who have helped provide different types of
        iPhone app services. we are always happy to be there for you:
      </p>
      <div className="_Iphonedevelopmentmaindiv">
        <div>
          {ser.map((items, i) => {
            return (
              <h5 key={i}>
                <BsFillPatchCheckFill className="iphonedevelopmenticons" />{" "}
                {items.servicename}
              </h5>
            );
          })}
        </div>
      </div>
      <div className="_Iphonedevelopmentsecond">
        <img src="Images/ios/iosserv.jpg" />
      </div>
    </div>
  );
};
