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
      para: "With logisticx, you get easy registration for your next logistics project. Handpicked by the world's top brands, our software is proven to save you money and streamline operations.",
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
      para: "Scheduling your next trip with Schedule. Just set up an appointment, and the logistics team will keep track of where your product is moving from. Whether it's a local drop-off or getting picked up curbside, we've got you covered.",
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
      para: "We offer multiple payment options that are safe and secure. With our platform, you can effortlessly add payments to your online shopping cart without worrying about credit card fraud or identity theft.",
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
      para: "Track Order is the web development platform that gives you access to all of the shipping services available today. You can choose how you want your packages to be delivered, and whether you want it on a truck or with UPS.",
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
