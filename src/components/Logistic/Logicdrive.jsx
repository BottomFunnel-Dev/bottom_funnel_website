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
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
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
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
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
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
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
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
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
          {Logisticdrivedata.map(({ title, icon }, idx) => {
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                  quis eum ev
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  
}
