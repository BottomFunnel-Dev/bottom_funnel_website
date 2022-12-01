import React from "react";
import "./SalesforceOffers.css";

export const SalesforceOffers = () => {
  const cardsData = [
    {
      title: "Service CLoud Implementation",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, reiciendis nulla natus laboriosam sit facere tempora mollitia harum sunt non ex hic incidunt voluptate beatae sequi vitae ullam, dolores ad!",
      image: "Images/salesforcePhotos/cloud.png",
    },
    {
      title: "Marketing CLoud Implementation",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, reiciendis nulla natus laboriosam sit facere tempora mollitia harum sunt non ex hic incidunt voluptate beatae sequi vitae ullam, dolores ad!",
      image: "Images/salesforcePhotos/social-media.png",
    },
    {
      title: "Sales CLoud Implementation",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, reiciendis nulla natus laboriosam sit facere tempora mollitia harum sunt non ex hic incidunt voluptate beatae sequi vitae ullam, dolores ad!",
      image: "Images/salesforcePhotos/graph.png",
    },
    {
      title: "Pordot CLoud Implementation",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, reiciendis nulla natus laboriosam sit facere tempora mollitia harum sunt non ex hic incidunt voluptate beatae sequi vitae ullam, dolores ad!",
      image: "Images/salesforcePhotos/b-to-b.png",
    },
    {
      title: "IoT CLoud Implementation",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, reiciendis nulla natus laboriosam sit facere tempora mollitia harum sunt non ex hic incidunt voluptate beatae sequi vitae ullam, dolores ad!",
      image: "Images/salesforcePhotos/shopping.png",
    },
    {
      title: "CPQ CLoud Implementation",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, reiciendis nulla natus laboriosam sit facere tempora mollitia harum sunt non ex hic incidunt voluptate beatae sequi vitae ullam, dolores ad!",
      image: "Images/salesforcePhotos/setting.png",
    },
    {
      title: "Lighting Solution Implementation",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, reiciendis nulla natus laboriosam sit facere tempora mollitia harum sunt non ex hic incidunt voluptate beatae sequi vitae ullam, dolores ad!",
      image: "Images/salesforcePhotos/design.png",
    },
  ];

  return (
    <div className="SalesforceOffers-container">
      <h1>Salesforce we offer</h1>
      <div className="SalesforceServices-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, reiciendis
        nulla natus laboriosam sit facere tempora mollitia harum sunt non ex hic
        incidunt voluptate beatae sequi vitae ullam, dolores ad! Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. At, reiciendis nulla natus
        laboriosam sit facere tempora mollitia harum sunt non ex hic incidunt
        voluptate beatae sequi vitae ullam, dolores ad!
      </p>
      <div className="SalesforceOffers-main">
        {cardsData.map(({ title, body, image }, idx) => (
          <div key={idx}>
            <div>
              <img src={image} alt={title} />
            </div>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
