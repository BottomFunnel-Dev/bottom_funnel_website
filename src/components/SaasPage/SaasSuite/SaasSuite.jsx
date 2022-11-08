import React from "react";
import { SaasCards } from "../SaasCards/SaasCards";
import "./SaasSuite.css";

export const SaasSuite = () => {
  const cardsData = [
    {
      icon: "Images/saasPhotos/consulting.png",
      title: "SaaS app development consulting",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, natus itaque similique minus excepturi facilis laudantium. Placeat, magni nobis impedit commodi velit consequuntur at optio qui id praesentium dolor eveniet.",
    },
    {
      icon: "Images/saasPhotos/saas-dev.png",
      title: "SaaS app development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, natus itaque similique minus excepturi facilis laudantium. Placeat, magni nobis impedit commodi velit consequuntur at optio qui id praesentium dolor eveniet.",
    },
    {
      icon: "Images/saasPhotos/optimization.png",
      title: "SaaS app optimization",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, natus itaque similique minus excepturi facilis laudantium. Placeat, magni nobis impedit commodi velit consequuntur at optio qui id praesentium dolor eveniet.",
    },
    {
      icon: "Images/saasPhotos/design.png",
      title: "SaaS app design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, natus itaque similique minus excepturi facilis laudantium. Placeat, magni nobis impedit commodi velit consequuntur at optio qui id praesentium dolor eveniet.",
    },
    {
      icon: "Images/saasPhotos/architecture.png",
      title: "Multi-tenant architecture upgrade",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, natus itaque similique minus excepturi facilis laudantium. Placeat, magni nobis impedit commodi velit consequuntur at optio qui id praesentium dolor eveniet.",
    },
    {
      icon: "Images/saasPhotos/migration.png",
      title: "Technology migration",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, natus itaque similique minus excepturi facilis laudantium. Placeat, magni nobis impedit commodi velit consequuntur at optio qui id praesentium dolor eveniet.",
    },
  ];

  return (
    <div className="SaasSuite-main">
      <h1>
        Our suite of SaaS application <br /> development services
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        natus itaque similique minus excepturi facilis laudantium. Placeat,
        magni nobis impedit commodi velit consequuntur at optio qui id
        praesentium dolor eveniet.
      </p>
      <div>
        {cardsData.map((elem) => {
          return <SaasCards data={elem} />;
        })}
      </div>
    </div>
  );
};
