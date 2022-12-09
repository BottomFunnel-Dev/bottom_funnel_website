import React from "react";
import "./UXReviewEmotions.css";

export const UXReviewEmotions = () => {
  const cardsData = [
    "Images/UXReviewPhotos/gather.png",
    "Images/UXReviewPhotos/interpret.png",
    "Images/UXReviewPhotos/solution.png",
  ];

  const pointData = [
    {
      body: "Our experienced team of UX designers considers data, insights and business needs to assess the quality of user experience. A defined process addresses all UX challenges, big and small, and provides a realistic roadmap for future development.",
      image: "Images/UXReviewPhotos/design.png",
    },
    {
      body: "UX reviews can radically improve a digital product and expand its market reach. Affordable, fast, and guaranteed results. Over the past few years, we've identified a variety of usability issues, discussed UX improvements, justified design changes, and taken companies to new heights.",
      image: "Images/UXReviewPhotos/uxui.png",
    },
  ];

  return (
    <div className="UXReviewEmotions">
      <div className="UXReviewEmotions-container">
        <h1>
          Create design that <span>evoke emotions</span>
        </h1>
        <p>
          UX is all about creating an experience for users that is engaging and
          enjoyable by design.
        </p>

        <div className="UXReviewEmotions-points">
          {pointData.map(({ body, image }) => {
            return (
              <div className="UXReviewEmotions-points-main">
                <div>
                  <span></span>
                  <p>{body}</p>
                </div>
                <img src={image} alt="hello world" />
              </div>
            );
          })}
        </div>

        <div className="UXReviewEmotions-main">
          <div className="UXReviewEmotions-image">
            <img src="Images/UXReviewPhotos/discuss.png" alt="desktop.png" />
          </div>
          <div className="UXReviewEmotions-content">
            <h2>
              Bottom Funnel <span>UI</span> Practices
            </h2>
            <p>
              Bottom Funnel is an online store that co-creates brilliance and
              delivers an ever-evolving experience. We have a wide range of
              products.
            </p>
            <div>
              {cardsData.map((elem) => (
                <img key={elem} src={elem} alt="Practice points " />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
