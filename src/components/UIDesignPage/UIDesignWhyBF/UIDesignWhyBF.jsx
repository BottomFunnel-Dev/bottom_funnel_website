import React from "react";
import "./UIDesignWhyBF.css";

export const UIDesignWhyBF = () => {
  return (
    <div className="UIDesignWhyBF-container">
      <h1>
        What we do at <span>Bottom Funnel</span>
      </h1>
      <p>
        Our experience team of Design Strategists visualize creative ideas and
        materialize them into end designs for our customers. They dig deep and
        draft a visual language that the user understands.
      </p>
      <div className="UIDesignWhyBF-main">
        <div className="UIDesignWhyBF-images">
          <img src="Images/UIDesignPhotos/phone.png" alt="phone.png" />
          <img src="Images/UIDesignPhotos/macbook.png" alt="macbook.png" />
          <img src="Images/UIDesignPhotos/designing.png" alt="designing.png" />
        </div>
        <ul>
          <li>
            <span>Business discovery</span> and user research
          </li>
          <li>
            <span>Product</span> and marketing UX strategy
          </li>
          <li>
            <span>User interface</span> and visual design
          </li>
          <li>
            <span>Front-end engineering</span> and platform integration
          </li>
          <li>
            <span>Usability</span> testing and analytics
          </li>
          <li>
            <span>Design sprints</span> and prototyping
          </li>
          <li>
            <span>Customer journey</span> mapping
          </li>
          <li>
            <span>UX</span> Workshops
          </li>
        </ul>
      </div>
    </div>
  );
};
