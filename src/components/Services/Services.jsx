import React, { useState } from "react";
import "./services.css";
import { FaMobileAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Services = () => {
  let arr = [
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Mobile & Wearables",
      serviceImages: "Images/services/mobileandwearable.gif",
      serviceTypes:['IOS', 'ANDROID','HYBRID','WEARABLES']
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Web Development",
      serviceImages: "Images/services/web-dev.gif",
      serviceTypes:['PHP', '.NET','JAVA','NODE']
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Digital Marketing",
      serviceImages: "Images/services/digital.gif",
      serviceTypes:['IOS', 'ANDROID','HYBRID','WEARABLES']
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Cloud Services",
      serviceImages: "Images/services/cloud-new-1.gif",
      serviceTypes:['ARCHITECT', 'BUILD','MANAGE']
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Machine Learning",  
      serviceImages: "Images/services/machine-lkearning.gif",
      serviceTypes:['IOS', 'ANDROID','HYBRID','WEARABLES']

    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Salesforce Development",
      serviceImages: "Images/services/salesforce.gif",
      serviceTypes:['IOS', 'ANDROID','HYBRID','WEARABLES']

    },
    
  ];

  return (
    <div className="mainService">
      <div className="serviceIntro">
        <img src="Images/services/service.png" alt="" />
        <div>
          <h1>Our Services</h1>
          <p>
            We build the foundation for cognitive business by working with
            complex technologies and rapidly evolving business environment, to
            offer project performance optimization. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consequuntur, hic ducimus enim
            voluptatibus eaque maiores officia culpa cum necessitatibus autem?
          </p>
          <button>Explore Our All Services</button>
        </div>
      </div>

      <div className="services">
        {arr.map((item, i) => (
          <div key={i}>
            <div className="serviceHeadingFullPart">
              <div className="serviceHeading">
                <h4>{item.serviceName}</h4>
                <div className="vectorImage">
                  <img src={item.serviceImages} alt="" />
                </div>
              </div>
              <div className="supportableDevices">
                <li>IOS</li>
                <li>IOS</li>
                <li>IOS</li>
                <li>IOS</li>
                <li>IOS</li>
              </div>
            </div>

            <div className="serviceDescriptionVisible">
              <p>
                Our mobile app development services offer modern, feature-rich
                solutions for iOS, Android and cross-platform mobile apps. We
                also build amazing wearable solutions.
              </p>
              <p>READ MORE</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
