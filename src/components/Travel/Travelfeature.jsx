import React from "react";
import "./Travelfeature.css";

export default function Travelfeature() {
  const travelfeature = [
    {
      img: "Images/Travel/gps.png",
      p: "GPS based location services",
    },
    {
      img: "Images/Travel/hotdeals.png",
      p: "Hot deals",
    },
    {
      img: "Images/Travel/currency.png",
      p: "Currency Exchange",
    },
    {
      img: "Images/Travel/guide.png",
      p: "Complete travel guide",
    },
    {
      img: "Images/Travel/admin.png",
      p: "Easy to use admin control panel",
    },
    {
      img: "Images/Travel/secure.png",
      p: "Secure payment",
    },
  ];
  return (
    <div className="travelfeaturecontainer">
      <div className="travelfeaturesub">
        <div className="travelfeatureleft">
          {travelfeature.map((item) => {
            return (
              <div className="travelfeaturdocs">
                <div className="traveldocimg">
                  <img src={item.img} alt={item.p} />{" "}
                </div>
                <p>{item.p}</p>
              </div>
            );
          })}
        </div>
        <div className="travelfeatureright">
          <div>
            <h1>Features</h1>
            <p>
              Your business depends on understanding your customers and their
              needs. Bottom Funnel is an all-in-one travel app solution that
              offers you a comprehensive set of tools to make sure the customer
              experience is seamless and enjoyable for both parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
