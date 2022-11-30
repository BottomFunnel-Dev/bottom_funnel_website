import React from "react";
import "./MetaverseServices.css";

export const MetaverseServices = () => {
  return (
    <div className="MetaverseServices-container">
      <h1>
        <span>Metaverse</span> Services
      </h1>
      <div className="MetaverseServices-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        In futurism and science fiction, the metaverse is a hypothetical
        iteration of the internet as a single, universal and immersive virtual
        world that is facilitated by the use of virtual reality and augmented
        reality headsets. In colloquial use, a metaverse is a network of 3D
        virtual worlds focused on social connection.
      </p>
      <div className="MetaverseServices-image">
        <img src="Images/metaversePhotos/process.png" alt="Process flowchart" />
      </div>
    </div>
  );
};
