import React from "react";
import "./DotNetRemarkable.css";

export const DotNetRemarkable = () => {
  let dotnetRemarkableCardsData = [
    {
      img: {
        src: "Images/dotnetphotos/agile-software.png",
        alt: "Agile Software Dev Team logo",
      },
      title: "Agile Software Dev Team",
    },
    {
      img: {
        src: "Images/dotnetphotos/creative.png",
        alt: "Creative yet effective approach logo",
      },
      title: "Creative yet effective approach",
    },
    {
      img: {
        src: "Images/dotnetphotos/trusted.png",
        alt: "Bespoke Software Solutions logo",
      },
      title: "Bespoke Software Solutions",
    },
    {
      img: {
        src: "Images/dotnetphotos/custom-software.png",
        alt: "Customized Software Development logo",
      },
      title: "Customized Software Development",
    },
    {
      img: {
        src: "Images/dotnetphotos/techie.png",
        alt: "Trusted and Reliable Technology logo",
      },
      title: "Trusted and Reliable Technology",
    },
    {
      img: {
        src: "Images/dotnetphotos/security.png",
        alt: "Unmatched Security logo",
      },
      title: "Unmatched Security",
    },
  ];
  return (
    <div className="dotnet-remarkable-main">
      <h1>Remarkable .Net solutions</h1>
      <p>
        Empower yourself and choose the right path by availing our best Node JS
        Development Services by hiring the certified dotnet Experts. Our dotnet
        developers are a great choice for your next project because we
        specialize in providing custom, lightweight, scalable, and
        high-performance dotnet development services.
      </p>
      <div className="dotnet-remarkable-solutions">
        {dotnetRemarkableCardsData.map(({ img, title }) => {
          return (
            <div key={title}>
              <div className="dotnet-remarkable-image">
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
