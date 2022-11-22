import React from "react";
import "./AboutUS.css";
import { AboutusBanner } from "./AboutusBanner/AboutusBanner";
import { OurAchievements } from "./OurAchievements/OurAchievements";
import { OurBlogs } from "./OurBlogs/OurBlogs";
import { OurProcess } from "./OurProcess/OurProcess";
import { WorkLifeBalance } from "./WorkLifeBalance/WorkLifeBalance";

export const AboutUS = () => {
  return (
    <div className="AboutUS-main">
      <AboutusBanner />
      <OurProcess />
      <OurAchievements />
      <WorkLifeBalance />
      <OurBlogs />
    </div>
  );
};
