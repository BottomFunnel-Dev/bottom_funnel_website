import React from "react";
import "./OurBlogs.css";

export const OurBlogs = () => {
  const cardsData = [
    {
      title: "How much does it cost to develop a mobile application",
      body: "The cost of developing a mobile application can vary depending on the size and scope of the project.",
      image: "Images/aboutusImage/explaining.png",
      date: "Nov 21st, 2022",
    },
    {
      title: "How much does it cost to web development services",
      body: "Web development services can vary greatly in price, so it is important to do your research before making a decision.",
      image: "Images/aboutusImage/talking.png",
      date: "Nov 21st, 2022",
    },
    {
      title: "Grab world best digital marketers for all your marketing needs",
      body: "If you're looking for a reliable and affordable digital marketing team, then you should consider hiring world best digital marketers.",
      image: "Images/aboutusImage/meeting.png",
      date: "Nov 21st, 2022",
    },
  ];
  return (
    <div className="OurBlogs-container">
      <h1>
        Our Latest <span>Blog</span> Posts
      </h1>
      <p>
        Bottom Funnel's blog is a repository of information on a wide range of
        topics. It offers an insight into different cultures and lifestyles,
        from food to fashion and music, in addition to useful travel tips for
        travelers.
      </p>
      <div className="OurBlogs-main">
        {cardsData.map(({ title, body, image, date }, idx) => {
          return (
            <div className="OurBlogs-cards-main" key={idx}>
              <div className="OurBlogs-cards-image">
                <img src={image} alt={title} />
              </div>
              <h2>{title}</h2>
              <p>{body}</p>
              <div className="OurBlogs-card-date-more">
                <p>{date}</p>
                <p style={{ color: "#ef4c23" }}>Read More</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
