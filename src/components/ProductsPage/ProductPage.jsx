import React from "react";
import MainFooter from "../FooterSection/MainFooter";
import { ProductBanner } from "./Banner/ProductBanner";
import "./ProductPage.css";
import { ProductsMain } from "./Products/ProductsMain";

export const ProductPage = () => {
  return (
    <div>
      <ProductBanner />
      <ProductsMain />
      <MainFooter />
    </div>
  );
};
