import React from "react";
import "./BigDataServicePopular.css";

export const BigDataServicePopular = () => {
  const cardsData = [
    {
      title: "Data Management",
      body: "We partner with client to set up large scale data management. Our Engineers have hands-on experience in creating, managing, and migrating petabyte-scale data lakes and warehouses using the latest advances in tachnology. Businesses can therefore get optimized storage costs, maintainability, and retrieval.",
      image: "Images/BigDataServicePhotos/data-management.png",
    },
    {
      title: "DataOps in Big Data Services",
      body: "Our DataOps services bring in automatino and agile development methodologies to Big Data Engineering. We bring in efficiencies to the entire data lifecycle to improve data quality and integration, thereby breaking down silos that exist across various units within the lifecycle. This also allows for better data access for the entire organization.",
      image: "Images/BigDataServicePhotos/dataOps.png",
    },
    {
      title: "BI & Analytics for Robust Analytics Solutions",
      body: "Business intelligence & Alalytics practice at cuelogec helps stakeholders to derive insights from data. Our Big Data teams help build customized dashboards, set up enterprise search, and engineer real-time visualizaiton of data streams. We leverage popular BI tools and build custom platforms using open source technologies to maximize customization and reduce licensing costs.",
      image: "Images/BigDataServicePhotos/robust.png",
    },
    {
      title: "Data Science",
      body: "Our Data Scientists help organizations with features engineering, data analysis, model validations, and building custom intelligence platforms. Clients leverage our data science practice by utilizing data to better understand their customers, optimize operaions, and uncover new business opportunities.",
      image: "Images/BigDataServicePhotos/data-science.png",
    },
  ];

  return (
    <div className="BigDataServicePopular-main">
      <h1>Popular Big Data Services</h1>
      <div className="BigDataServicePopular-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Maintaining a high level of user engagement is how companies stay
        relevant. Our advances in technology and design thinking help you
        achieve it.
      </p>
      <div className="BigDataServicePopular-Content">
        {cardsData.map(({ title, body, image }) => {
          return (
            <div key={title}>
              <div className="BigDataServicePopular-Cards-Content">
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              <div className="BigDataServicePopular-Cards-Images">
                <img src={image} alt={title} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="BigDataServicePopular-Button">
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
