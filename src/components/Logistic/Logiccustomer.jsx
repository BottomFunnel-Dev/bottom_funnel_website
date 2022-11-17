import React, { useState } from "react";
import "./Logiccustomer.css";

export default function Logiccustomer({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className="logiccustomer">
      <h1>{customerData.sectionTitle}</h1>
      <div className="logiccustomersub">
        <div className="logiccustomerright">
          {customerData.customerdata.map(({ title, icon, para }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`logistic-box-${idx}`}
              >
                <div className="logistic-logo">
                  <img src={icon.src} alt={icon.alt} />
                </div>
                <h3>{title}</h3>
                <p>{para}</p>
              </div>
            );
          })}
        </div>

        <div
          className="logiccustomerleft"
          style={{
            background: `url(${customerData.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 500px",
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
