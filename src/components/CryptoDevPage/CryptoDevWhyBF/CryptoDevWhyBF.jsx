import React from "react";
import "./CryptoDevWhyBF.css";

export const CryptoDevWhyBF = () => {
  const cardData = [
    {
      title: "Crypto Exchange Development",
      body: "With our value-based crypto exchange development services, we help businesses to create safe, user-friendly, and efficient platforms.",
    },
    {
      title: "Cryptocurrency Wallet Development",
      body: " We are a team of experts who understand about all the intricacies involved in creating an authentic cryptocurrency wallet that is secure and safe to use.",
    },
    {
      title: "Ethereum Exchange Development",
      body: "Bottom Funnel IT Solutions is the go-to Ethereum exchange development service for business owners looking to improve their productivity.",
    },
    {
      title: "Decentralized App Development",
      body: "We understand how important your company is in its current stage of growth. That's why we've come up with solutions that help you achieve sustainable growth.",
    },
    {
      title: "Mobile Crypto Exchange",
      body: "Bottom Funnel IT Solutions is renowned for providing innovative mobile solutions. We ensure to maintain consistent quality in our mobile crypto exchange platforms.",
    },
    {
      title: "Bitcoin Exchange Platform Development",
      body: "Businesses today have to keep up with the ever-changing world of technology, and our team of experts understands this. That's why we're making it our mission to bring cutting-edge solutions.",
    },
  ];

  return (
    <div className="CryptoDevWhyBF-main">
      <h1>
        Bottom Funnel For <span>Crypto Development</span> Services
      </h1>
      <div className="CryptoDevApproach-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className="CryptoDevWhyBF-container">
        <div className="CryptoDevWhyBF-content">
          {cardData.map(({ title, body }, idx) => {
            return (
              <div key={title}>
                <h4>{title}</h4>
                <div>
                  <p>{body}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="CryptoDevWhyBF-image">
          <img
            src="Images/CryptoDevPhotos/whyBF.png"
            alt="Vector big size image"
          />
        </div>
      </div>
    </div>
  );
};
