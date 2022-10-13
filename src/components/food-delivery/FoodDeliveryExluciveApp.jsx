import React from "react";
import "./FoodDeliveryExluciveApp.css";

export const FoodDeliveryExluciveApp = () => {
  let foodExcluciveAppData = [
    {
      img: {
        src: "Images/foodDeliveryphotos/exlucive-app-image-1.png",
        alt: "Food delivery startup image",
      },
      title: "Food delivery startup",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: {
        src: "Images/foodDeliveryphotos/exlucive-app-image-2.png",
        alt: "Chain restaurants management image",
      },
      title: "Chain restaurants management",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: {
        src: "Images/foodDeliveryphotos/exlucive-app-image-3.png",
        alt: "Custom franchise app image",
      },
      title: "Custom franchise app",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];

  return (
    <div className="food-delivery-exlucive-app-main">
      <h1>
        <span>Launch Exclusive App</span> for your Business
      </h1>
      <div className="food-delivery-exlucive-app-content">
        {foodExcluciveAppData.map(({ title, description, img }) => {
          return (
            <div key={title}>
              <div className="food-delivery-exlcusive-app-image-div">
                <img src={img.src} alt={img.alt} />
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
