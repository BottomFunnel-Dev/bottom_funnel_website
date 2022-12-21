import React, { useState } from "react";
import "./WellnessPatient.css";

export default function WellnessPatient({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className="wellnessPatient">
      <h1>Patient App</h1>
      <div className="wellnessPatientsub">
        <div className="wellnessPatientright">
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
          className="wellnessPatientleft"
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
