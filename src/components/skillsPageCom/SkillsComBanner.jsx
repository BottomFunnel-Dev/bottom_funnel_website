import React, { useState } from "react";
import "./SkillsComBanner.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

export const SkillsComBanner = ({ data }) => {
  const { image, title, description } = data;
  const color = "green";

  return (
    <div
      className="skills-banner-main"
      style={{
        background: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="skills-banner-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <button>Get Started</button>
    </div>
  );
};
