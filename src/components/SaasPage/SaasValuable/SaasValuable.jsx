import React from "react";
import { SaasCards } from "../SaasCards/SaasCards";
import "./SaasValuable.css";

export const SaasValuable = () => {
  const cardsData = [
    {
      icon: "Images/saasPhotos/description.png",
      title: "Project description",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, natus itaque similique minus excepturi facilis laudantium. Placeat, magni nobis impedit commodi velit consequuntur at optio qui id praesentium dolor eveniet.",
    },
    {
      icon: "Images/saasPhotos/process.png",
      title: "Process design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, natus itaque similique minus excepturi facilis laudantium. Placeat, magni nobis impedit commodi velit consequuntur at optio qui id praesentium dolor eveniet.",
    },
    {
      icon: "Images/saasPhotos/coding.png",
      title: "Design to codes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, natus itaque similique minus excepturi facilis laudantium. Placeat, magni nobis impedit commodi velit consequuntur at optio qui id praesentium dolor eveniet.",
    },
    {
      icon: "Images/saasPhotos/backend.png",
      title: "Backend comes into existence",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, natus itaque similique minus excepturi facilis laudantium. Placeat, magni nobis impedit commodi velit consequuntur at optio qui id praesentium dolor eveniet.",
    },
    {
      icon: "Images/saasPhotos/perfect.png",
      title: "Saas application is tested to perfection",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, natus itaque similique minus excepturi facilis laudantium. Placeat, magni nobis impedit commodi velit consequuntur at optio qui id praesentium dolor eveniet.",
    },
    {
      icon: "Images/saasPhotos/maintain.png",
      title: "Saas maintenance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, natus itaque similique minus excepturi facilis laudantium. Placeat, magni nobis impedit commodi velit consequuntur at optio qui id praesentium dolor eveniet.",
    },
  ];

  return (
    <div className="SaasValuable-main">
      <div className="SaasValuable-images">
        <img src="Images/saasPhotos/valuable.png" alt="Side image" />
        <br />
        <div className="SaasValuable-funnel-image">
          <img src="Images/saasPhotos/funnel.png" alt="Big funnel" />
        </div>
      </div>
      <div className="SaasValuable-content">
        <h1>
          How we convert your cloud ideas into SaaS application that are
          scalable, parctical and valuable
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, natus itaque similique minus excepturi facilis
          laudantium. Placeat, magni nobis impedit commodi velit consequuntur at
          optio qui id praesentium dolor eveniet.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Exercitationem, natus itaque similique
          minus excepturi facilis laudantium. Placeat, magni nobis impedit
          commodi velit consequuntur at optio qui id praesentium dolor eveniet.
        </p>
        <div>
          {cardsData.map((elem) => {
            return <SaasCards data={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};
