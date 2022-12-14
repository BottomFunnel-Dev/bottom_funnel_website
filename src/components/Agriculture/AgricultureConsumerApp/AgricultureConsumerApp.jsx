// export const PlantBaseDriverApp = () => {
import React, { useState } from "react";
import "./AgricultureConsumerApp.css";

export default function AgricultureConsumerApp({ driveData }) {
    const [active, setActive] = useState(0);
    return (
        <div className="plantBasedDriverApp">
            {/* <h1>{driveData.sectionTitle}</h1> */}
            <div className="plantBasedDriverAppsub">
                <div
                    className="plantBasedDriverAppleft"
                    style={{
                        background: `url(${driveData.background})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="logistic-drive-image">
                        <img
                            src={driveData.agricultureCustomerData[active].img.src}
                            alt={driveData.agricultureCustomerData[active].img.alt}
                        />
                    </div>
                </div>

                <div className="plantBasedDriverAppright">
                    {driveData.agricultureCustomerData.map(({ title, icon, para }, idx) => {
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
            </div>
        </div>
    );
}
