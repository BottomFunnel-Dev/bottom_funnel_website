import React from "react";
import { MediaSection } from "./MediaSection/MediaSection";
import "./NewsEvent.css";
import { NewsEventBanner } from "./NewsEventBanner/NewsEventBanner";
import { NewsEventSection } from "./NewsEventSection/NewsEventSection";
import { NewsEventSlider } from "./NewsEventSlider/NewsEventSlider";

export const NewsEvent = () => {
  return (
    <div style={{ color: "#393939" }}>
      <NewsEventBanner />
      <NewsEventSection />
      <MediaSection />
      <NewsEventSlider />
    </div>
  );
};
