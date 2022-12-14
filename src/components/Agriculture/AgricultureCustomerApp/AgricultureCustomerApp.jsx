import React, { useState } from "react";
import "./AgricultureCustomerApp.css";

export default function AgricultureCustomerApp({ agricultureCustomerApp }) {
    const [active, setActive] = useState(0);
    return (
        <div className="agricultureCustomerApp">
            <h1>{agricultureCustomerApp.sectionTitle}</h1>
            <div className="agricultureCustomerAppsub">
                <div className="agricultureCustomerAppright">
                    {agricultureCustomerApp.agricultureCustomerApp.map(({ title, icon, para }, idx) => {
                        return (
                            <div
                                key={title}
                                onMouseOver={() => setActive(idx)}
                                className={`agricultureCustomerAppApp-box-${idx}`}
                            >
                                <div className="agricultureCustomerAppApp-logo">
                                    <img src={icon.src} alt={icon.alt} />
                                </div>
                                <h3>{title}</h3>
                                <p>{para}</p>
                            </div>
                        );
                    })}
                </div>

                <div
                    className="agricultureCustomerAppleft"
                    style={{
                        background: `url(${agricultureCustomerApp.background})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="agricultureCustomerAppApp-customer-image">
                        <img
                            src={agricultureCustomerApp.agricultureCustomerApp[active].img.src}
                            alt={agricultureCustomerApp.agricultureCustomerApp[active].img.alt}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
