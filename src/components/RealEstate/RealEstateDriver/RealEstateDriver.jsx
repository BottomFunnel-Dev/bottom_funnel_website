import React, { useState } from 'react'
import './RealEstateDriver.css'

export default function RealEstateDriver({ driveData }) {
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
                            src={driveData.driverdata[active].img.src}
                            alt={driveData.driverdata[active].img.alt}
                        />
                    </div>
                </div>

                <div className="plantBasedDriverAppright">
                    {driveData.driverdata.map(({ title, icon, para }, idx) => {
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

