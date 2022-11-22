import React from "react";
import "./OurProcessPush.css";

export const OurProcessPush = () => {
  const cardsData = [
    {
      title: "What we do best",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In numquam expedita rem nihil ducimus eligendi. Amet praesentium, laborum quod nemo doloribus vero iste facilis illo iure quo nostrum suscipit ex. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In numquam expedita rem nihil ducimus eligendi. Amet praesentium, laborum quod nemo doloribus vero iste facilis illo iure quo nostrum suscipit ex.",
    },
    {
      title: "How we started",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In numquam expedita rem nihil ducimus eligendi. Amet praesentium, laborum quod nemo doloribus vero iste facilis illo iure quo nostrum suscipit ex. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In numquam expedita rem nihil ducimus eligendi. Amet praesentium, laborum quod nemo doloribus vero iste facilis illo iure quo nostrum suscipit ex.",
    },
    {
      title: "What our goal",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In numquam expedita rem nihil ducimus eligendi. Amet praesentium, laborum quod nemo doloribus vero iste facilis illo iure quo nostrum suscipit ex. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In numquam expedita rem nihil ducimus eligendi. Amet praesentium, laborum quod nemo doloribus vero iste facilis illo iure quo nostrum suscipit ex.",
    },
  ];
  return (
    <div className="OurProcessPush-main">
      <p>PUSH YOUR BUSINESS WITH US!</p>
      <h1>
        We Help You With Our <span>Best In Class</span>
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In numquam
        expedita rem nihil ducimus eligendi. Amet praesentium, laborum quod nemo
        doloribus vero iste facilis illo iure quo nostrum suscipit ex. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. In numquam expedita
        rem nihil ducimus eligendi. Amet praesentium, laborum quod nemo
        doloribus vero iste facilis illo iure quo nostrum suscipit ex.
      </p>
      <div>
        {cardsData.map(({ title, body }, idx) => {
          return (
            <div>
              <h1>{idx + 1}</h1>
              <div>
                <h1>{title}</h1>
                <p>{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
