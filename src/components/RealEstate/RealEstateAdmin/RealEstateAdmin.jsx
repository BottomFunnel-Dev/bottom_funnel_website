import React, { useState } from "react";
import './RealEstateAdmin.css';



export default function RealEstateAdmin({ plantBasedAdminData }) {
    const [active, setActive] = useState(0);
    return (
        <div className="plantBasedAdminPanel">
            <h1>{plantBasedAdminData.sectionTitle}</h1>
            <div className="plantBasedAdminPanelsub">
                <div className="plantBasedAdminPanelright">
                    {plantBasedAdminData.plantBasedAdminData.map(({ title, icon, para }, idx) => {
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
                    className="plantBasedAdminPanelleft"
                    style={{
                        background: `url(${plantBasedAdminData.background})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="plantBasedAdminPanel-image">
                        <img
                            src={plantBasedAdminData.plantBasedAdminData[active].img.src}
                            alt={plantBasedAdminData.plantBasedAdminData[active].img.alt}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

