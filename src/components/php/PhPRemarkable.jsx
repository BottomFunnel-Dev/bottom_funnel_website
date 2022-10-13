import React from "react";
import "./PhPRemarkable.css";

export const PhPRemarkable = () => {
  let phpRemarkableCardsData = [
    {
      img: {
        src: "Images/phpskillsphotos/cms.png",
        alt: "CMS Development logo",
      },
      title: "CMS Development",
    },
    {
      img: {
        src: "Images/phpskillsphotos/custom.png",
        alt: "Custom Applications logo",
      },
      title: "Custom Applications",
    },
    {
      img: {
        src: "Images/phpskillsphotos/CLOUD.png",
        alt: "Programming Interface Integration logo",
      },
      title: "Programming Interface Integration",
    },
    {
      img: {
        src: "Images/dotnetphotos/e-commerce.png",
        alt: "PHP Web Portals logo",
      },
      title: "PHP Web Portals",
    },
    {
      img: {
        src: "Images/phpskillsphotos/clound-solutions.png",
        alt: "Cloud Solutions logo",
      },
      title: "Cloud Solutions",
    },
    {
      img: {
        src: "Images/phpskillsphotos/community-driven.png",
        alt: "Community driven logo",
      },
      title: "Community driven",
    },
  ];
  return (
    <div className="php-remarkable-main">
      <h1>Remarkable PHP solutions</h1>
      <p>
        Empower yourself and choose the right path by availing our best Node JS
        Development Services by hiring the certified dotnet Experts. Our dotnet
        developers are a great choice for your next project because we
        specialize in providing custom, lightweight, scalable, and
        high-performance dotnet development services.
      </p>
      <div className="php-remarkable-solutions">
        {phpRemarkableCardsData.map(({ img, title }) => {
          return (
            <div key={title}>
              <div className="php-remarkable-image">
                <img src={img.src} alt={img.alt} />
              </div>
              <h4>{title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
