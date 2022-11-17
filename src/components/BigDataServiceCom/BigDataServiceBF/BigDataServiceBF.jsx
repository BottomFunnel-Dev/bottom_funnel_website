import React from "react";
import "./BigDataServiceBF.css";

export const BigDataServiceBF = () => {
  const cardsData = [
    {
      title: "Advnaceed Analytics & Insights",
      body: "We have cast experience dealing with multipule data visualization and analytics tools like QlikSense, Tableau & QlikView. Our analytics solutions include inferential statistical analysis, data modeling, and predictive and prescriptive analytics.",
      image: "Images/BigDataServicePhotos/stairs.png",
    },
    {
      title: "Strategy Consulting",
      body: "We help our clients formulate Big Data strategies and choose the right technology tools and processes. Our other consulting services include proof of concept, data assessment, architecture recommendation and technology identification.",
      image: "Images/BigDataServicePhotos/horse.png",
    },
    {
      title: "Hadoop Services",
      body: "The services we provide for hadoop clusters include installation, integration, configuration for ideal performance and monitoring. Our experienced coders also adoptly eradicate the complexities of writing and maintaining Apache Hadoop code.",
      image: "Images/BigDataServicePhotos/elephant.png",
    },
    {
      title: "Development, Support & maintenance",
      body: "We successfully manage the entire life cycle of Big Data implementation i.e. deployment, development, maintenance and support. Our experts have created solutions and frameworks that address all the key functional Big Data components.",
      image: "Images/BigDataServicePhotos/setting.png",
    },
  ];
  return (
    <div className="BigDataServiceBF-Container">
      <div className="BigDataServiceBF-Background-rectangle">
        <img
          src="Images/BigDataServicePhotos/rectangle-right.png"
          alt="Background image rectangle right top"
        />
        <img
          src="Images/BigDataServicePhotos/rectangle-left.png"
          alt="Background image rectangle left bottom"
        />
      </div>
      <div className="BigDataServiceBF-main">
        <h1>Bottom Funnel Big Data Services</h1>
        <div className="BigDataServicePopular-hr-line">
          <span></span>
          <div></div>
          <span></span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam
          dignissimos, non temporibus, impedit aliquid laboriosam distinctio
          mollitia suscipit facilis, fugiat ratione consequatur voluptatem!
          Delectus ratione ut soluta adipisci autem!
        </p>
        <div className="BigDataServiceBF-Cards-Container">
          {cardsData.map(({ title, image, body }) => {
            return (
              <div key={title} className="BigDataServiceBF-Cards-main">
                <div>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
