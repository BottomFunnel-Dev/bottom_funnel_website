import React, { useState } from "react";
import "./AlcoholAdminPanel.css";

export default function AlcoholAdminPanel({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className="alcoholAdmin">
      <h1>Admin App</h1>
      <div className="alcoholAdminsub">

        <div className="alcoholAdminright">
          {customerData.customerdata.map(({ title,para }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`alcohol-box-${idx}`}
              >
               
                <h3>{title}</h3>
                <p>{para}</p>
              </div>
            );
          })}
        </div>

        <div className="alcoholAdminleft">
          <div>
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


