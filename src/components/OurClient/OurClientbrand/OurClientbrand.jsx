import React, { useState } from "react";
import { ClientCards } from "../ClientCards/ClientCards";
import "./OurClientbrand.css";

export const OurClientbrand = ({ data }) => {
  const [more, setMore] = useState(false);

  return (
    <div className="OurClientbrand-main">
      <div className="OurClientbrand-heading">
        <hr />
        <h2>{data.title}</h2>
        <hr />
      </div>
      {more ? (
        <div className="OurClientbrand-content">
          {data.cardsData.map((elem) => {
            return <ClientCards data={elem} />;
          })}
        </div>
      ) : (
        <div>
          <div className="OurClientbrand-content">
            {data.cardsData.map((elem, idx) => {
              if (idx < 3) {
                return <ClientCards data={elem} />;
              }
            })}
          </div>
        </div>
      )}
      {!more ? (
        <div
          className="OurClientBrand-view-button"
          onClick={() => setMore(() => true)}
        >
          <p>View More</p>
          <div>
            <img
              src="Images/ourclientPhotos/arrow.gif"
              alt="Arrow animated icon"
            />
          </div>
        </div>
      ) : (
        <div
          className="OurClientBrand-view-button"
          onClick={() => setMore(() => false)}
        >
          <div>
            <img
              src="Images/ourclientPhotos/arrow-up.gif"
              alt="Arrow animated icon"
            />
          </div>
          <p>View Less</p>
        </div>
      )}
    </div>
  );
};
