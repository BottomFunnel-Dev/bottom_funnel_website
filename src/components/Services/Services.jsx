import React, { useState } from "react";
import "./services.css";
import { FaMobileAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

const Services = () => {
  let arr = [
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Mobile & Wearables",
      serviceImages: "Images/services/mobileandwearable.gif",
      serviceTypes: ["IOS", "ANDROID", "FLUTTER", "REACT NATIVE"],
      link: "/web-development",
      serviceDesc:
        "Experience the power of intuitive mobile and wearables apps. We specialize in cross-platform wearable app development that can be used on any digital device.",
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Web Development",
      serviceImages: "Images/services/web-dev.gif",
      serviceTypes: ["MERN", "MEAN", "JAVA", "PHP", "PYTHON"],
      link:"/mobile-app-development",
      serviceDesc:
        "Own your market with a mobile app from Web Development! Our team of experts will help you build your next big thing with the latest in mobile app technology.",
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Digital Marketing",
      serviceImages: "Images/services/digital.gif",
      serviceTypes: ["SEO", "SMM", "SEM", "LOCALSEO", "GUEST POSTING"],
      link:"/Digital-marketing",
      serviceDesc:
        "Unleash the power of your brand with our digital marketing services. Get more customers and revenue with SEOs, social media, and email marketing from the experts.",
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Cloud Services",
      serviceImages: "Images/services/cloud-new-1.gif",
      serviceTypes: ["AWS", "GCP", "AZURE", "VULTR", "CLOUDFARE"],
      link:"/cloud",
      serviceDesc:
        "We provide you a suite of cloud services for modern and data-intensive applications, with custombuilt infrastructure and leading tools & services.",
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Software Product Development",
      serviceImages: "Images/services/machine-lkearning.gif",
      serviceTypes: ["IOT", "AI", "ML", "BLOCKCHAIN", "DATA SCIENCE"],
      link:"/Products",
      serviceDesc:
        "You need software that can scale with your company's needs and work as hard as you do, it's time to let us help you with product development.",
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Salesforce Development",
      serviceImages: "Images/services/salesforce.gif",
      serviceTypes: ["QUIP", "NFT CLOUD", "TABLEAU", "CRM ANALYTICS"],
      link:"/salesforce",
      serviceDesc:
        "Want to grow your business with salesforce development? We're your one-stop-shop for all of your Salesforce needs! Automate and integrate your Salesforce with the help of our experts.",
    },
  ];

  return (
    <div className="mainService">
      <div className="serviceIntro">
        <img src="Images/services/service.png" alt="" />
        <div>
          <h1>Our Services</h1>
          <p>
            Our Services will provide an aggressive edge to your business. We
            are committed to serving your business needs by utilizing
            cutting-edge marketing technologies and strategies that are designed
            to increase visibility, engagement and conversion. Our approach is
            based on the belief that a strategic digital marketing plan will
            result in more sales for your business.
          </p>
          <button>Explore Our All Services</button>
        </div>
      </div>


      <div className="services">
        {arr.map((item, i) => (
          <div key={i}>
            <Link to={item.link} style={{ textDecoration: "none" }}>
              <div className="serviceHeadingFullPart">
                <div className="serviceHeading">
                  <h4>{item.serviceName}</h4>
                  <div className="vectorImage">
                    <img src={item.serviceImages} alt="" />
                  </div>
                </div>
                <div className="supportableDevices" style={{ textDecoration: "none" }}>
                  <li>{item.serviceTypes[0]}</li>
                  <li>{item.serviceTypes[1]}</li>
                  <li>{item.serviceTypes[2]}</li>
                  <li>{item.serviceTypes[3]}</li>
                  <li>{item.serviceTypes[4]}</li>
                  <li>{item.serviceTypes[5]}</li>
                </div>
              </div>

              <div className="serviceDescriptionVisible">
                <p>{item.serviceDesc}</p>
                <p>READ MORE</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
