import React from "react";
import "./MLPopular.css";

export const MLPopular = () => {
  const cardsData = [
    {
      title: "Natural Language Processing",
      body: "We aim to deliver advanced solutions that derive semantic information-entities, keywords, relations, emotions, and concepts from human language and speech on web apps and social platforms. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus nisi modi delectus blanditiis mollitia, eius incidunt eaque.",
      image: "Images/MLPhotos/language.png",
    },
    {
      title: "Robotic Process Automation",
      body: "Our team of machine learning developers and programmers are experts in createing effective bots that are capable of performing rule-based routine tasks, mimicking human interaction, and allowing you to focus on high-level tasks. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus nisi modi delectus blanditiis mollitia, eius incidunt eaque.",
      image: "Images/MLPhotos/rpa.png",
    },
    {
      title: "Data Mining",
      body: "We use statistical and mathematical techniquies to develop algorithms for analyzing a variety of row data sources and help in descovering meaningful corrections and patterns and help you in making devesions related to your business.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus nisi modi delectus blanditiis mollitia, eius incidunt eaque.",
      image: "Images/MLPhotos/mining.png",
    },
    {
      title: "Enterprise Security",
      body: "We at Appventurez, know that enterprise data security is a crucial factor. We utilize the power of machine learning to analyze the huge volume of data for spotting signs and vulnerablities of an enterprise security breach.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus nisi modi delectus blanditiis mollitia, eius incidunt eaque.",
      image: "Images/MLPhotos/security.png",
    },
    {
      title: "Deep Learning",
      body: "Our machine learning developers, as a leading mobile app development company, are proficient in using the latest learning algorithm for creating tools and platforms that help you to adopt new challenges and grab opportunites with the available data.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus nisi modi delectus blanditiis.",
      image: "Images/MLPhotos/learning.png",
    },
  ];

  return (
    <div className="MLPopular-main">
      <h1>Popular Machine Learning Services</h1>
      <div className="MLPopular-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus nisi
        modi delectus blanditiis mollitia, eius incidunt eaque
      </p>
      <div className="MLPopular-Content">
        {cardsData.map(({ title, body, image }) => {
          return (
            <div key={title}>
              <div className="MLPopular-Cards-Content">
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              <div className="MLPopular-Cards-Images">
                <img src={image} alt={title} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="MLPopular-Button">
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
