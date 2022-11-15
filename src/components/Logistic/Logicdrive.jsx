import React, { useState } from "react";
import "./Logicdrive.css";
export default function Logicdrive() {
  let Logisticdrivedata = [
    {
      img: {
        src: "Images/logistic/shipment request screen.png",
        alt: "Register image",
      },
      icon: {
        src: "Images/logistic/boxside.png",
        alt: " Register logo",
      },
      title: "Receive Shipment Request",
      para: "we've come up with a solution that saves you time and money. With our web app, you can manage your shipments from anywhere in the world on your mobile device or laptop.",
    },

    {
      img: {
        src: "Images/logistic/request screen.png",
        alt: "Schedule",
      },
      icon: {
        src: "Images/logistic/inspect.png",
        alt: "Schedule logo",
      },
      title: "Accept/Reject Request",
      para: "With our software, you will feel confident that every shipment or pickup is being made on time, according to plan, and that each customer is receiving the exact service he or she expects from you.",
    },
    {
      img: {
        src: "Images/logistic/notification screen.png",
        alt: "Multiple Payment Option image",
      },
      icon: {
        src: "Images/logistic/notification1.png",
        alt: "Multiple Payment Option logo",
      },
      title: "Notification",
      para: "Our web development team has been in the industry for years now, so they know what it takes to deliver quality work on time. We offer services such as website design, SEO optimization, and content generation as well.",
    },
    {
      img: {
        src: "Images/logistic/Navigation screen.png",
        alt: "Track Order image",
      },
      icon: {
        src: "Images/logistic/Near Me.png",
        alt: "Track Order logo",
      },
      title: "Navigation",
      para: "With the help of extensive experience in logistics and transportation web development. Our powerful navigation smoothly directs users to all the relevant information regarding your company's services or products.",
    },
  ];

  const [active, setActive] = useState(0);
  return (
    <div className="logicdrive">
      <h1>Drive app</h1>
      <div className="logicdrivesub">
        <div className="logicdriveleft">
          <div className="logistic-drive-image">
            <img
              src={Logisticdrivedata[active].img.src}
              alt={Logisticdrivedata[active].img.alt}
            />
          </div>
        </div>

        <div className="logicdriveright">
          {Logisticdrivedata.map(({ title, icon, para }, idx) => {
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

                <p>
                  {para}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
