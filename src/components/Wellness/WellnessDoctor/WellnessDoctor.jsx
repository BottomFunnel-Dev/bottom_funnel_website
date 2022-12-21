import React, { useState } from "react";
import "./WellnessDoctor.css";

export default function WellnessDoctor({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className="wellnessDoctor">
      <h1>Doctor Panel</h1>
      <div className="wellnessDoctorsub">
        <div className="wellnessDoctorright">
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

        <div className="wellnessDoctorleft">
          <div className="wellnessDoctor-customer-image">
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
