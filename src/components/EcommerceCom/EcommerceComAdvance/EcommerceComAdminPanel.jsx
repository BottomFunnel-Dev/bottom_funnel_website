import React from "react";
import "./EcommerceComAdminPanel.css";

export const EcommerceComAdminPanel = () => {
  let adminPanelData = {
    backgroundImage: {
      src: "Images/EcommercePhotos/background-blue.png",
      alt: "admin panel background image",
    },
    mainImage: {
      src: "Images/Ecommercephotos/admin-panel.png",
      alt: "admin panel image",
    },
    cardsData: [
      {
        image: {
          src: "Images/Ecommercephotos/one.png",
          alt: "can be easily accessed through both android/ios",
        },
        description:
          "It has easy to understand templates and customisable app designs to give the customer comfort of use.",
      },
      {
        image: {
          src: "Images/Ecommercephotos/two.png",
          alt: "user-friendly interface logo",
        },
        description:
          "It has easy to understand templates and customisable app designs to give the customer comfort of use.",
      },
      {
        image: {
          src: "Images/Ecommercephotos/three.png",
          alt: "Order food and track their service logo",
        },
        description:
          "It has easy to understand templates and customisable app designs to give the customer comfort of use.",
      },
      {
        image: {
          src: "Images/Ecommercephotos/four.png",
          alt: "Smart search and add-to-your-favorites list logo",
        },
        description:
          "It has easy to understand templates and customisable app designs to give the customer comfort of use.",
      },
      {
        image: {
          src: "Images/Ecommercephotos/five.png",
          alt: "Dummy text logo",
        },
        description:
          "It has easy to understand templates and customisable app designs to give the customer comfort of use.",
      },
      {
        image: {
          src: "Images/Ecommercephotos/six.png",
          alt: "Dummy text logo",
        },
        description:
          "It has easy to understand templates and customisable app designs to give the customer comfort of use.",
      },
    ],
  };

  return (
    <div className="e-commerce-admin-main">
      <div className="e-commerce-advance-cards-main">
        <div>
          <h2>Admin panel</h2>
          <div>
            {adminPanelData.cardsData.map(({ description, image }) => {
              return (
                <div className="e-commerce-advance-cards">
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
      <div className="e-commerce-admin-images-main">
        <div>
          <img
            src={adminPanelData.backgroundImage.src}
            alt={adminPanelData.backgroundImage.alt}
            style={{ zIndex: "1" }}
          />
        </div>
        <div>
          <img
            src={adminPanelData.mainImage.src}
            alt={adminPanelData.mainImage.alt}
            style={{ zIndex: "4" }}
          />
        </div>
      </div>
    </div>
  );
};
