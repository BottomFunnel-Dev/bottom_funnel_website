import React, { useState } from "react";
import "./Logisticadmin.css";

export default function Logisticadmin({ adminData }) {
  const [active, setActive] = useState(0);
  return (
    <div className="logicadmin">
      <h1>{adminData.sectionTitle}</h1>
      <div className="logicadminsub">
        <div className="logicadminright">
          {adminData.admindata.map(({ title, icon, para }, idx) => {
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
          className="logicadminleft"
          style={{
            background: `url(${adminData.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 500px",
          }}
        >
          <div className="logistic-admin-image">
            <img
              src={adminData.admindata[active].img.src}
              alt={adminData.admindata[active].img.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
