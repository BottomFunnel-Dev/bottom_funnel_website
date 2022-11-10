import React from "react";
import { ReviewStars } from "../ReviewStars/ReviewStars";
import "./RecentReview.css";

export const RecentReview = () => {
  let cardsData = [
    {
      image: "Images/clientrPhotos/tech.jpg",
      company: "Techify",
      star: 5,
      review: {
        title: "Amazing",
        body: "Amazing experience with bottom funnel team",
      },
    },
    {
      image: "Images/clientrPhotos/trade-tagline.jpg",
      company: "Tech tagline company",
      star: 3,
      review: {
        title: "Amazing",
        body: "Amazing behaviour of bottom funnel team",
      },
    },
    {
      image: "Images/clientrPhotos/microsoft.jpg",
      company: "Microsoft",
      star: 5,
      review: {
        title: "Good envirnment",
        body: "Good envirnment in bottom funnel team",
      },
    },
    {
      image: "Images/clientrPhotos/trade-plus.jpg",
      company: "Trade Plus",
      star: 4,
      review: {
        title: "Great team",
        body: "Great skill set of the bottom funnel team",
      },
    },
    {
      image: "Images/clientrPhotos/indian-oil.jpg",
      company: "Indian Oil",
      star: 5,
      review: {
        title: "Amazing",
        body: "Amazing experience with bottom funnel team",
      },
    },
    {
      image: "Images/clientrPhotos/coca-cola.jpg",
      company: "Coca Cola",
      star: 5,
      review: {
        title: "Amazing",
        body: "Amazing experience with bottom funnel team",
      },
    },
  ];

  return (
    <div className="RecentReview-main">
      <h1>Recent Reviews of Our Clients</h1>
      <div>
        {cardsData.map((elem) => {
          return (
            <div className="RecentReview-Content">
              <div className="RecentReview-company-main">
                <div className="RecentReview-logo">
                  <img src={elem.image} alt={elem.company} />
                </div>
                <div className="RecentReview-company">
                  <h3>{elem.company}</h3>
                  <ReviewStars num={elem.star} />
                </div>
              </div>
              <h4>{elem.review.title}</h4>
              <p>{elem.review.body}</p>
              <button>Read Review</button>
            </div>
          );
        })}
      </div>
      <button>LOAD MORE</button>
    </div>
  );
};
