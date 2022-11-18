import React from "react";
import "./IOTServices.css";

export const IOTServices = () => {
  const cardsData = [
    {
      title: "Preventive equipment maintenance",
      body: "Remote monitouring of equipment perfromance metrics and early detection of potential mailfunctioning. Prevents equipment breakage and production interruptions. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: "Images/IOTPhotos/equipment.png",
    },
    {
      title: "Remote operations",
      body: "Automating manual actions based on comands sent from control apps to actutors. Applicable to simple acctions like switching on/off, opening/closing, and complicated industrial processes, like robotic order picking. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: "Images/IOTPhotos/remote.png",
    },
    {
      title: "Product quality management",
      body: "Monitoring product paramenters and process compliance during manufacturing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: "Images/IOTPhotos/quality.png",
    },
    {
      title: "Hands-off inventory management",
      body: "Remote tracking of assets geoposition and movements. Intant indication of low stock. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: "Images/IOTPhotos/inventory.png",
    },
  ];

  return (
    <div className="IOTServices-main">
      <h1>Popular internet of things (IOT) Services</h1>
      <div className="IOTServices-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
        numquam unde cumque minus reprehenderit pariatur vitae adipisci harum
        doloremque non molestiae veritatis magni sit officiis molestias, quia
        natus, tenetur beatae.
      </p>
      <div className="IOTServices-Content">
        {cardsData.map(({ title, body, image }) => {
          return (
            <div key={title}>
              <div className="IOTServices-Cards-Content">
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              <div className="IOTServices-Cards-Images">
                <img src={image} alt={title} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="IOTServices-Button">
        <h3>Talk with our experts in Big Data to get started</h3>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-envelope-exclamation"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
