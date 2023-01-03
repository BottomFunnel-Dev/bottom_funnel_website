import React from "react";
import "./ProductResources.css";
import { Link } from "react-router-dom";
import { productResources } from "../../../Data/Navbar";
export const ProductResources = ({ solResIn, solResOut, scroll }) => {
  return (
    <div
      onMouseEnter={solResIn}
      onMouseLeave={solResOut}
      className="productResourceMainDiv"
      style={{ top: scroll ? "6.5%" : "16%" }}
    >
      <div className="productResourceListItems" style={{ width: "100%" }}>
        {productResources.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              navigate(`/${item.path}`);
              solHoverOut();
            }}
            className="productResourceData"
          >
            <Link onClick={solResOut} to={item.path} className="productlinkP">
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
