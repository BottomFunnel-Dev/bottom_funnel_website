import React from "react";
import { CareerBanner } from "./CareerBanner/CareerBanner";
import { CareerHiring } from "./CareerHiring/CareerHiring";
import { CareerOpening } from "./CareerOpening/CareerOpening";
import "./CareerPage.css";
import { CareerWhy } from "./CareerWhy/CareerWhy";

export const CareerPage = () => {
  return (
    <div>
      <CareerBanner />
      <CareerOpening />
      <CareerHiring />
      <CareerWhy />
    </div>
  );
};
