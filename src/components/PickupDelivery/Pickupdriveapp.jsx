import React from "react";
import { useState } from "react";
import "./pickupdrive.css";

export const Pickupdriveapp = () => {
  let pickupdrive = [
    {
      img: {
        src: "Images/pickup/driverapp/manageprofile.png",
        alt: "Register image",
      },
      icon: {
        src: "Images/pickup/icons/manageprofile.png",
        alt: " Register logo",
      },
      title: "Manage Profile",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },

    {
      img: {
        src: "Images/pickup/driverapp/reminder&alerts.png",
        alt: "Schedule",
      },
      icon: {
        src: "Images/pickup/icons/reminderalerts.png",
        alt: "Schedule logo",
      },
      title: "Reminders & Alerts",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
    {
      img: {
        src: "Images/pickup/driverapp/deliverydetails.png",
        alt: "Multiple Payment Option image",
      },
      icon: {
        src: "Images/pickup/icons/deliverydetails.png",
        alt: "Multiple Payment Option logo",
      },
      title: "Delivery Details",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
    {
      img: {
        src: "Images/pickup/driverapp/inappnavigation.png",
        alt: "Track Order image",
      },
      icon: {
        src: "Images/pickup/icons/inappnavigation.png",
        alt: "Track Order logo",
      },
      title: "In-App Navigation",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
  ];
  const [drive, setdrive] = useState(0);
  return (
    <div className="pickupdrive">
      <h1 className="colored">Drive app</h1>
      <div className="pickupdrivesub">
        <div className="pickupdriveleft">
          <div className="pickup-drive-image">
            <img
              src={pickupdrive[drive].img.src}
              alt={pickupdrive[drive].img.alt}
            />
          </div>
        </div>

        <div className="pickupdriveright">
          {pickupdrive.map(({ title, icon }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setdrive(idx)}
                className={`pickup-box-${idx}`}
              >
                <div className="pickup-logo">
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
};
