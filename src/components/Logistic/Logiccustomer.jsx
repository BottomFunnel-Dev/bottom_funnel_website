import React, { useState } from "react";
import "./Logiccustomer.css";

export default function Logiccustomer() {
  let Logisticcustomerdata = [
    {
      img: {
        src: "Images/logistic/Register screen.png",
        alt: "Register image",
      },
      icon: {
        src: "Images/logistic/inspect.png",
        alt: " Register logo",
      },
      title: "Registration",
      para: "Get a head start on your logistics and transportation business with this great, easy-to-use website.",
    },
    {
      img: {
        src: "Images/logistic/Schedule trip screen.png",
        alt: "Schedule",
      },
      icon: {
        src: "Images/logistic/Location.png",
        alt: "Schedule logo",
      },
      title: "Schedule Trip",
      para: "Schedule Trip helps you set up an appointment with them and keep track on where your product is moving from.",
    },
    {
      img: {
        src: "Images/logistic/Payment option screen.png",
        alt: "Multiple Payment Option image",
      },
      icon: {
        src: "Images/logistic/Card Payment.png",
        alt: "Multiple Payment Option logo",
      },
      title: "Multiple Payment Option",
      para: "With multiple payment options, your website will be updated regularly without any disruptions.",
    },

    {
      img: {
        src: "Images/logistic/track order screen.png",
        alt: "Track Order image",
      },
      icon: {
        src: "Images/logistic/Track Order.png",
        alt: "Track Order logo",
      },
      title: "Track Order",
      para: "From shipping services to vehicle tracking and parcel delivery, we have everything you need in one place.",
    },
  ];

  const [active, setActive] = useState(0);
  return (
    <div className="logiccustomer">
      <h1>Customer app</h1>
      <div className="logiccustomersub">
        <div className="logiccustomerright">
          {Logisticcustomerdata.map(({ title, icon, para }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`logistic-box-${idx}`}
              >
                <div className="logistic-logo">
                  <img src={icon.src} alt={icon.alt} />
                </div>
                <h3>{title}</h3>
                <p>{para}</p>
              </div>
            );
          })}
        </div>

        <div className="logiccustomerleft">
          <div className="logistic-customer-image">
            <img
              src={Logisticcustomerdata[active].img.src}
              alt={Logisticcustomerdata[active].img.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
