import React from "react";
import "./nodejsRemarkable.css";

export const NodejsRemarkable = () => {
  let nodejsRemarkableCardsData = [
    {
      img: {
        src: "Images/nodejsphotos/bar-chart-2.png",
        alt: "Business application development logo",
      },
      title: "Business application development",
    },
    {
      img: {
        src: "Images/nodejsphotos/nodejs.png",
        alt: "Advance Node.js Programming logo",
      },
      title: "Advance Node.js Programming",
    },
    {
      img: {
        src: "Images/nodejsphotos/crm.png",
        alt: "CRM or Backend System for Data Management logo",
      },
      title: "CRM or Backend System for Data Management",
    },
    {
      img: {
        src: "Images/nodejsphotos/mean-2.png",
        alt: "MEAN stack development logo",
      },
      title: "MEAN stack development",
    },
    {
      img: {
        src: "Images/nodejsphotos/collab.png",
        alt: "Custom Collaborative Tools logo",
      },
      title: "Custom Collaborative Tools",
    },
    {
      img: {
        src: "Images/nodejsphotos/iot-3.png",
        alt: "Internet of Things logo",
      },
      title: "Internet of Things(IOT)",
    },
  ];
  return (
    <div className="nodejs-remarkable-main">
      <h1>Exclusive Node.js solutions</h1>
      <p>
        Hire Node JS Developers to Pinnacle your Business with The Latest
        Technology. You deserve the best-in-class services, powered by an expert
        Node JS team who knows how to deliver quality solutions with speed and
        precision.
      </p>
      <div className="nodejs-remarkable-solutions">
        {nodejsRemarkableCardsData.map(({ img, title }) => {
          return (
            <div key={title}>
              <div className="nodejs-remarkable-image">
                <img src={img.src} alt={img.alt} />
              </div>
              <h4>{title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
