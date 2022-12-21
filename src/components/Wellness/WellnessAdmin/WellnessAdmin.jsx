import React, { useState } from "react";
import "./WellnessAdmin.css";

export default function WellnessAdmin({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className="wellnessAdmin">
      <h1>Admin Panel</h1>
      <div className="wellnessAdminsub">

       <div className="wellnessAdminleft">
          <div className="wellnessAdmin-customer-image">
            <img
              src={customerData.customerdata[active].img.src}
              alt={customerData.customerdata[active].img.alt}
            />
          </div>
        </div>

        <div className="wellnessAdminright">
          {customerData.customerdata.map(({ title,para }, idx) => {
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


      </div>
    </div>
  );
}
