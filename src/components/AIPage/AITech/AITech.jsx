import React from "react";
import "./AITech.css";

export const AITech = () => {
  const cardsData = [
    { title: "Google Cloud AI Platform", image: "Images/AIPhotos/sides.png" },
    { title: "Bot Framework", image: "Images/AIPhotos/coding.png" },
    { title: "Mazon Lex", image: "Images/AIPhotos/texting.png" },
    { title: "Azure Machine Learning", image: "Images/AIPhotos/funnel.png" },
    { title: "Amazon SageMaker", image: "Images/AIPhotos/reference.png" },
    { title: "Azure Cognitive Services", image: "Images/AIPhotos/cloud.png" },
    { title: "Amazon Transcribe", image: "Images/AIPhotos/chatting.png" },
  ];

  return (
    <div className="AITech-main">
      <h1>All AI technologies we use</h1>
      <div className="AITech-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className="AITech-Cards-container">
        {cardsData.map(({ title, image }) => {
          return (
            <div key={title} className="AITech-Cards-main">
              <div>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
