import React from "react";
import "./MetaverseOffers.css";

export const MetaverseOffers = () => {
  const cardsData = [
    {
      title: "Decentralized Platforms",
      body: "We proved decentralized platforms for gaming, socializing, and Trading based on the needs of your project. Our services cover UI/UX desing, frontend and backend programming, smart contracts, Oracle implementation, and everything in between. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae provident eligendi commodi, qui laudantium ea ullam temporibus at saepe. Alias ipsum corporis impedit, laborum assumenda veritatis aspernatur vero molestiae excepturi.",
      image: "Images/metaversePhotos/decentralized.png",
    },
    {
      title: "Metaverse Applications",
      body: "Bottom Funnel Technologies develop user-friendly apps with blockchain-specific qualities such a automation privacy, transaparency, and user sovereignty to give users a premium interface to experience your Metaverse. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae provident eligendi commodi, qui laudantium ea ullam temporibus at saepe. Alias ipsum corporis impedit, laborum assumenda veritatis aspernatur vero molestiae excepturi.",
      image: "Images/metaversePhotos/virtual-reality.png",
    },
    {
      title: "3D Spaces",
      body: "We provide Metaverse projects scalable 3D space design and development services, extending their use-cases through new concepts. Our offering include 3D visualization, 3D modeling and interoperability. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae provident eligendi commodi, qui laudantium ea ullam temporibus at saepe. Alias ipsum corporis impedit, laborum assumenda veritatis aspernatur vero molestiae excepturi.",
      image: "Images/metaversePhotos/space.png",
    },
    {
      title: "Integration Services",
      body: "We provide Metaverse projects scalable 3D space design and development services, extending their use-cases through new concepts. Our offering include 3D modeling, and interoperability. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae provident eligendi commodi, qui laudantium ea ullam temporibus at saepe. Alias ipsum corporis impedit, laborum assumenda veritatis aspernatur vero molestiae excepturi.",
      image: "Images/metaversePhotos/collaboration.png",
    },
  ];

  return (
    <div className="MetaverseOffers-container">
      <h1>Solutions We Offers</h1>
      <div className="MetaverseServices-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        provident eligendi commodi, qui laudantium ea ullam temporibus at saepe.
        Alias ipsum corporis impedit, laborum assumenda veritatis aspernatur
        vero molestiae excepturi.
      </p>
      <div className="MetaverseOffers-main">
        {cardsData.map(({ title, body, image }) => (
          <div>
            <div className="MetaverseOffers-content">
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
            <div className="MetaverseOffers-image">
              <img src={image} alt={title} />
            </div>
          </div>
        ))}
      </div>
      <div className="MetaverseOffers-Button">
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
