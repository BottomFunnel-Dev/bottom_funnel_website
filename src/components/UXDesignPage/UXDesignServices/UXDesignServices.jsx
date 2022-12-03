import React from "react";
import "./UXDesignServices.css";

export const UXDesignServices = () => {
  const cardsData = [
    {
      title: "Interactive Prototypes",
      body: "To make sure you approve of it, first, we provide you with a dummy so that we can deliver an optimum quality product at a cost-efficient rate.",
    },
    {
      title: "Wireframing",
      body: "You can choose a variety of designs, be it a logo or a theme, from our broad range as per your liking in the form of mockups.",
    },
    {
      title: "Motion Design",
      body: "We pick out design elements that will make your product stand out. With best-in-class ideas and unique minds, you will be thrilled to get the top-notch graphics.",
    },
    {
      title: "Graphic Design",
      body: "We create designs that are intuitive and soothing to eyes. Our professionals are always excited to serve you with top-notch designs.",
    },
  ];
  return (
    <div className="UXDesignServices">
      <span>
        <img src="Images/UXDesignPhotos/triangle.png" alt="triangle.png" />
        <img src="Images/UXDesignPhotos/triangle.png" alt="triangle.png" />
      </span>
      <div className="UXDesignServices-container">
        <h1>
          Our <span>Design</span> Services
        </h1>
        <hr />
        <div>
          {cardsData.map(({ title, body }, idx) => (
            <div key={title}>
              <h1>{idx + 1}</h1>
              <h2>{title}</h2>
              <hr />
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
