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
      body: "Our experienced team of UX Designers take data, insights, and business requirements into account to asses the quality of user experience. With a defined process, we counter any UX challenges-big or small, provide a realistic roadmap for future developments.",
      image: "Images/UXReviewPhotos/design.png",
    },
    {
      body: "WX Review can radically improve a digital product and expand its market reach. It is affordable, takes less time and provides guaranteed results. Over the past few years, we have identified a vast range of usability issues, discussed UX improvements, substaintiated design changes and scaled businesses to new height.",
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
          We build interfaces that are effortless, intuitive, immersive and
          seamlessly guide users in performing the desired action.
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
              Bottom Funnel is an online store that crafts brilliance together
              and delivers experience that are even evolving. We have a wide
              range of products.
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
