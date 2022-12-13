import React from "react";
import "./AnalysisCoreTask.css";

export const AnalysisCoreTask = () => {
  const cardsData = [
    {
      title: "Detect",
      body: "Distinguish regions of interest for further analysis, individual objects from the background, etc.",
      image: "Images/AnalysisSoftwarePhotos/eye.png",
    },
    {
      title: "Recognize",
      body: "Label or classify objects in digital images based on one or several object classes: people, vechicles, electronic components, etc.",
      image: "Images/AnalysisSoftwarePhotos/lock.png",
    },
    {
      title: "Identify",
      body: "Recognize individual features of an object and classify it with more precision: identify individual people, specific vehicles, animal species, device models, etc.",
      image: "Images/AnalysisSoftwarePhotos/checked.png",
    },
  ];

  return (
    <div className="AnalysisCoreTask-container">
      <h1>
        <span>Image Analysis</span> Core Tasks
      </h1>
      <div className="AnalysisCoreTask-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className="AnalysisCoreTask-main">
        <div className="AnalysisCoreTask-image">
          <img
            src="Images/AnalysisSoftwarePhotos/cards.png"
            alt="Image analysis core task vector"
          />
        </div>
        <div className="AnalysisCoreTask-cards">
          {cardsData.map(({ title, body, image }) => (
            <div key={title}>
              <div>
                <div>
                  <img src={image} alt={title} />
                </div>
                <h2>{title}</h2>
              </div>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
