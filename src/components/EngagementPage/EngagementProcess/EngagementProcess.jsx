import React from "react";
import "./EngagementProcess.css";

export const EngagementProcess = () => {
  return (
    <div className="EngagementProcess-container">
      <div>
        <h1>
          Bottom Funnel <span>Engagement Models</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi
          reiciendis magnam aliquam possimus molestiae esse deleniti nisi
          dolores delectus? Explicabo perferendis distinctio aliquam eveniet
          corrupti esse error eaque dolore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Enim sequi reiciendis magnam aliquam
          possimus molestiae esse deleniti nisi dolores delectus? Explicabo
          perferendis distinctio aliquam eveniet corrupti esse error eaque
          dolore.
        </p>
        <hr />
        <div className="EngagementProcess-main">
          <p>
            What makes our business process model unbeatbale is its flexibility.
            Clients' requirements constantly change (either by choice or
            chance), and we adjust to these changees anytime before delivery.
            Our engagement models are beneficial to clients because they propose
            competitive prices, dedicated resources, no hidden costs, and zero
            overheads. We want to work with you to the best of our abilities.
          </p>
          <div>
            <img src="Images/engagementPhotos/meeting.png" alt="metting.png" />
          </div>
        </div>
        <h1>
          Some of the <span>benefits</span> of choosing our engagement models
        </h1>
        <hr />
        <div className="EngagementProcess-main">
          <div>
            <img src="Images/engagementPhotos/discuss.png" alt="metting.png" />
          </div>
          <ul>
            <li>No complexities</li>
            <li>Transparent quotes</li>
            <li>Secured development</li>
            <li>Secured development environment</li>
            <li>No compromise with quality</li>
            <li>Calculated costs and budgeted rates</li>
            <li>Close-knit support</li>
            <li>100% Privacy maintain</li>
            <li>Standardized approach</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
