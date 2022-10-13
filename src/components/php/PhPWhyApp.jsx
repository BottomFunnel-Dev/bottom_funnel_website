import React from "react";
import "./PhPWhyApp.css";

export const PhPWhyApplication = () => {
  let phpWhyAppCardsData = [
    {
      img: {
        src: "Images//phpskillsphotos/open-source.png",
        alt: "Open Source logo",
      },
      title: "Open Source",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam cum porro dolorum? Consectetur repellat autem inventore, corrupti distinctio voluptatibus deleniti minus adipisci id sunt itaque sequi aspernatur dolorum qui.",
    },
    {
      img: {
        src: "Images//phpskillsphotos/scalable.png",
        alt: "Dynamic & Flexible logo",
      },
      title: "Dynamic & Flexible",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam cum porro dolorum? Consectetur repellat autem inventore, corrupti distinctio voluptatibus deleniti minus adipisci id sunt itaque sequi aspernatur dolorum qui.",
    },
    {
      img: {
        src: "Images//phpskillsphotos/dynamic2.png",
        alt: "Scalable & Web documented logo",
      },
      title: "Scalable & Web documented",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam cum porro dolorum? Consectetur repellat autem inventore, corrupti distinctio voluptatibus deleniti minus adipisci id sunt itaque sequi aspernatur dolorum qui.",
    },
    {
      img: {
        src: "Images//phpskillsphotos/frameworks.png",
        alt: "Effective Frameworks logo",
      },
      title: "Effective Frameworks",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam cum porro dolorum? Consectetur repellat autem inventore, corrupti distinctio voluptatibus deleniti minus adipisci id sunt itaque sequi aspernatur dolorum qui.",
    },
    {
      img: {
        src: "Images//phpskillsphotos/hosting.png",
        alt: "Better hosting options logo",
      },
      title: "Better hosting options",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam cum porro dolorum? Consectetur repellat autem inventore, corrupti distinctio voluptatibus deleniti minus adipisci id sunt itaque sequi aspernatur dolorum qui.",
    },
    {
      img: {
        src: "Images//phpskillsphotos/support.png",
        alt: "Easy Support & Updates logo",
      },
      title: "Easy Support & Updates",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam cum porro dolorum? Consectetur repellat autem inventore, corrupti distinctio voluptatibus deleniti minus adipisci id sunt itaque sequi aspernatur dolorum qui.",
    },
  ];
  return (
    <div className="php-why-application-main">
      <h1>Why PHP for application development</h1>
      <div className="php-why-application-content">
        {phpWhyAppCardsData.map(({ img, title, description }, idx) => {
          return (
            <div key={idx}>
              <div className="php-why-appl-cards-images-div">
                <img src={img.src} alt={img.alt} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
