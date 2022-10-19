import React from "react";
import "./GameDevTypes.css";
import { BsArrowRight } from "react-icons/bs";

export const GameDevType = () => {
  let cardsData = [
    {
      title: "Mobile Game Development",
      image: {
        src: "Images/gameDevelopmentPhotos/smartphone.png",
        alt: "Mobile Game Development logo",
      },
    },
    {
      title: "PC Game Development",
      image: {
        src: "Images/gameDevelopmentPhotos/pc.png",
        alt: "PC Game Development logo",
      },
    },
    {
      title: "PS4 Game Development",
      image: {
        src: "Images/gameDevelopmentPhotos/console.png",
        alt: "PS4 Game Development logo",
      },
    },
    {
      title: "AR/VR Solutions",
      image: {
        src: "Images/gameDevelopmentPhotos/group.png",
        alt: "AR/VR Solutions logo",
      },
    },
    {
      title: "AR/VR design",
      image: {
        src: "Images/gameDevelopmentPhotos/desktop.png",
        alt: "AR/VR design logo",
      },
    },
    {
      title: "3D Modellings",
      image: {
        src: "Images/gameDevelopmentPhotos/vr.png",
        alt: "3D Modellings logo",
      },
    },
  ];

  return (
    <div className="GameDev-types-main">
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi
          reprehenderit fuga molestiae.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi
          reprehenderit fuga molestiae.
        </p>
        <div className="GameDev-types-cards">
          {cardsData.map(({ image, title }) => {
            return (
              <div key={title}>
                <div className="GameDev-types-cards-Images">
                  <img src={image.src} alt={image.alt} />
                </div>
                <h3>{title}</h3>
                <BsArrowRight className="GameDev-right-arrow"></BsArrowRight>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
