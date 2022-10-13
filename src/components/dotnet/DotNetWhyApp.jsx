import React from "react";
import "./DotNetWhyApp.css";

export const DotNetWhyApplication = () => {
  let dotnetWhyAppCardsData = [
    {
      img: {
        src: "Images/dotnetphotos/simple.png",
        alt: "B2B and B2C web portal development logo",
      },
      title: "B2B and B2C web portal development",

      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam cum porro dolorum? Consectetur repellat autem inventore, corrupti distinctio voluptatibus deleniti minus adipisci id sunt itaque sequi aspernatur dolorum qui.",
    },
    {
      img: {
        src: "Images/dotnetphotos/xml.png",
        alt: "XML web application development logo",
      },
      title: "XML web application development",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam cum porro dolorum? Consectetur repellat autem inventore, corrupti distinctio voluptatibus deleniti minus adipisci id sunt itaque sequi aspernatur dolorum qui.",
    },
    {
      img: {
        src: "Images/dotnetphotos/framework.png",
        alt: "Simple to .net web development services logo",
      },
      title: "Simple to .net web development services",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam cum porro dolorum? Consectetur repellat autem inventore, corrupti distinctio voluptatibus deleniti minus adipisci id sunt itaque sequi aspernatur dolorum qui.",
    },
    {
      img: {
        src: "Images/dotnetphotos/e-commerce.png",
        alt: "E-commerce web application development logo",
      },
      title: "E-commerce web application development",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam cum porro dolorum? Consectetur repellat autem inventore, corrupti distinctio voluptatibus deleniti minus adipisci id sunt itaque sequi aspernatur dolorum qui.",
    },
    {
      img: {
        src: "Images/dotnetphotos/shopping-cart.png",
        alt: "Shopping cart web application development logo",
      },
      title: "Shopping cart web application development",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam cum porro dolorum? Consectetur repellat autem inventore, corrupti distinctio voluptatibus deleniti minus adipisci id sunt itaque sequi aspernatur dolorum qui.",
    },
    {
      img: {
        src: "Images/dotnetphotos/custom-website.png",
        alt: "Customised website development in .NET logo",
      },
      title: "Customised website development in .NET",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam cum porro dolorum? Consectetur repellat autem inventore, corrupti distinctio voluptatibus deleniti minus adipisci id sunt itaque sequi aspernatur dolorum qui.",
    },
  ];
  return (
    <div className="dotnet-why-application-main">
      <h1>Why dotnet for application development</h1>
      <div className="dotnet-why-application-content">
        {dotnetWhyAppCardsData.map(({ img, title, description }, idx) => {
          return (
            <div key={idx}>
              <div className="dotnet-why-appl-cards-images-div">
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
