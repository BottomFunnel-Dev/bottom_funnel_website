import React, { useState } from "react";
import "./Datingmobile.css";

export default function Datingmobile({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className="datingcustomer">
      <h1>{customerData.sectionTitle}</h1>
      <div className="datingcustomersub">
        <div className="datingcustomerright">
          {customerData.customerdata.map(({ title, para }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`logistic-box-${idx}`}
              >
               
                <h3>{title}</h3>
                <p>{para}</p>
              </div>
            );
          })}
        </div>

        <div
          className="datingcustomerleft"
          style={{
            background: `url(${customerData.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="logistic-customer-image">
            <img
              src={customerData.customerdata[active].img.src}
              alt={customerData.customerdata[active].img.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
