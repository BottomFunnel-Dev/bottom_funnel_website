import React from "react";
import "./StartupSolOfferCard.css";

export const StartupSolOfferCard = () => {
  const cardsData = [
    {
      title: "Startup Tech Consulting/Ideation",
      body: "We help Startups evaluate, select & leverage cutting-edge technology stack-web, mobile, or cloud-for their products & applications. After analyzing the pros and cons of the technology stack, we select the best framework for develoment.",
      image: "Images/startupSolPhotos/rocket.png",
    },
    {
      title: "Startup MVP Development",
      body: "Exhausting all your funds in building the perfect product is a risky move. The wise way is to start small with a minimum viable product. With startup MVP development services, we help you build the first version of your product faster.",
      image: "Images/startupSolPhotos/mvp.png",
    },
    {
      title: "Startup Product Development",
      body: "Right from identifying a market opportunity to the launch, every startup goes through a new product develoment process. Classic informatics offers end-to-end startup productr development services to get your idea into the market faster.",
      image: "Images/startupSolPhotos/release.png",
    },
    {
      title: "Startup Growth Hacking",
      body: "By scoping your present, we anticipate your future to help your startup reach great heights. Just launching a product in the market is never enought; you also need to market it right. We continue our assistance to analyze your product's performance.",
      image: "Images/startupSolPhotos/growth.png",
    },
  ];
  return (
    <div className="StartupSolOfferCard-container">
      <div className="StartupSolOfferCard-main">
        {cardsData.map(({ title, body, image }, idx) => {
          return (
            <div>
              <div>
                <img src={image} alt={title} />
              </div>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
      <div className="StartupSolOfferCard-Button">
        <h3>Talk with our experts in startup solutions to get started</h3>
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
