import React from "react";
import "./EcommerceComShopping.css";

export const EcommerceComShopping = () => {
  let shoppingAppData = {
    backgroundImage: {
      src: "Images/EcommercePhotos/background-yellow.png",
      alt: "Shopping mobile app background image",
    },
    mainImage: {
      src: "Images/EcommercePhotos/shopping-app.png",
      alt: "Shopping mobile app main image",
    },
    cardsData: [
      {
        image: {
          src: "Images/ecommercePhotos/one.png",
          alt: "can be easily accessed through both android/ios",
        },
        description:
          "It has easy to understand templates and customisable app designs to give the shopping comfort of use.",
      },
      {
        image: {
          src: "Images/ecommercePhotos/two.png",
          alt: "user-friendly interface logo",
        },
        description:
          "It has easy to understand templates and customisable app designs to give the customer comfort of use.",
      },
      {
        image: {
          src: "Images/ecommercePhotos/three.png",
          alt: "Order food and track their service logo",
        },
        description:
          "It has easy to understand templates and customisable app designs to give the customer comfort of use.",
      },
      {
        image: {
          src: "Images/ecommercePhotos/four.png",
          alt: "Smart search and add-to-your-favorites list logo",
        },
        description:
          "It has easy to understand templates and customisable app designs to give the customer comfort of use.",
      },
      {
        image: {
          src: "Images/ecommercePhotos/five.png",
          alt: "Dummy text logo",
        },
        description:
          "It has easy to understand templates and customisable app designs to give the customer comfort of use.",
      },
      {
        image: {
          src: "Images/ecommercePhotos/six.png",
          alt: "Dummy text logo",
        },
        description:
          "It has easy to understand templates and customisable app designs to give the customer comfort of use.",
      },
    ],
  };

  return (
    <div className="e-commerce-shopping-main">
      <div className="e-commerce-shopping-images-main">
        <div>
          <img
            src={shoppingAppData.backgroundImage.src}
            alt={shoppingAppData.backgroundImage.alt}
            style={{ zIndex: "1" }}
          />
        </div>
        <div>
          <img
            src={shoppingAppData.mainImage.src}
            alt={shoppingAppData.mainImage.alt}
            style={{ zIndex: "4" }}
          />
        </div>
      </div>
      <div className="e-commerce-advance-cards-main">
        <div>
          <h2>E-Commerce app</h2>
          <div>
            {shoppingAppData.cardsData.map(({ description, image }, idx) => {
              return (
                <div className="e-commerce-advance-cards" key={idx}>
                  <div className="e-commerce-advance-cards-logo">
                    <img src={image.src} alt={image.alt} />
                  </div>
                  <div className="e-commerce-advance-cards-content">
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
