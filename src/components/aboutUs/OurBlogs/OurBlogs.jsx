import React from "react";
import "./OurBlogs.css";

export const OurBlogs = () => {
  const cardsData = [
    {
      title: "Dummy text",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias ipsam dolores minus dolorem dolor mollitia, molestiae voluptates fugiat deserunt ullam rem fugit, corrupti, doloribus facilis! Commodi voluptas quam ullam.",
      image: "Images/aboutusImage/explaining.png",
      date: "Nov 21st, 2022",
    },
    {
      title: "Dummy text",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias ipsam dolores minus dolorem dolor mollitia, molestiae voluptates fugiat deserunt ullam rem fugit, corrupti, doloribus facilis! Commodi voluptas quam ullam.",
      image: "Images/aboutusImage/talking.png",
      date: "Nov 21st, 2022",
    },
    {
      title: "Dummy text",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias ipsam dolores minus dolorem dolor mollitia, molestiae voluptates fugiat deserunt ullam rem fugit, corrupti, doloribus facilis! Commodi voluptas quam ullam.",
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime aperiam
        sit doloremque nostrum voluptatibus corporis iusto praesentium optio
        neque, quos assumenda architecto atque mollitia expedita animi iste?
        Quisquam, veritatis nemo? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Maxime aperiam sit doloremque nostrum voluptatibus
        corporis iusto praesentium optio neque, quos assumenda architecto atque
        mollitia expedita animi iste? Quisquam, veritatis nemo?
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
