import React from "react";
import "./EcommerceComFeatures.css";

export const EcommerceComSolutions = () => {
  var featureCardsData = {
    title: "Solutions",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolores maiores saepe cumque. Quos sequi ullam nostrum impedit vel commodi sunt eos, ab laborum culpa praesentium minus obcaecati saepe necessitatibus!",
    CardsData: [
      {
        title: "Dummy text",
        image: {
          src: "Images/dotnetphotos/custom-website.png",
          alt: `logo`,
        },
      },
      {
        title: "Dummy text",
        image: {
          src: "Images/dotnetphotos/custom-website.png",
          alt: `logo`,
        },
      },
      {
        title: "Dummy text",
        image: {
          src: "Images/dotnetphotos/custom-website.png",
          alt: `logo`,
        },
      },
      {
        title: "Dummy text",
        image: {
          src: "Images/dotnetphotos/custom-website.png",
          alt: `logo`,
        },
      },
      {
        title: "Dummy text",
        image: {
          src: "Images/dotnetphotos/custom-website.png",
          alt: `logo`,
        },
      },
      {
        title: "Dummy text",
        image: {
          src: "Images/dotnetphotos/custom-website.png",
          alt: `logo`,
        },
      },
    ],
  };

  return (
    <div className="e-commerce-featsol-main">
      <div className="e-commerce-featsol-content">
        <h1>{featureCardsData.title}</h1>
        <p>{featureCardsData.description}</p>
      </div>
      <div className="e-commerce-featsol-cards-main">
        {featureCardsData.CardsData.map(({ title, image }, idx) => {
          return (
            <div key={idx}>
              <div className="e-commerce-featsol-cards-images">
                <img src={image.src} alt={image.alt} />
              </div>
              <h4>{title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
