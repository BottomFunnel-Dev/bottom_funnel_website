import React, { useState } from "react";
import "./Wellnessadmin.css";

export default function Wellnessadmin({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className="wellnessadminMainDiv" style={{border:"2px solid red"}}>
      <h1>Admin App</h1>
      <div className="wellnessAdminsub">
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

        <div
          className="wellnessAdminleft"
          style={{
            background: `url(${customerData.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="wellness-customer-image">
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
