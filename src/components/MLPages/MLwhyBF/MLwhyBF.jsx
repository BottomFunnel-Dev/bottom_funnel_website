import React from "react";
import "./MLwhyBF.css";

export const MLwhyBF = () => {
  const cardsData = [
    {
      title: "IT Security",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore neque ipsa, voluptates quod ratione aliquam itaque voluptas perferendis cumque eos temporibus? Natus quam omnis aperiam accusamus accusantium voluptate commodi officiis?.",
      image: "Images/MLPhotos/data-protection.png",
    },
    {
      title: "Logistics",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore neque ipsa, voluptates quod ratione aliquam itaque voluptas perferendis cumque eos temporibus? Natus quam omnis aperiam accusamus accusantium voluptate commodi officiis?.",
      image: "Images/MLPhotos/logistics.png",
    },
    {
      title: "Automobile",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore neque ipsa, voluptates quod ratione aliquam itaque voluptas perferendis cumque eos temporibus? Natus quam omnis aperiam accusamus accusantium voluptate commodi officiis?.",
      image: "Images/MLPhotos/car.png",
    },
    {
      title: "Architecture",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore neque ipsa, voluptates quod ratione aliquam itaque voluptas perferendis cumque eos temporibus? Natus quam omnis aperiam accusamus accusantium voluptate commodi officiis?.",
      image: "Images/MLPhotos/sketch.png",
    },
    {
      title: "E-commerce",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore neque ipsa, voluptates quod ratione aliquam itaque voluptas perferendis cumque eos temporibus? Natus quam omnis aperiam accusamus accusantium voluptate commodi officiis?.",
      image: "Images/MLPhotos/add-to-cart.png",
    },
    {
      title: "Healthcare",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore neque ipsa, voluptates quod ratione aliquam itaque voluptas perferendis cumque eos temporibus? Natus quam omnis aperiam accusamus accusantium voluptate commodi officiis?.",
      image: "Images/MLPhotos/doctor.png",
    },
  ];
  return (
    <div className="MLwhyBF-Container">
      <div className="MLwhyBF-Background-rectangle">
        <img
          src="Images/MLPhotos/rectangle-top.png"
          alt="Background image rectangle top"
        />
        <img
          src="Images/MLPhotos/rectangle-bottom.png"
          alt="Background image rectangle left bottom"
        />
      </div>
      <div className="MLwhyBF-main">
        <h1>Bottom Funnel Big Data Services</h1>
        <div className="MLPopular-hr-line">
          <span></span>
          <div></div>
          <span></span>
        </div>
        <div className="MLwhyBF-Cards-Container">
          {cardsData.map(({ title, image, body }) => {
            return (
              <div key={title} className="MLwhyBF-Cards-main">
                <div>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
