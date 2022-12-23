import React from "react";
import "./products.css";
export const Products = ({productHoverIn,productHoverOut, scroll}) => {
  return (
    <div className="productNavVisible" onMouseEnter={productHoverIn} onMouseLeave={productHoverOut} style={{ top: scroll ? "75px" : "112px" }}>
      <h1>Hello products dropdown</h1>
    </div>
  );
};
