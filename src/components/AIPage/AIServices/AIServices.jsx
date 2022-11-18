import React from "react";
import "./AIServices.css";

export const AIServices = () => {
  const cardsData = [
    {
      title: "Business analysis",
      body: [
        "Definition and analysis of business needs to be pursued with an AI solution.",
        "Analysis of the existing AI environment (if any).",
        "Analysis of the existing data management practices established within the company, the currently used technologies and tools.",
      ],
      image: "Images/AIPhotos/analysis.png",
    },
    {
      title: "AI solution conceptualization planning",
      body: [
        "Outlining AI strategy and roadmap.",
        "Designing the architecture of the AI solution and creating the optimal tech stack for the AI project.",
        "Deciding on AI solution deliverables and KPIs.",
      ],
      image: "Images/AIPhotos/teenage.png",
    },
    {
      title: "AI solution development (ML modeling)",
      body: [
        "ML models exploration and refinement.",
        "Fine-tuning the parameters of ML models until the generated results are acceptable.",
        "Deploying the ML models.",
      ],
      image: "Images/AIPhotos/brain.png",
    },
    {
      title: "AI solution support and optimization",
      body: [
        "Continous AI solution monitoring and optimization.",
        "Adding new data sources to feed the AI solution for greater accuracy and insight.",
        "Building new ML models to meet the newly arisen business needs.",
      ],
      image: "Images/AIPhotos/optimization.png",
    },
  ];

  return (
    <div className="AIServices-main">
      <h1>Artificial Intelligence Services</h1>
      <div className="AIServices-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
        reiciendis veniam magni soluta nam ab omnis possimus odit dolore
        officiis adipisci, ratione iusto iste inventore quia animi iure. Eos,
        earum!
      </p>
      <div className="AIServices-Content">
        {cardsData.map(({ title, body, image }) => {
          return (
            <div key={title}>
              <div className="AIServices-Cards-Content">
                <h2>{title}</h2>
                <ul>
                  {body.map((list) => {
                    return <li>{list}</li>;
                  })}
                </ul>
              </div>
              <div className="AIServices-Cards-Images">
                <img src={image} alt={title} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="AIServices-Button">
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
