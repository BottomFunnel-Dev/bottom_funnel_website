import React from "react";
import { ProductsCards } from "../cards/ProductsCards";
import "./ProductsMain.css";

export const ProductsMain = () => {
  let productData = [
    {
      name: "Bottom Funnel Omnichannel",
      description: "Delight your customer with effortless omnichannel service.",
    },
    {
      name: "Bottom Funnel Support Desk",
      description:
        "Delight your customer with effortless Support Desk service.",
    },
    {
      name: "Bottom Funnel Contact Center",
      description:
        "Delight your customer with effortless Contact Center service.",
    },
    {
      name: "Bottom Funnel Chat",
      description: "Delight your customer with effortless Chat service.",
    },
    {
      name: "Bottom Funnel Service",
      description: "Delight your customer with effortless Service service.",
    },
    {
      name: "Bottom Funnel Sales",
      description: "Delight your customer with effortless Sales service.",
    },
    {
      name: "Bottom Funnel Suite",
      description: "Delight your customer with effortless Suite service.",
    },
    {
      name: "Bottom Funnel Team",
      description: "Delight your customer with effortless Team service.",
    },
    {
      name: "Bottom Funnel Marketer",
      description: "Delight your customer with effortless Marketer service.",
    },
  ];

  return (
    <div className="Products-Main">
      {productData.map((elem, idx) => {
        return <ProductsCards key={idx} cardData={elem} />;
      })}
    </div>
  );
};
