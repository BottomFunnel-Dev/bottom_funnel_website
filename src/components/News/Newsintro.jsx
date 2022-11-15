import React from "react";
import "./Newsintro.css";

export default function Newsintro() {
  return (
    <div className="newsintrocontainer">
      <div className="newsintrosub">
        <div className="newsintroleft">
          <div>
            <h2>Magazine & Newspaper App Development</h2>
            <p>
              We are Magazine & Newspaper App Development Company that
              specializes in building apps for your favorite publications.
              Whether you want to stay up-to-date with the latest news or read
              insightful features, we have the perfect app for you. We offer a
              wide range of features with different levels of complexity, so
              that you can be sure your app will meet all your needs.
            </p>
            <button className="newsintrogetbtn">Request a proposal</button>
          </div>
        </div>
        <div className="newsintroright">
          <div className="newsintroimage">
            <img src="Images/News/phone.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
